import React,{useState} from "react";
import { options } from "../../../backend/app";

function CreateProduct(){
    const [images,setImages] = useState([]);
    const [preImage,setPreImage] = useState([]);
    const [name,setName] = useState("");
    const [description,setDescription] = useState("");
    const [category,setCategory] = useState("");
    const [tags,setTags] = useState("");
    const [price,setPrice] = useState("");
    const [stock,setStock] = useState("");
    const [email,setEmail] = useState("");


const categoriesData = [
    {
        title:"Electronics"
    },
    {
        title:"Fashion"
    },
    {
        title:"Books"
    },
    {
        title:"Home Appliances"
    },
]




return(
    <div>
        <h5>Create product</h5>
        <form>
            <div>
                <label>
                Email
                </label>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your Email" required/>
            </div>
            <div>
                <label>Name<span className="text-red-500">*</span></label>
            </div>
            <div>
                <label>Description <span className="text-red-500">*</span></label>
                <textarea value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Enter the product description" row='5' required></textarea>
            </div>
            <div>
                <label>Category <span>*</span></label>
                <select value={category} onChange={(e)=>setCategory(e.target.value)} required>
                    <option>select an option</option>
                    {categoriesData.map((item,ind)=>{
                        <option value={item.title} key={ind}>{item.title}</option>
                    })}
                </select>
            </div>
            <div>
                <label>Tags</label>
                <input type="text" value={tags} onChange={(e)=>setTags(e.target.value)} />
            </div>
            <div>
                <label>Price <span className="text-red-500">*</span></label>
                <input type="number" value={price} onChange={(e)=>setPrice(e.target.price)} required/>
            </div>
            <div>
                <label>Stock <span className="text-red-500">*</span></label>
                <input type="number" value={stock} onChange={(e)=>setStock(e.target.value)} required/>
            </div>
            <div>
                <label className="pb-1 block">
                    Upload Images <span className="text-red-500">*</span>
                </label>
                <input type="file" id = 'upload' onChange={handleImage} required multiple accept=".jpg .png .jpeg"/>
            <div>
            {preImage.map((img,index)=>{
                <img 
                src={img}
                key={index}
                alt="preview"
                className="w-[100px] h-[100px]  object-cover m-2"
                />
            })}
            </div>
            <button
            type="submit"
            className="w-full mt-4 bg-blue-500 text-white p-2 roounded"
            >
                create
            </button>
            </div>
        </form>

        </div>

)
}
export default CreateProduct