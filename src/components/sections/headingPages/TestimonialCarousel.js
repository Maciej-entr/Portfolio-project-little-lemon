import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import TestimonialCard from './CardInfo/TestimonialCard';
export default function CarouselPage() {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} Interval={5000} showStatus={false}>
            <TestimonialCard name="Elena Moretti" description="Absolutely amazing! The pasta was fresh, the sauce was rich, and the flavors took me straight to Italy. Can't wait to come back!"/>
                <TestimonialCard name="Francesco De Luca" description="The ambiance is so cozy, and the food is beyond words. The tiramisu is a must-try!"/>
                <TestimonialCard name="Chiara Greco" description="Best Italian food I've had outside of Rome! The pizza crust was perfect, and the ingredients were so fresh."/>
                <TestimonialCard name="Alessandro Ricci" description="My family loved it here. The staff made us feel like we were dining in a true Italian home. Bravo!"/>
                <TestimonialCard name="Sofia Esposito" description="From the appetizers to dessert, everything was flawless. The gnocchi melted in my mouth!"/>
                <TestimonialCard name="Matteo Conti" description="The flavors were authentic, and the wine selection was perfect for pairing. A gem of a restaurant!"/>
                <TestimonialCard name="Giulia Bianchi" description="The seafood risotto was divine. This place has officially become my go-to Italian spot."/>
                <TestimonialCard name="Luca Romano" description="A delightful experience! The bruschetta and cannoli were the highlights of our meal."/>
             </Carousel>
    )
}