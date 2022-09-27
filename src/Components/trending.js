import React,{useState,useEffect} from 'react';
import { Trending } from '../assets';
const TrendingImg = () => {
    const [value, setValue] = useState(0);
    const [user, setUser] = useState(Trending);
    useEffect(() => {
        const lastIndex = user.length - 1
        if (value>lastIndex) {
            setValue(0)
        }
        if (value<0) {
            setValue(lastIndex)
        }
    }, [user, value])
    useEffect(() => {
     const slide=   setInterval(() => {
         setValue(value + 1)
        }, 6000);
        return () => {
            clearInterval(slide)
        }
    },[value])
  return (
      <>
          <div className='slide-text'>
              <h1 className='trendingtxt'>Trending outfits....</h1>
          </div>
          <div className='slide-cont'>

              {user.map((img, index) => {
                  let position = 'next'
                  if (value===index) {
                    position='active'
                  }
                  if (index===value - 1 || index===0 && index===user.length -1) {
                            position='last'
                        }
                  return (
                    
                          
                      <main key={img.id} className={position}>
                          <img className='image' src={img.image} alt='images' />
                        
                          </main> 
                        
               )
           })}   
      </div>
    </>
  );
}

export default TrendingImg;
