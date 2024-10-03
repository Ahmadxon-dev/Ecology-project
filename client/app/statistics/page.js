"use client"
import {useEffect, useState} from "react";
import Link from "next/link";

function  Statistics(props) {
    const [data, setData] = useState([])
    useEffect( ()=>{
        const fetchData = async ()=>{
            return await fetch("http://localhost:5000/statistics")
        }
        fetchData().then(res=>res.json()).then(data=> {
            setData(data)
        })
    }, [])


    return(
        <div className=" pt-[6rem] w-full h-screen bg-gray-100">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="flex flex-col">
                    <div className="mb-4">
                        <h1 className="text-3xl font-bolder leading-tight text-gray-900">Statistika</h1>
                    </div>
                    <div className="-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                                <div
                                    className="align-middle inline-block w-full shadow overflow-x-auto sm:rounded-lg border-b border-gray-200">
                                    <table className="min-w-full">
                                        <thead>

                                        <tr className="bg-gray-50 border-b border-gray-200 text-xs leading-4 text-gray-500 uppercase tracking-wider">
                                            <th className="px-6 py-3 text-left font-medium">
                                                Tuman
                                            </th>
                                            <th className="px-6 py-3 text-left font-medium">
                                                MAhalla
                                            </th>
                                            <th className="px-6 py-3 text-left font-medium">
                                                Vaqt
                                            </th>

                                        </tr>
                                        </thead>
                                        <tbody className="bg-white">
                                        {
                                            data.map(el=>{
                                                // if (data.indexOf(el)%2==0)
                                                return <tr key={el._id} className={data.indexOf(el)%2==1?`bg-gray-100`:""}>
                                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">

                                                            <div className="flex items-center">
                                                                <div className="text-sm leading-5 text-gray-900">
                                                                    <a href={`product/${el._id}`} className={`underline`}>{el.district}</a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">

                                                            <div className="flex items-center">
                                                                <div className="text-sm leading-5 text-gray-900">
                                                                    {el.street}
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                            <div className="text-sm leading-5 text-gray-900">
                                                                {el.createdAt.slice(0,10)}
                                                            </div>
                                                        </td>

                                                    </tr>
                                            })
                                        }
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                </div>
            </div>
        </div>


)
}

export default Statistics;