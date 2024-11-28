import React, { useState, useEffect } from 'react';

export default function LogoRotator({ images }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex(prevIndex =>
                (prevIndex + 1) % images.length
            );
        }, 5000);

        return () => clearInterval(intervalId);
    }, [images]);

    return (
        <img
            src={images[currentImageIndex]}
            alt="Logo"
            className=' w-full h-[150px] rounded-full'
        />
    );
}