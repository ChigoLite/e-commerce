import React,{useState} from 'react';
import axios from 'axios'
const Post = () => {
  const [image, setImage] = useState([])
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [size, setSize] = useState('')
  const [amount, setAmount] = useState('')
  
  const handleChange = (e) => {
    const file = (e.target.files[0])
    console.log(file);
    setFileToBase(file)
  }

  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onload = () => {
      setImage(reader.result)
    }
  }
  const handleImage = async(e) => {
    e.preventDefault()
      try {
        const img = await axios.post('http://localhost:5000/api/v2/upload',{image,name,description,amount,size,category,price})
        console.log(img)
      } catch (error) {
        console.log(error);
      }
    }
  return (
    <div>

          <input type="file" onChange={handleChange} />
          <input type="text" placeholder='name' value={name} onChange={(e)=>{ setName(e.target.value) }} />
          <input type="text" placeholder='amount' value={amount} onChange={(e)=>{ setAmount(e.target.value) }} />
          <input type="number" placeholder='price' value={price} onChange={(e)=>{ setPrice(e.target.value) }} />
          <input type="text" placeholder='description' value={description} onChange={(e)=>{ setDescription(e.target.value) }} />
          <input type="text" placeholder='size' value={size} onChange={(e)=>{ setSize(e.target.value) }} />
          <input type="text" placeholder='category' value={category} onChange={(e)=>{ setCategory(e.target.value) }} />
          <button onClick={handleImage} >upload</button>
    </div>
  );
}

export default Post;
