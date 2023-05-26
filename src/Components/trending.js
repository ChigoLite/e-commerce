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
        }, 100000);
        return () => {
            clearInterval(slide)
        }
    },[value])
  return (
      <>
          <div className='slide-text'>
              <h2>
                  Welcome Visiting Our Store.
             </h2>
          </div>
          <div className='slide-cont'>
              <div className="firstTxt">
                  

              <h4>
                  your order is our top priority <br />
                  keep your oder coming as we keep serving you better.
              </h4>
              </div>
              <div className="secondTxt">
                  
              <p>
                  place your order as we deliver urgently
                  <span> your surest plug</span>
              </p>
              </div>
              {user.map((img, index) => {
                  let position = 'next'
                  if (value===index) {
                    position='active'
                  }
                  if (index===value - 1 || index===0 && index===user.length -1) {
                            position='last'
                        }
                  return (
                    
                          <div className='hero-overlay' key={img.id}>
                          
                      <main  className={position}>
                          <img className='image' src={img.image} alt='images' />
                        
                          </main> 
                          </div>
                        
               )
           })}   
      </div>
    </>
  );
}

export default TrendingImg;
