import React from 'react';
import HeroMain from './HeroMain';

const HeroBg = () => {
    return (
        <div className="relative bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 h-screen flex items-center justify-center flex-col">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 opacity-80"></div>
            <div className="content z-10 -translate-y-10">
                <HeroMain />
            </div>
        </div>
    );
};

export default HeroBg;
