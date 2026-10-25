
const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer(async (req, res) => {
    const urlPath = new URL(
        req.url,
        `http://${req.headers.host}`
    );

    const pathName = urlPath.pathname;
    const fileName = urlPath.searchParams.get("fname");

    const fileDir = path.join(__dirname, "files");

    // Create the files folder if it doesn't exist
    fs.mkdirSync(fileDir, { recursive: true });

    // Common response headers
    res.setHeader("Content-Type", "text/plain; charset=utf-8");

    // Validate filename
    if (
        ["/write", "/read", "/append", "/delete"].includes(pathName) &&
        (!fileName || fileName !== path.basename(fileName))
    ) {
        res.writeHead(400);
        res.end("A valid filename is required");
        return;
    }

    const filePath = fileName
        ? path.join(fileDir, fileName)
        : null;

    // Read JSON body for Write and Append
    let body = {};

    if (
        (pathName === "/write" && req.method === "POST") ||
        (pathName === "/append" && req.method === "PUT")
    ) {
        try {
            let rawBody = "";

            for await (const chunk of req) {
                rawBody += chunk;

                if (rawBody.length > 1024 * 1024) {
                    res.writeHead(413);
                    res.end("Request body is too large");
                    return;
                }
            }

            body = JSON.parse(rawBody || "{}");
        } catch (error) {
            res.writeHead(400);
            res.end("Invalid JSON request body");
            return;
        }

        if (
            typeof body.content !== "string" ||
            body.content.length === 0
        ) {
            res.writeHead(400);
            res.end("Content is required");
            return;
        }
    }

    // ---------------- WRITE ----------------

    if (pathName === "/write" && req.method === "POST") {
        if (fs.existsSync(filePath)) {
            res.writeHead(409);
            res.end("File already exists");
            return;
        }

        fs.writeFile(filePath, body.content, "utf8", (error) => {
            if (error) {
                res.writeHead(500);
                res.end("Unable to write file");
                return;
            }

            res.writeHead(201);
            res.end("File created successfully");
        });

        return;
    }

    // ---------------- READ ----------------

    if (pathName === "/read" && req.method === "GET") {
        fs.readFile(filePath, "utf8", (error, data) => {
            if (error) {
                res.writeHead(
                    error.code === "ENOENT" ? 404 : 500
                );
                res.end(
                    error.code === "ENOENT"
                        ? "File not found"
                        : "Unable to read file"
                );
                return;
            }

            res.writeHead(200);
            res.end(data);
        });

        return;
    }

    // ---------------- APPEND ----------------

    if (pathName === "/append" && req.method === "PUT") {
        if (!fs.existsSync(filePath)) {
            res.writeHead(404);
            res.end("File not found");
            return;
        }

        fs.appendFile(
            filePath,
            body.content,
            "utf8",
            (error) => {
                if (error) {
                    res.writeHead(500);
                    res.end("Unable to append to file");
                    return;
                }

                res.writeHead(200);
                res.end("Content appended successfully");
            }
        );

        return;
    }

    // ---------------- DELETE ----------------

    if (pathName === "/delete" && req.method === "DELETE") {
        fs.unlink(filePath, (error) => {
            if (error) {
                res.writeHead(
                    error.code === "ENOENT" ? 404 : 500
                );
                res.end(
                    error.code === "ENOENT"
                        ? "File not found"
                        : "Unable to delete file"
                );
                return;
            }

            res.writeHead(200);
            res.end("File deleted successfully");
        });

        return;
    }

    // ---------------- INVALID ROUTE ----------------

    res.writeHead(404);
    res.end("Route not found");
});

server.listen(3000, (error) => {
    if (error) {
        console.log(error);
        return;
    }

    console.log("Running on http://127.0.0.1:3000");
});




// http=require("http")
// fs=require("fs")
// const main=(req,res)=>{
//     const urlPath=new URL(req.url,'http://${req.headers.host}');
//     if(urlPath.pathname==="/readfile"){
//         fs.readFile("index.js","utf8",(error,data)=>{
//             if(error){
//                 console.log(error)
//             }
//             res.writeHead(200,{"cotent-type":text/html})
//             res.end("<pre>"+data+"</pre>")
//         })
//     }
// }
// const server=http.createServer(main);
// server.listen(3000,(error)=>{
//     if(error){
//         console.log(error)
//     }
//     console.log("Running on http://127.0.0.1:3000")
// })






// http=require("http");
// url=require("url")

// const main=(req,res)=>{
//     const urlPath=url.parse(req.url)
//     const path=urlPath.pathname;
//     if(path==="/"){
//     res.writeHead(200,{"content-type":"text/html"})
//     res.write("<h2>Welcome to Nodejs <h2>")
//     res.end("wleocme tto js")
// }else if(path==="/about"){
//     res.writeHead(200,{"content-type":"application/json"})
    
//     const info={
//         name:"abc",
//         address:"kiet"
//     }
//     res.end(JSON.stringify(info))
    
    
// }else if(path==="/product/1"){
//     const pid=req.url.split("/")[2];
//     res.writeHead(200,{"content-type":"text/html"})
//     res.end("<h2>Page not found</h2>")
// }else{
//     res.writeHead(404,{"content-type":"text/html"})
//     res.end("<h2>Page not found <h2>")
// }
// }

// const server=http.createServer(main)
// server.listen(3000,(error)=>{
//     if(error){
//         console.log(error);
        
//     }
//     console.log("Running app on this address:http://127.0.0.1:3000");
    
// })