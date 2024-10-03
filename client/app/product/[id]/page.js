"use client"
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import Image from "next/image";

const Product = (context)=>{
    const {id} = context.params
    const [data,setData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        const fetched = async () => {
            await fetch(`https://ecology-project-server.onrender.com/product/${id}`)
                .then(res=>res.json())
                .then(data=> {

                    setData(data)
                    setLoading(false)
                })
        }
        setLoading(true)
        fetched()
    }, [])


    return (
        <div className="text-4xl text-center pt-[6rem]">
            {loading && <h1>Loading</h1>}
            {!loading && <><h2><strong>Tuman : </strong>{data.district}</h2>
                <h3><strong>Mahalla : </strong>{data.street}</h3>
                <h5 className="text-2xl"><strong>Qo'shimcha ma'lumot : </strong> {data.description}</h5>
                <Image src={`/images/${data.image}`} className={`mx-auto`} quality={100} priority={true} width={500} height={500}  alt={`dsdds`} /></>}

        </div>
    )
}

export default Product