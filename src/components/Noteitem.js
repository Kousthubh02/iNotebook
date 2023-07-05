import React from 'react'

const Noteitem = (props) => {
 const {note}=props;
 
    return (
       <div className="card my-3 mx-3 shadow" style={{"width": "18rem"}}>
  <div className="card-body">        
    <h5 className="card-title">{note.title}</h5>
    <p className="card-text">{note.description} </p>
   <div className="d-flex align-items-center justify-content-center">
    <a href="#" className="btn btn-outline-warning mx-2"><i className="fa-solid fa-pen-to-square"></i></a>
    <a href="#" className="btn btn-outline-danger mx-2"><i className="fa-solid fa-trash"></i></a>
   </div>
  </div>
</div>    
  )
}

export default Noteitem
