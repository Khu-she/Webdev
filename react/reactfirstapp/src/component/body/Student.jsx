import React from 'react'

const Student = (props) => {
    const{id,name,marks,section}=props
  
    const heading={
        color:'yellow'
    }
  return (

    <div>
        <tr> 
        <h2 style={heading}>Student Information</h2>
    
        <td style={{fontSize:'20px',color:'green'}}>student id :{id}</td>
        <td style={{fontSize:'20px',color:'green'}}>student name :{name}</td>
        <td style={{fontSize:'20px',color:'green'}}>student marks :{marks}</td>
        <td style={{fontSize:'20px',color:'green'}}>student section :{section}</td>
        </tr>
    </div>
   
  )
}

export default Student