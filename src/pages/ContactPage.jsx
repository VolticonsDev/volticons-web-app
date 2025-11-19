import React from 'react';
import Footer from '../components/Footer';

function ContactPage() {
    return (
        <div className="min-h-screen flex flex-col pt-20">
            <main className="flex-grow max-w-4xl mx-auto py-20 px-5 text-center">
                
                <h1 className="section-title text-4xl font-extrabold mb-12">
                    🤝 CONTACTA CON VOLTICONS
                </h1>
                <p className="text-light mb-12 text-lg">
                    ¿Eres una marca, un inversor o tienes una propuesta comercial? Rellena el formulario y nos pondremos en contacto contigo lo antes posible.
                </p>

                <form 
                    action="https://formspree.io/f/xpwkwbwo" 
                    method="POST"
                    className="w-full max-w-xl mx-auto bg-header-bg p-8 rounded-xl shadow-2xl text-left border border-volt-violet"
                    data-aos="fade-up"
                >
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-volt-orange text-sm font-bold mb-2">
                            Tu Correo Electrónico
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="_replyto"
                            required
                            className="shadow appearance-none border border-gray-700 rounded w-full py-3 px-4 bg-dark-bg text-light placeholder-gray-500 leading-tight focus:outline-none focus:ring-2 focus:ring-volt-orange"
                            placeholder="ejemplo@empresa.com"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="name" className="block text-volt-orange text-sm font-bold mb-2">
                            Nombre de la Marca / Compañía
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="shadow appearance-none border border-gray-700 rounded w-full py-3 px-4 bg-dark-bg text-light placeholder-gray-500 leading-tight focus:outline-none focus:ring-2 focus:ring-volt-orange"
                            placeholder="Nombre / Razón Social"
                        />
                    </div>
                    
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-volt-orange text-sm font-bold mb-2">
                            Tu Propuesta / Mensaje
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            required
                            className="shadow appearance-none border border-gray-700 rounded w-full py-3 px-4 bg-dark-bg text-light placeholder-gray-500 leading-tight focus:outline-none focus:ring-2 focus:ring-volt-orange"
                            placeholder="Describe brevemente tu propuesta de colaboración..."
                        ></textarea>
                    </div>

                    <div className="flex items-center justify-center">
                        <button
                            type="submit"
                            className="bg-volt-orange hover:bg-volt-violet text-white font-bold py-3 px-6 rounded-full transition-all duration-200 text-lg 
                                       transform hover:scale-105 shadow-lg shadow-volt-orange/50"
                        >
                            Enviar Propuesta
                        </button>
                    </div>
                </form>

            </main>
            <Footer />
        </div>
    );
}

export default ContactPage;