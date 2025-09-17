// pages/carta-para-ti.js
"use client";

import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function CartaRomantica() {
  const [mostrarContenido, setMostrarContenido] = useState(false);
  const [corazonLatido, setCorazonLatido] = useState(false);
  const [mensajeVisible, setMensajeVisible] = useState(false);

  useEffect(() => {
    // Animación de entrada después de cargar
    const timer = setTimeout(() => {
      setMostrarContenido(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const revelarMensaje = () => {
    setMensajeVisible(true);
    setCorazonLatido(true);
    setTimeout(() => setCorazonLatido(false), 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-red-50 flex items-center justify-center p-4">
      <Head>
        <title>Una carta para ti</title>
        <meta name="description" content="Una carta especial para alguien especial" />
      </Head>

      <div className={`relative w-full max-w-2xl transition-all duration-1000 ${mostrarContenido ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Sobre de carta */}
        <div className="bg-white rounded-lg shadow-xl overflow-hidden border-2 border-pink-200">
          {/* Encabezado con corazón */}
          <div className="bg-gradient-to-r from-pink-500 to-red-400 p-6 text-center relative">
            <h1 className="text-3xl md:text-4xl font-serif text-white">Para Mi Amor</h1>
            <button 
              onClick={revelarMensaje}
              className={`absolute top-4 right-4 text-white text-4xl transition-transform ${corazonLatido ? 'scale-125' : 'scale-100'}`}
            >
              ❤️
            </button>
          </div>
          
          {/* Contenido de la carta */}
          <div className="p-8 font-serif text-gray-800">
            <div className="text-sm text-gray-500 mb-2">Fecha: {new Date().toLocaleDateString()}</div>
            
            <p className="mb-4 leading-relaxed">
              Mi querida Celi,
            </p>
            
            <p className="mb-4 leading-relaxed">
              Hoy me desperté pensando en ti, como cada mañana. En tu sonrisa, en tu mirada, 
              en esa forma única que tienes de iluminar mis días incluso cuando todo parece gris.
            </p>
            
            <p className="mb-4 leading-relaxed">
              Quería escribirte esta carta para recordarte lo mucho que significas para mí. 
              Eres mi confidente, mi mejor amigo/a, mi compañero/a de aventuras y el amor de mi vida.
            </p>
            
            {/* Mensaje secreto que se revela al hacer clic */}
            {mensajeVisible && (
              <div className="mt-6 p-4 bg-pink-50 border-l-4 border-pink-400 rounded-r transition-all duration-700">
                <p className="text-pink-800 italic">
                  Y hay algo más que quería decirte... Eres la persona más maravillosa 
                  que he conocido y cada día a tu lado es un regalo. Te amo más de lo que las palabras pueden expresar.
                </p>
              </div>
            )}
            
            <div className="mt-8 text-right">
              <p className="font-bold">Con todo mi amor,</p>
              <p>Ubi</p>
            </div>
          </div>
        </div>
        
        {/* Elementos decorativos */}
        <div className="absolute -bottom-8 -left-4 text-6xl text-pink-200 opacity-60">❦</div>
        <div className="absolute -top-6 -right-4 text-5xl text-red-200 opacity-60">❦</div>
      </div>
    </div>
  );
}