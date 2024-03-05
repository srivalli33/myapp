import React from 'react'

export default function Cakes() {

    let Products=[
        {
            name:" Chocolate Cake",
            description: "Melting Chocolate Cake",
            price:599,
            src:'./images/absolute.jpg',
        },
        {
            name:"vanilla cake",
            description: "Fresh vanilla cake ",
            price:499,
           src:'./images/celebrate.jpg',
        },
        {
            name:"Rainbow cake",
            description: "fresh Rain bow cake",
            price:499,
            src:'./images/nuts.jpg'
        },
        {
            name:"White Forest cake",
            description: "Eggless white forest cake",
            price:599,
            src:'./images/orange.webp'
        },
        {
            name:"Pink cake",
            description: "80 Rose Pink Strawberry",
            price:599,
            src:'./images/perfect.jpg'
        },
        {
            name:"Black Forest",
            description: " Fresh Black Forest",
            price:699,
            src:'./images/Royality.jpg'
        }
    ];


  

  return (

    <div className='Main'> 
    
        {Products.map((value,i)=>(      
        <div className='Cakes'>
        <div> <img width ="180px" height="170px" src={value.src}  alt='images' ></img></div>
         <div><b>{value.name}</b></div>
         <div><i>{value.description}</i></div>
         <div>{value.price}.Rs</div>
        <div><button>Add</button></div>
            </div>
           
            ))}
      
    </div>
    
  )
}