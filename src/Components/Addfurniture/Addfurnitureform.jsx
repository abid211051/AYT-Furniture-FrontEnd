import React from 'react'
import { useNavigate } from "react-router-dom";
import {BiCategory, BiMessageDetail} from 'react-icons/bi';
import {MdOutlineDriveFileRenameOutline} from 'react-icons/md';
import {RxCube} from 'react-icons/rx';
import {VscSymbolColor} from 'react-icons/vsc';
import {GiMetalPlate, GiPriceTag} from 'react-icons/gi';
import {AiOutlineQuestionCircle} from 'react-icons/ai';
import {BsImages} from 'react-icons/bs';
const Addfurnitureform = () => {
  const navigate = useNavigate();

  const handlePostFurniture = (event) => {
    event.preventDefault();
    // Capture form values
    const category = event.target.category.value;
    const name = event.target.name.value;
    const material = event.target.material.value;
    const color = event.target.color.value;
    const parts = event.target.parts.value;
    const price = event.target.price.value;
    const trending = event.target.trending.value;
    const image = event.target.image.value;
    const description = event.target.description.value;
    // Create a new object with the form values
    const furniture = {
      category: category,
      name: name,
      material: material,
      color: color,
      parts: parts,
      price: price,
      trending : trending,
      image: image,
      description: description,
    };
    fetch('https://final-project-server-node.vercel.app/add-a-product', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(furniture)
    })
    .then((res) => res.json())
    .then((data) =>{
      if (data.acknowledged) {
        navigate('/manage-product');
      }
    });
  }

  return (
    <div className='pt-14'>
      <div className="text-center mt-10">
        <p className="text-orange-500 font-bold">ADD FFURNITURE</p>
        <h2 className="text-2xl font-bold">
          PLEASE ENTER REQUIRED INFORMATION
        </h2>
      </div>
      <form
        onSubmit={handlePostFurniture}
        className="my-10 flex flex-col gap-y-5"
      >
        <div className='flex justify-center items-center border-2 gap-4 h-12'>
          <BiCategory size={30} className='pl-2' />
          <input
          type="text"
          placeholder="Furniture Category"
          name="category"
          className="w-full h-full"
        />
        </div>
        <div className='flex justify-center items-center border-2 gap-4 h-12'>
          <MdOutlineDriveFileRenameOutline size={30} className='pl-2' />
          <input
          type="text"
          placeholder="Name of the Furniture"
          name="name"
          className="w-full h-full"
        />
        </div>
        <div className='flex justify-center items-center border-2 gap-4 h-12'>
          <RxCube size={30} className='pl-2'/>
          <input
          type="text"
          placeholder="Types of Material used"
          name="material"
          className="w-full h-full"
        />
        </div>
        <div className='flex justify-center items-center border-2 gap-4 h-12'>
          <VscSymbolColor size={30} className='pl-2'/>
          <input
          type="text"
          placeholder="Color of the Furniture"
          name="color"
          className="w-full h-full"
        />
        </div>
        <div className='flex justify-center items-center border-2 gap-4 h-12'>
          <GiMetalPlate size={30} className='pl-2'/>
          <input
          type="text"
          placeholder="Parts Description"
          name="parts"
          className="w-full h-full"
        />
        </div>
        <div className='flex justify-center items-center border-2 gap-4 h-12'>
          <GiPriceTag size={30} className='pl-2'/>
          <input
          type="text"
          placeholder="Furniture price BDT"
          name="price"
          className="w-full h-full"
        />
        </div>
        <div className='flex justify-center items-center border-2 gap-4 h-12'>
          <AiOutlineQuestionCircle size={30} className='pl-2'/>
          <input
          type="text"
          placeholder="Trending or NOT ?"
          name="trending"
          className="w-full h-full"
        />
        </div>
        <div className='flex justify-center items-center border-2 gap-4 h-12'>
          <BsImages size={30} className='pl-2'/>
          <input
          type="text"
          placeholder="Furniture Image Link"
          name="image"
          className="w-full h-full"
        />
        </div>
         <div className='flex justify-center items-center border-2 gap-4 h-32'>
          <BiMessageDetail size={30} className='pl-2'/>
          <textarea
          className="w-full h-full"
          name="description"
          placeholder="FURNITURE Description"
          ></textarea>
         </div>
        
        <div className="flex justify-center">
        <button className='border-2 w-full h-12 text-xl font-medium bg-red-500 text-white hover:bg-white hover:text-black hover:border-slate-500'>SUBMIT</button>
        </div>
      </form>
    </div>
  );
}

export default Addfurnitureform;
