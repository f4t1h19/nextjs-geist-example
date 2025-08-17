"use client";

import React, { useState } from 'react';

const HeroBanner = () => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <section className="relative w-full h-96 md:h-[600px] overflow-hidden">
      {!imageError ? (
        <img
          src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/dc10dfa8-826c-4bd8-b858-73f337dcfb63.png"
          alt="Modern furniture store showcase with elegant layout and contemporary design"
          className="w-full h-full object-cover"
          onError={handleImageError}
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
          <div className="text-center text-gray-600">
            <div className="text-4xl mb-2">🏠</div>
            <p className="text-lg">Mobilya Görseli Yükleniyor...</p>
          </div>
        </div>
      )}
      
      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Modern Mobilya
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Evinizi güzelleştiren, kaliteli ve şık mobilyalar. 
            Modern tasarım anlayışıyla hayalinizdeki yaşam alanını oluşturun.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Ürünleri İncele
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200">
              Katalog İndir
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none"></div>
    </section>
  );
};

export default HeroBanner;
