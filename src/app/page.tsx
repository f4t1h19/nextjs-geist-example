import React from 'react';
import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';

export default function Home() {
  // Sample product data with Turkish furniture names
  const featuredProducts = [
    {
      title: "Modern Koltuk Takımı",
      description: "Rahat ve şık tasarımıyla oturma odanızı güzelleştiren modern koltuk takımı. Yüksek kalite kumaş ve ergonomik tasarım.",
      price: "₺15.999",
      imageText: "Modern+Koltuk+Takimi+Oturma+Odasi"
    },
    {
      title: "Ahşap Yemek Masası",
      description: "Doğal ahşap malzemeden üretilen, 6 kişilik yemek masası. Dayanıklı ve zarif tasarım.",
      price: "₺8.750",
      imageText: "Ahsap+Yemek+Masasi+6+Kisilik"
    },
    {
      title: "Yatak Odası Takımı",
      description: "Komplet yatak odası takımı. Gardırop, komodin ve yatak başlığı dahil. Modern ve fonksiyonel.",
      price: "₺22.500",
      imageText: "Yatak+Odasi+Takimi+Gardirop+Komodin"
    },
    {
      title: "Çalışma Masası",
      description: "Ev ofisi için ideal çalışma masası. Geniş çalışma alanı ve pratik çekmeceler ile verimli çalışma.",
      price: "₺3.250",
      imageText: "Calisma+Masasi+Ev+Ofisi+Modern"
    },
    {
      title: "Kitaplık Dolabı",
      description: "Geniş ve fonksiyonel kitaplık dolabı. Kitaplarınız ve dekoratif eşyalarınız için ideal.",
      price: "₺4.999",
      imageText: "Kitaplik+Dolabi+Fonksiyonel+Modern"
    },
    {
      title: "TV Ünitesi",
      description: "Modern TV ünitesi. Kablolar için gizli bölmeler ve ekstra depolama alanı ile pratik çözüm.",
      price: "₺6.750",
      imageText: "TV+Unitesi+Modern+Depolama+Alani"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Banner */}
      <HeroBanner />

      {/* Featured Products Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Öne Çıkan Ürünler
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              En popüler ve kaliteli mobilyalarımızı keşfedin. 
              Her bütçeye uygun, modern ve şık tasarımlar.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                description={product.description}
                price={product.price}
                imageText={product.imageText}
              />
            ))}
          </div>

          {/* View All Products Button */}
          <div className="text-center mt-12">
            <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200">
              Tüm Ürünleri Görüntüle
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Kalite Garantisi</h3>
              <p className="text-gray-600">
                Tüm ürünlerimizde 2 yıl kalite garantisi. 
                Yüksek kalite malzeme ve işçilik.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v1a1 1 0 001 1h1a1 1 0 001-1V5a1 1 0 00-1-1H3zM3 10a1 1 0 00-1 1v1a1 1 0 001 1h1a1 1 0 001-1v-1a1 1 0 00-1-1H3zM3 16a1 1 0 00-1 1v1a1 1 0 001 1h1a1 1 0 001-1v-1a1 1 0 00-1-1H3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ücretsiz Teslimat</h3>
              <p className="text-gray-600">
                İstanbul içi ücretsiz teslimat. 
                Hızlı ve güvenli kargo hizmeti.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Uzman Destek</h3>
              <p className="text-gray-600">
                7/24 müşteri desteği. 
                Uzman ekibimizden profesyonel danışmanlık.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
