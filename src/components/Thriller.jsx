
import React, { useEffect } from 'react'
import axios from 'axios'
import Cards from './Cards/Cards'
import { useState } from 'react'

const Thriller = () => {
    const [thrillerData ,setthData] = useState([])
    const getData = async ()=>{
        await axios.get('https://www.googleapis.com/books/v1/volumes?q=thriller&key=AIzaSyD-UHzZFZ_qlrVnK7f10JBF4DyByFHahgo'+'&maxResult=40')
    .then(res =>  setthData(res.data.items))
    .catch(err => console.log(err))
    }

    useEffect(
        ()=>{
        getData()
    })
    return (
    <>
    <div className='intro_pg'><h2>here are some suggestion for <span>thriller books</span> </h2></div> 
    <div className="medcards">
    <Cards book={thrillerData}  />
    </div>
    </>
    
    )
}

export default Thriller