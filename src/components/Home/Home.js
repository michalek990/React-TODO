import React from 'react';
import HeroSection from './HeroSection';
import FeaturesSection from "./FeaturesSection";
import AboutSection from "./AboutSection";
import WeatherWidget from "../WeatherWidget";

function Home() {
    return (
        <div>
            <HeroSection />
            <FeaturesSection />
            <AboutSection />
            <WeatherWidget />
        </div>
    );
}

export default Home;
