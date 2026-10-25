import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./component/home/Home";

const App = () => {
    return (
        // <BrowserRouter>

        //     <Routes>
        //         <Route path="/" element={<Home />} />
        //     </Routes>

        // </BrowserRouter>
        <Home />
    );
}






// import React from 'react'

// import Header from "./component/header/Header";
// import Body from "./component/body/Body";
// import Navbar from "./component/navbar/Navbar";
// import Product from "./component/product/Product";

// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";


// const App = () => {
//   return (
//     <BrowserRouter>

//       <Navbar />

//       <Header />

//       <Routes>

//         <Route path="/" element={<Body />} />

//         <Route
//           path="/product/:productId"
//           element={<Product />}
//         />

//       </Routes>

//     </BrowserRouter>
//   )
// }

export default App;

  // let initName={
  //   id:1,
  //   name:"Khushi"
  // }
  // const[nameObj,setName]=useState(initName);
  // function changeName(newName){
  //   console.log(nameObj);
  //   setName({...nameObj,name:newName});
  //   console.log(nameObj);
  // }
  // return(
  //   <div>
  //     <h1>Name:{name}</h1>
  //     <button onClick={()=>changeName("Rachel")}>Change Name</button>
  //   </div>
  // )

  // const[arr,setArr]=useState([1,2,3,4]);
  // const plusTwo=()=>{
  //   let temNum=[]

  //   arr.map((num,index)=>{
  //     temNum[index]=num+2
  //   })
  //   setArr(temNum)
  // }
  // return(
  //   <div>
  //       <h2>List of numbers</h2>
  //       {
  //         arr.map((num, index)=><h2 key={index}>{num}</h2>)
  //       }
  //       <button onClick={plusTwo}>+2</button>
  //   </div>
  // )

//   const[number, setnumber]=useState([{
//   id:1,name:"s1",class:"mca",result:"fail"
// },
// {
//   id:2,name:"s2",class:"mca",result:"fail"
// },
// {
//   id:3,name:"s3",class:"mca",result:"fail"
// },
// {
//   id:4,name:"s4",class:"mca",result:"fail"
// },
// ]);
// const updateinfo=()=>{
//     setstudentInfo=()=>{
//       setstudentInfo((prevstudent))=>(
//         prevstudent.map((row))=>({...row,name:"Name"+row.id})
//       );
//     };
//   }
//   return(
//     <div>
//       <h2>List of numbers</h2>
//       {setstudentInfo.map((row)=>(
//         <div key={row.id}>
//           <h2>
//             id:{row.id},name:{row.name},"marks: "{Array.isArray(row.marks)?row.marks.join(","):row.marks}
//           </h2>
//         </div>
//       ))}
//     </div>
//   )


// export default function App() {
  
  // let name= "KIET MCA LAB 2"; //use let instead of var 
  // let listofname={
  //   name:"kiet",
  //   id:2,
  //   class:"mca sec c"
  // }
  // let lang=[
  //   "java","cpp","python","react js","mojo","flutter"
  // ]
  // for (let i=0;i<lang.length;i++) {
  //   {lang[i]}
  // }
  // return (
  // <> 
  // <h1>List of languages</h1>
  // {lang.map(value,index=>(
  //   <li key={index}>{index}. {value}</li>
  // ))}
  // </>
  // ) 
// }