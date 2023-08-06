import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { CgDetailsMore } from 'react-icons/cg'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { RxUpdate } from 'react-icons/rx'

const Managefurniturelist = () => {
    const datas = useLoaderData();
    const [furnitures, setFurnitures] = useState(datas);

    const deleteproduct = (furnitureID)=>{
        fetch(`https://final-project-server-node.vercel.app/delete-product/${furnitureID}`,{
            method : "DELETE"
        })
        .then((res)=>res.json())
        .then((data)=>{
            if(data.deletedCount > 0){
                const filterproduct = datas.filter(data => data?._id != furnitureID);
                setFurnitures(filterproduct);
            }
        })
    }
    return (
        <>
            <div className="overflow-x-auto">
                <p className="text-orange-500 font-bold">MANAGE FFURNITURE</p>
                <h2 className="text-2xl font-bold mb-10">
                     MANAGE YOUR PRODUCT HERE
                </h2>
                <table className="table md:w-[93vw] max-w-[93vw] mx-auto">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Category</th>
                            <th>Product Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {furnitures?.map((furniture) => (
                            <tr key={furniture?._id}>
                                <td>
                                    <div className="flex items-center space-x-3 mr-9">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-20">
                                                <img src={furniture?.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h2 className='text-xl font-bold'>{furniture?.category}</h2>
                                    <br />
                                    <span className="badge badge-ghost badge-sm"></span>
                                </td>
                                <td>
                                    <h2 className='text-lg font-semibold'>{furniture?.name}</h2>
                                </td>
                                <td className='flex gap-4'>
                                    <Link to={`/single-product/${furniture._id}`}>
                                        <button className="btn btn-outline"><CgDetailsMore className='w-[70%] h-[70%]' /></button>
                                    </Link>
                                    <button className="btn btn-outline" onClick={()=>deleteproduct(furniture?._id)}><RiDeleteBin6Line className='w-[70%] h-[70%]' /></button>
                                    <Link to={`/update-product/${furniture._id}`}>
                                    <button className="btn btn-outline"><RxUpdate className='w-[70%] h-[70%]' /></button>
                                    </Link>
                                    
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Managefurniturelist
