import React, { useState } from 'react'
import Student from './Student'
const Body=()=>{
const [Studentinfo,setstudentInfo]=useState(
    [
        
        {id:1,name:'s1',marks:90,class:'mca-c'},
        {id:2,name:'s2',marks:80,class:'mca-c'},
        {id:3,name:'s3',marks:70,class:'mca-c'},
        {id:4,name:'s4',marks:60,class:'mca-c'},
        
    ]
)
    return(
        <div>
            <h2>Body</h2>
            <table>
                <thead>
                    <h2>Student information</h2>
                    <tr><th>ID</th><th>Name</th><th>Marks</th><th>Section</th></tr>
                </thead>
                <tbody>
            <Student 
            id={Studentinfo[0].id} 
            name={Studentinfo[0].name}
            marks={Studentinfo[0].marks}
            section={Studentinfo[0].class}
            />
            </tbody>
            </table>
        </div>
    )
}

export default Body

//what is control component : which do not have its own state
// if student dont have its own components and its parent componets have variable and passes to srudent using props. if student have its own variable and parents have its own then parent cannot update student variable at run time.
// if any prop passes to student that prop is read only and do not change at run time.
// if component made its own state variable no other component can change its state.
// but if parent have to change the value then we remove the state from child and pass it to the parent component. thats bubbling of event. 