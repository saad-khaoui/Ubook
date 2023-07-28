import React, { useEffect } from 'react'
import axios from 'axios'
import Cards from './Cards/Cards'
import { useState } from 'react'

const Science = () => {

    const [ScienceData ,setscData] = useState([])
    const getData = async ()=>{
        await axios.get('https://www.googleapis.com/books/v1/volumes?q=science&key=AIzaSyD-UHzZFZ_qlrVnK7f10JBF4DyByFHahgo'+'&maxResult=40')
    .then(res =>  setscData(res.data.items))
    .catch(err => console.log(err))
    }

    useEffect(
        ()=>{
        getData()
    })
    return (
    <>
    <div className='intro_pg'><h2>here are some suggestion for <span>Science books</span> </h2></div> 
    <div className="medcards">
    <Cards book={ScienceData}  />
    </div>
    </>
    
    )
}

export default Science