import React, { useState } from 'react'
const Cards = ({book},) => {
    const [show , setshow] = useState(false)
    const [bookitem , setitem] = useState()
    
    return (
        
        <>
            { book.map((element) =>{
            const thumbnail = element.volumeInfo.imageLinks && element.volumeInfo.imageLinks.smallThumbnail
            
            return (
                
            < div key={element.id}>
            <div  className="card" onClick={()=>{setshow(true); setitem(element)}}  >
                    <img src={thumbnail!= undefined ? thumbnail : './images/undefined.png'} alt="" />
                    <div className="bottom">
                        <h2>{element.volumeInfo.title}</h2>
                    </div >

            </div>
            
            </div>
            )
            
            })
            
        }
        </>
        )

        
        
}

export default Cards
