import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import bgImage from '../assets/event-bg.jpg';


const CreateEvent = () => {
    const [event, setEvent] = useState({
        name: '',
        date: '',
        time: '',
        location: '',
        description: '',
    });

    const handleChange = (e) => {
        setEvent({ ...event, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Event Submitted:", event);
        // Add logic here to push to backend or smart contract
    };

    return (
        <>
            <Navbar />

            <div
                className="relative min-h-screen bg-cover bg-center bg-no-repeat text-white flex items-center justify-end"
                style={{ backgroundImage: `url(${bgImage})` }}
            >

                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="backdrop-blur-md bg-black bg-opacity-50 border border-purple-700 rounded-2xl shadow-2xl px-8 py-10 w-full max-w-xl space-y-6 mr-12 mt-5"
                >
                    <h2 className="text-3xl font-semibold text-center text-purple-400">Create New Event</h2>

                    <input
                        type="text"
                        name="name"
                        placeholder="Event Name"
                        value={event.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-black bg-opacity-30 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:shadow-lg transition-all duration-300
"
                        required
                    />

                    <div className="flex flex-col md:flex-row gap-4">
                        <input
                            type="date"
                            name="date"
                            value={event.date}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-black bg-opacity-30 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                        />
                        <input
                            type="time"
                            name="time"
                            value={event.time}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-black bg-opacity-30 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                        />
                    </div>

                    <input
                        type="text"
                        name="location"
                        placeholder="Location / Online Link"
                        value={event.location}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-black bg-opacity-30 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                    />

                    <textarea
                        name="description"
                        placeholder="Event Description"
                        value={event.description}
                        onChange={handleChange}
                        rows="4"
                        className="w-full px-4 py-2 bg-black bg-opacity-30 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                    ></textarea>

                    {/* Future banner upload option */}
                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Upload Banner (optional)</label>
                        <input
                            type="file"
                            accept="image/*"
                            className="block w-full text-sm text-gray-400 bg-black bg-opacity-30 border border-gray-600 rounded-lg p-2"
                        />
                    </div>


                    <button
                        type="submit"
                        className="w-full py-2 bg-purple-600 hover:bg-purple-700 transition rounded-lg font-semibold shadow-md"
                    >
                        Submit Event
                    </button>
                </motion.form>
            </div >
        </>
    );
};

export default CreateEvent;
