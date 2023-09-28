'use client'
// components
import TestimonialSlider from './TestimonialSlider';

export default function Testimonial() {
    return (
        <section className='section flex items-center' id='testimonial'>
            <div className='container mx-auto'>
                <TestimonialSlider />
            </div>
        </section>
    );
}