import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Indomaret } from '../assets'


const Detail = () => {

  const handleDesc = (params) => {
    var desc = params.slice(0, 70);
    return desc + " ...";
  };
  
  function convertToRupiah(angka)
  {
    var rupiah = '';		
    var angkarev = angka.toString().split('').reverse().join('');
    for(var i = 0; i < angkarev.length; i++) if(i%3 == 0) rupiah += angkarev.substr(i,3)+'.';
    return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('');
  }

  const [data, setData] = useState(null)
  const [fetchStatus, setFetchStatus] = useState(true)

  useEffect(() => {
    axios.get("https://dev-example.sanbercloud.com/api/job-vacancy")
    .then((res) => {
      console.log(res)
      setData([...res.data.data])
    })
    .catch((error) =>{
      
    })
  })
  console.log(data)
  
  return (
    <div className='w-full h-screen bg-main-dark text-white '>
      <div className=' p-10 flex flex-row gap-6 max-w-[1200px]'>
        { data!== null && data.map((res) => {
           return(
              <div className='w-[300px] h-[350px] bg-secondary-light text-main-dark rounded-lg p-3'>
              <div className='flex justify-center'>
                <img src={res.company_image_url} className="w-[150px] h-[70px]" alt="" />
              </div>
              <h2 className='text-center font-bold text-xl'> {res.title} </h2>
              <h2 className='text-center font-semibold text-md'> {res.company_name} </h2>
              <h2 className='text-center font-semibold text-md'> {res.company_city} </h2>
              <h2 className='text-center font-normal text-base'> {res.job_tenure} </h2>
              <p  className='font-normal text-xs'> { handleDesc(res.job_description)} </p>
              <p  className='font-normal text-xs'> {res.job_qualification} </p>
              <h3 className='font-semibold text-sm border-2 border-main-dark text-center rounded-lg mt-3'> Salary { convertToRupiah(res.salary_min)} - {convertToRupiah(res.salary_max)} </h3>
            </div>
           )
        })}
        
      </div>
    </div>
  )
}

export default Detail