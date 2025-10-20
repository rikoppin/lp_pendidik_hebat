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

          {/* Investment Info */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-lg mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-6">Investasi Pelatihan</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <p className="text-white/80 text-sm mb-2">PER SESI</p>
                  <p className="text-4xl font-bold text-yellow-400">Rp 50K</p>
                </div>
                <div className="text-center">
                  <p className="text-white/80 text-sm mb-2">BUNDLING 2 SESI</p>
                  <p className="text-4xl font-bold text-yellow-400">HEMAT</p>
                  <p className="text-white/70 text-sm">Rp 100.000</p>
                </div>
              </div>
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

        {/* Bottom Call to Action */}
        <div className="mt-16 text-center space-y-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 rounded-2xl px-8 py-6">
              <p className="text-lg font-bold mb-2">
                🌟 Segera Daftarkan Diri Anda! 🌟
              </p>
              <p className="text-base font-medium">
                Jadilah pendidik yang hebat, dekat, dan bersahabat bersama ribuan pendidik lainnya
              </p>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-sm mx-auto border border-white/20">
            <p className="text-white text-lg font-semibold mb-4">DAFTAR SEGERA</p>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.108"/>
                </svg>
              </div>
              <div className="text-left">
                <p className="text-white text-xl font-bold">+62895-6362-06200</p>
                <p className="text-white/80 text-sm">Admin Faqih</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
