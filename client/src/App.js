import logo from './logo.svg';
import './App.css';
import { MdClose } from "react-icons/md";
import { useEffect, useState } from 'react';
import axios from "axios"
import Formtable from './components/Formtable';

axios.defaults.baseURL = "http://localhost:8080/"

function App() {
  const [addSection,setAddSection] = useState(false)
  const [editSection,setEditSection] = useState(false)
  const [formData,setformData] = useState({
    name : "",
    email : "",
    mobile : "",
})  
const [formDataEdit,setformDataEdit] = useState({
  name : "",
  email : "",
  mobile : "",
  _id :""
})  
const[datalist,setDatalist] = useState([])

const handleOnChange = (e)=>{
  const {value,name} = e.target
  setformData((preve)=>{
    return{
      ...preve,
      [name] : value
    }
  })
}

  const handleSubmit = async(e)=>{
    e.preventDefault()
    const data = await axios.post("/create",formData)
    console.log(data)
    if(data.data.success){
      setAddSection(false)
      alert(data.data.message)
      getFetchData ()
    }
  }
  const getFetchData = async(e)=>{
    const data = await axios.get("/")
    console.log(data)
    if(data.data.success){
      setDatalist(data.data.data)
    }
  }
  useEffect(()=>{
    getFetchData ()
  },[])

  const handleDelete = async(id)=>{
    const data = await axios.delete("/delete/"+id)

    if(data.data.success){
      getFetchData ()
      alert(data.data.message)
    }

  }

  const handleUpdate = async(e)=>{
    e.preventDefault()
    const data = await axios.put("/update/",formDataEdit)
    if(data.data.success){
      getFetchData ()
      alert(data.data.message)
      setEditSection(false)
    }
  }
  const handleEditOnChange =async(e)=>{
    const {value,name} = e.target
    setformDataEdit((preve)=>{
      return{
        ...preve,
        [name] : value
      }
    })
  }
  const handleEdit = (e1)=>{
    setformDataEdit(e1)
    setEditSection(true)

  }

  return (
    <>
    <div className="container">
      <button className="btn btn-add" onClick={()=>setAddSection(true)}>Add</button>

      {
        addSection && (
          <Formtable
          handleSubmit={handleSubmit}
          handleOnChange={handleOnChange}
          handleclose= {()=>setAddSection(false)}
          rest={formData}
          />
        )
      }
      {
        editSection && (
          <Formtable
          handleSubmit={handleUpdate}
          handleOnChange={handleEditOnChange}
          handleclose= {()=>setEditSection(false)}
          rest={formDataEdit}
          />
        )
      }

<div className='tableContainer'>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Mobile</th>
        <th>
          
        </th>
      </tr>
    </thead>
    <tbody>
  { datalist[0] ? (
    datalist.map((e1) =>{
      console.log(e1)
      return(
        <tr>
        <td>{e1.name}</td>
        <td>{e1.email}</td>
        <td>{e1.mobile}</td>
        <td>
         <button className='btn btn-edit' onClick={()=>handleEdit(e1)}>Edit</button>
         <button className='btn btn-delete' onClick={()=>handleDelete(e1._id)}>Delete</button>
        </td>
      </tr>
    )

  })   
  )

  :(
    <p>No data</p>
  )
  }

</tbody>
  </table>
</div>
     

    </div>
    </>
  );
}

export default App;
