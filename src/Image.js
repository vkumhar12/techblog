/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react';

const images = [
    'image.jpeg',
    'image1.png',
    'image2.png',
];

const Carousel = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
        }, 7000); // Change image every 7 seconds
        return () => clearInterval(interval);
    }, []);

    const goToNextSlide = () => {
        setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
    };

    const goToPrevSlide = () => {
        setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
    };

    return (
        <div className="relative w-full h-screen ">
            <button className="absolute top-1/2 left-4 transform -translate-y-1/2 px-2 py-1 bg-gray-200 rounded-full text-gray-800" onClick={goToPrevSlide}>
                Next
            </button>
            <button className="absolute top-1/2 right-4 transform -translate-y-1/2 px-2 py-1 bg-gray-200 rounded-full text-gray-800" onClick={goToNextSlide}>
                Next
            </button>
            {images.map((imageUrl, index) => (
                <img
                    key={index}
                    src={imageUrl}
                    alt={`image-${index}`}
                    className={`absolute top-0 left-0 w-full h-full object-cover ${index === currentImage ? 'zoom-in' : 'hidden'
                        }`}
                />
            ))}
            <div className='h-5 bg-white text-black'>
                Hello
            </div>
        </div>
    );
};

export default Carousel;
