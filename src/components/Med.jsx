import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import Cards from './Cards/Cards'

const Med = () => {
    const [MedData ,setMedData] = useState([])
    const fetchmedapi = async ()=>{
    await  axios.get('https://www.googleapis.com/books/v1/volumes?q=medicine&key=AIzaSyD-UHzZFZ_qlrVnK7f10JBF4DyByFHahgo'+'&maxResult=40')
    .then(res => setTimeout( setMedData(res.data.items), 300))
    .catch(err => console.log(err))
    } 
    fetchmedapi()
  return (
    <>
    <div className='intro_pg'><h2>here are some suggestion for <span>medecin books</span> </h2></div>
    <div className="medcards">
    <Cards book={MedData}  />
    </div>
    
    </>
    
  )
}

export default Med