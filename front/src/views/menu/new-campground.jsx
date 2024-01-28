import { useState } from "react"
import {  toast } from "react-toastify";
import { connectionData } from "../../connection/apiConnection"
import NewCampgroundForm from "./new-campground-form"


const NewCampground = () => {
  const [form, setForm] = useState({
    title: "",
    email: "",
    description: "",
    image: "",
  })
/**
 * Create post
 * @param {*} e 
 */
  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await connectionData('posts',"POST",form)

    if (res.ok) {
      //alert("Post creado correctamente")   
      toast.success("Post creado correctamente");
      setForm({
        title: "",
        email: "",
        description: "",
        image: "",
      })   
    }
  }

  return (
  
    <div className="min-vh-100">
      <h1 className="text-center">New Campground</h1>

      <NewCampgroundForm form={form} setForm={setForm} handleSubmit={handleSubmit}/>

    </div>
  )
}

export default NewCampground


