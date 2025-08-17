"use client";

import React, { useState } from 'react';

interface ProductCardProps {
  title?: string;
  description?: string;
  price?: string;
  imageText?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title = "Ürün İsmi",
  description = "Ürün açıklaması burada yer alacak. Kaliteli malzeme ve modern tasarım.",
  price = "₺0,00",
  imageText = "Urun+Fotografi+Placeholder"
}) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
      {/* Product Image */}
      <div className="relative w-full h-64 overflow-hidden">
        {!imageError ? (
          <img
            src={`https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4dac8b0f-1e65-42ff-8f64-8daf5aabbb0e.png}`}
            alt={`${title} - modern minimalist tasarım mobilya ürünü`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={handleImageError}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="text-3xl mb-2">📦</div>
              <p className="text-sm">Ürün Görseli</p>
            </div>
          </div>
        )}
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            Detayları Gör
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {description}
        </p>
        
        {/* Price and Actions */}
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
            {price}
          </span>
          <div className="flex space-x-2">
            <button className="p-2 text-gray-400 hover:text-red-500 transition-colors duration-200">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors duration-200">
              Sepete Ekle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
