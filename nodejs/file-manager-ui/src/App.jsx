
import { useState } from "react";
import "./App.css";

function App() {
    const [fileName, setFileName] = useState("abc.txt");
    const [content, setContent] = useState("");
    const [fileContent, setFileContent] = useState("");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);
    const [lastOperation, setLastOperation] = useState("");

    const handleOperation = async (operation) => {
        const name = fileName.trim();

        if (!name) {
            setResult("Please enter a filename.");
            return;
        }

        if (
            (operation === "write" || operation === "append") &&
            content.length === 0
        ) {
            setResult("Please enter the content.");
            return;
        }

        const methods = {
            write: "POST",
            read: "GET",
            append: "PUT",
            delete: "DELETE",
        };

        const params = new URLSearchParams();
        params.set("fname", name);

        const options = {
            method: methods[operation],
            headers: {},
        };

        // Send content in the body, not in the URL
        if (operation === "write" || operation === "append") {
            options.headers["Content-Type"] = "application/json";
            options.body = JSON.stringify({ content });
        }

        setLoading(true);
        setResult("");
        setLastOperation(operation);

        try {
            const response = await fetch(
                `/api/${operation}?${params.toString()}`,
                options
            );

            const data = await response.text();

            if (!response.ok) {
                setResult(data || `Request failed (${response.status})`);
                return;
            }

            if (operation === "read") {
                setFileContent(data);
                setResult("File read successfully.");
            } else {
                setResult(data);

                if (operation === "write") {
                    setFileContent(content);
                    setContent("");
                }

                if (operation === "append") {
                    setFileContent((previous) => previous + content);
                    setContent("");
                }

                if (operation === "delete") {
                    setFileContent("");
                    setContent("");
                }
            }
        } catch (error) {
            setResult(
                "Unable to connect. Check that the Node.js server is running."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="app">
            <header className="topbar">
                <div className="brand">
                    <div className="logo">FM</div>
                    <div>
                        <h1>File Manager</h1>
                        <p>Simple file operations</p>
                    </div>
                </div>

                <span className="server-status">
                    <span className="status-dot"></span>
                    Local server
                </span>
            </header>

            <div className="workspace">
                <section className="editor-panel">
                    <div className="section-heading">
                        <div>
                            <h2>Manage your file</h2>
                            <p>Create, read, append or delete a text file.</p>
                        </div>
                    </div>

                    <label htmlFor="fileName">File name</label>
                    <input
                        id="fileName"
                        value={fileName}
                        onChange={(event) => setFileName(event.target.value)}
                        placeholder="example.txt"
                    />

                    <label htmlFor="content">New content</label>
                    <textarea
                        id="content"
                        rows="7"
                        value={content}
                        onChange={(event) => setContent(event.target.value)}
                        placeholder="Enter content for Write or Append..."
                    />

                    <div className="button-grid">
                        <button
                            className="write"
                            disabled={loading}
                            onClick={() => handleOperation("write")}
                        >
                            Write file
                        </button>

                        <button
                            className="read"
                            disabled={loading}
                            onClick={() => handleOperation("read")}
                        >
                            Read file
                        </button>

                        <button
                            className="append"
                            disabled={loading}
                            onClick={() => handleOperation("append")}
                        >
                            Append content
                        </button>

                        <button
                            className="delete"
                            disabled={loading}
                            onClick={() => handleOperation("delete")}
                        >
                            Delete file
                        </button>
                    </div>

                    <div className="response" aria-live="polite">
                        <h3>{loading ? "Processing..." : "API Response"}</h3>
                        <p>{result || "Your operation result will appear here."}</p>
                    </div>
                </section>

                <section className="preview-panel">
                    <div className="section-heading">
                        <div>
                            <h2>File preview</h2>
                            <p>{fileName.trim() || "No filename entered"}</p>
                        </div>

                        <button
                            className="clear-button"
                            onClick={() => {
                                setFileContent("");
                                setResult("");
                            }}
                        >
                            Clear preview
                        </button>
                    </div>

                    <pre className="file-preview">
                        {fileContent ||
                            "No file content to display. Use Read file to load a file."}
                    </pre>

                    <p className="preview-note">
                        {lastOperation === "append"
                            ? "The latest text was appended to the preview."
                            : "Read a file to display its contents here."}
                    </p>
                </section>
            </div>
        </main>
    );
}

export default App;
