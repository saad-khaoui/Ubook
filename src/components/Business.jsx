import React, { useEffect } from 'react'
import axios from 'axios'
import Cards from './Cards/Cards'
import { useState } from 'react'

const  Business = () => {
    const [ businessData ,setbsData] = useState([])
    const getData = async ()=>{
        await axios.get('https://www.googleapis.com/books/v1/volumes?q=business&key=AIzaSyD-UHzZFZ_qlrVnK7f10JBF4DyByFHahgo'+'&maxResult=40')
    .then(res =>  setbsData(res.data.items))
    .catch(err => console.log(err))
    }

    useEffect(
        ()=>{
        getData()
    })
    return (
    <>
    <div className='intro_pg'><h2>here are some suggestion for <span> business books</span> </h2></div> 
    <div className="medcards">
    <Cards book={ businessData}  />
    </div>
    </>
    
    )
}

export default  Business