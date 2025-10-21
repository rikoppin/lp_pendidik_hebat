import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-teal-400 via-teal-500 to-teal-600 min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><pattern id="books" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="8" fill="white" opacity="0.1"/><circle cx="80" cy="80" r="6" fill="white" opacity="0.1"/><rect x="40" y="40" width="20" height="20" fill="white" opacity="0.05"/></pattern></defs><rect width="100%" height="100%" fill="url(%23books)"/></svg>')`
        }}
      />
      
      {/* Additional Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.3"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Centered Main Content */}
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Main Hero Title */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
              MENJADI
              <br />
              <span className="text-yellow-300">PENDIDIK HEBAT</span>
              <br />
              <span className="text-5xl md:text-6xl lg:text-7xl font-bold">
                <span className="text-yellow-300">SEDEKAT</span>{' '}
                <span className="text-white">SAHABAT</span>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Bergabunglah dalam pelatihan inspiratif yang dirancang khusus untuk para pendidik 
              dan pengasuh yang ingin tumbuh menjadi pribadi yang kuat, tenang, dan penuh makna.
            </p>
          </div>

          {/* Training Schedule Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold">JUMAT, 31 OKTOBER 2025</p>
                  <p className="text-white/80 text-sm">08.00 - 09.30 WIB</p>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Manajemen Diri Pengasuhan</h3>
              <p className="text-white/70 text-sm">Membangun fondasi kuat dalam pengelolaan diri sebagai pendidik</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold">SABTU, 01 NOVEMBER 2025</p>
                  <p className="text-white/80 text-sm">08.00 - 09.30 WIB</p>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Psikologi Keseimbangan</h3>
              <p className="text-white/70 text-sm">Mencapai keseimbangan emosional dalam proses mendidik</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-md mx-auto">
            <button className="btn-primary text-lg py-4 px-8 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
              <span>Daftar Sekarang</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button className="btn-secondary text-lg py-4 px-8 flex items-center justify-center space-x-2">
              <span>Hubungi Kami</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
