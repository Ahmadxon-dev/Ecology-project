'use client'
import React, {useState} from "react"
import {useRouter} from "next/navigation";
import axios from "axios";

const Add = ()=>{
    const [district, setDistrict] = useState('');
    const [street, setStreet] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const router =useRouter()
    const handleInputChange = (e) => {
        if (e.target.name === 'district') {
            setDistrict(e.target.value);
        } else if (e.target.name === 'street') {
            setStreet(e.target.value);
        } else if (e.target.name === 'description') {
            setDescription(e.target.value);
        }
    };
    // const onInputChange = (e) => {
    //     console.log(e.target.files[0]);
    //     setImage(e.target.files[0]);
    // };
    const handleSubmit = async (e) => {
        e.preventDefault();
        // await fetch('http://localhost:5000/add', {
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({district, street, description})
        // });
        // setStreet("")
        // setDistrict("")
        // setDescription("")

        // const formData = new FormData();
        // // formData.append("image", image);
        // formData.append("district", district)
        // formData.append("street", street)
        // formData.append("description", description)


        // const result = await axios.post(
        //     "http://localhost:5000/upload-image",
        //     formData,
        //     {
        //         headers: { "Content-Type": "multipart/form-data" },
        //     }
        // );
        await fetch('https://ecology-project-server.onrender.com/add', {
            method: "POST",
            body:JSON.stringify({
                district:district,
                street:street,
                description:description,
            }),
            // body: formData,
            headers: {
                "Content-Type": "application/json",
            }
        });
        router.push("/statistics")
    };
    return (
        <div className={`mt-[6rem] flex justify-center w-[100%] items-center`}>
            <div className={`w-[40%]`}>

                <h2>Tumanni tanlang</h2>
                <form onSubmit={handleSubmit}>
                    <select className=" w-full text-black/70 bg-white px-3 py-2 transition-all cursor-pointer border  rounded-lg  appearance-none invalid:text-black/30 w-64" id="district" required={true} name="district" value={district}
                            onChange={handleInputChange}>
                        <option>Tanlang</option>
                        <option value="Bektemir">Bektemir tumani</option>
                        <option value="Mirobod">Mirobod tumani</option>
                        <option value="Mirzo Ulug'bek">Mirzo Ulug'bek tumani</option>
                        <option value="Sergeli">Sergeli tumani</option>
                        <option value="Olmazor">Olmazor tumani</option>
                        <option value="UchTepa">Uchtepa tumani</option>
                        <option value="Shayxontohur">Shayhontoxur tumani</option>
                        <option value="Yashnobod">Yashnobod tumani</option>
                        <option value="Chilonzor">Chilonzor tumani</option>
                        <option value="Yunusobod">Yunusobod tumani</option>
                        <option value="Yakkasaroy">Yakkasaroy tumani</option>
                    </select>
                    <br/>
                    <div className="mt-2 5">
                        <label htmlFor="district" className="block text-sm font-semibold leading-6 text-gray-900">Mahalla</label>
                        <input
                            className={`block w-full rounded-md border px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-green-600 sm:text-sm sm:leading-6`}
                            type="text"
                            name="street"
                            placeholder="Mahllani kiriting"
                            required={true}
                            value={street}
                            onChange={handleInputChange}
                            id={"district"}
                        />
                    </div>
                    <br/>
                    <label htmlFor="formFile" className="block text-sm font-semibold leading-6 text-gray-900">Qo'shimcha ma'lumot</label>
                    <textarea rows={`4`} className={`block w-full rounded-md border px-3.5 py-2 text-gray-900   placeholder:text-gray-400 focus:ring-green-600 sm:text-sm sm:leading-6`} name="description" id="formFile" onChange={handleInputChange}></textarea>
                    {/*<br/>*/}
                    {/*<label htmlFor="image" className="block text-sm font-semibold leading-6 text-gray-900">Rasmni joylashtirish</label>*/}
                    {/*<input type="file" id={`image`} accept="image/*" onChange={e=>setImage(e.target.files[0])} />*/}
                    <br/>
                    <br/>
                    <button type="submit" className={`block w-full rounded-md bg-green-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600`}>Qo'shish</button>
                </form>
            </div>
        </div>
    )
}

export default Add