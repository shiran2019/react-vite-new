import React from 'react';
import Lottie from 'react-lottie';

const JsonAnimation = ({jsonAnimation,height,width}) => {

        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: jsonAnimation,
            renderer: 'svg'
        }
        return (
            <div>
               <Lottie
                options={defaultOptions}
                height={height}
                width={width}
               />
            </div>
        )
    }  
export default JsonAnimation;
