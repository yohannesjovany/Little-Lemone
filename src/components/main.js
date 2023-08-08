import React from 'react';
import Card from './card'

let Main = ()=> {
    let ajaxD=[
        {
            id : 1,
            title :"sotocto"  ,
            img:"/imgs/7.jpg" ,
            rating:5.0,
            reviewCount:12,
            country:"Ethiopia",
            price:128,
            sOut:false
            
        },
        {
            id : 2,
            title :"potocto"  ,
            img:"/imgs/amer.jpg" ,
            rating:5.0,
            reviewCount:6,
            country:"somalia",
            price:188,
            sOut:true
            
        },
        {
            id : 3,
            title :"tocto"  ,
            img:"/imgs/7.jpg" ,
            rating:3.3,
            reviewCount:8,
            country:"USA",
            price:128,
            sOut:false
        },
        {
            id :4,
            title :"ticto" , 
        img:"/imgs/amer.jpg" ,
        rating:3.0,
        reviewCount:19,
        country:"Kenya",
        price:12,
        sOut:true

        }
    ]

    let cardElements = ajaxD.map((card)=>{
        return <Card
        key = {card.id} 
       card = {card} />
    });

    return(
        <div>
            <main>
                <h1>Reasons I Love React</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam ducimus, modi quis vero nihil commodi beatae inventore pariatur enim asperiores nulla ratione, eum dolore? Laboriosam numquam minima quos dolorem sint!</p>
                <h1>the time is  o'clock in Mekelle</h1>
                <ol>
                    <li>It is very easy If you have basi js knowldege</li>
                    <li>It is very easy If you have basi js knowldege</li>
                    <li>It is very easy If you have basi js knowldege</li>
                    <li>It is very easy If you have basi js knowldege</li>
                </ol>
                <div className='list-cards'>
                    {cardElements}
                </div>             
            </main>
        </div>

        );
    }
export default  Main;