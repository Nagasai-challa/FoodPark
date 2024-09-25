import React from 'react';

const About = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <header className="bg-black text-white py-6 text-center">
                <h1 className="text-4xl font-bold">About FoodZone</h1>
            </header>
            <section className="mb-10 mt-5 border-4 bg-white py-12 px-6 max-w-4xl mx-auto">
                <h2 className="text-3xl font-semibold mb-4">Welcome to FoodZone</h2>
                <p className="text-lg mb-4">
                    At FoodZone, we are dedicated to bringing you the best food experiences. Founded in 2020, our goal is to provide high-quality food and exceptional service to our customers.
                </p>
            </section>
            <section className="py-12 px-6 bg-white shadow-md max-w-4xl mx-auto mb-12">
                <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
                <p className="text-lg">
                    Our mission is to deliver fresh, delicious meals that bring joy to our customers. We are committed to sustainability, quality, and community support.
                </p>
            </section>

            {/* Our Story */}
            <section className="py-12 px-6 bg-white shadow-md max-w-4xl mx-auto mb-12">
                <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
                <p className="text-lg">
                    FoodZone was started with a simple idea: to provide delicious and convenient food options to our community. Over the years, we have grown and evolved, always staying true to our commitment to quality and customer satisfaction.
                </p>
            </section>
        </div>
    );
}

export default About;
