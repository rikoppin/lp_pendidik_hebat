import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section 
      className="py-20 text-white relative overflow-hidden"
      style={{background: 'linear-gradient(to bottom right, #0d8c7d, #0a6d62, #084e47)'}}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 80 80" fill="none">
          <defs>
            <pattern id="pricing-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="3" fill="currentColor" className="text-yellow-400"/>
              <path d="M10 30h20M30 10v20" stroke="currentColor" strokeWidth="0.5" style={{color: '#5ec9bd'}}/>
            </pattern>
          </defs>
          <rect width="80" height="80" fill="url(#pricing-pattern)" />
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-24 h-24 bg-yellow-400/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 rounded-full blur-xl" style={{backgroundColor: 'rgba(94, 201, 189, 0.1)'}}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Investasi untuk Masa Depan Anda
            </h2>
            <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed" style={{color: '#ccefeb'}}>
              Ini bukan sekadar pelatihan, tapi investasi untuk pengembangan diri yang akan berdampak jangka panjang pada karir dan kehidupan pribadi
              Anda. Dengan biaya yang terjangkau, Anda mendapatkan akses ke pengetahuan dan pengalaman dari pakar nasional.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-teal-400 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Per Session Pricing */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-teal-400/30 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden group">
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-400/20 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative z-10">
                {/* Card Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-500 rounded-2xl mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Investasi Per Sesi
                  </h3>
                </div>

                {/* Pricing */}
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <span className="text-2xl line-through" style={{color: '#9fddd6'}}>Rp 90.000</span>
                    <span className="text-4xl md:text-5xl font-bold text-yellow-400">Rp 75.000</span>
                  </div>
                  <div className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold inline-block">
                    Hemat Rp 15.000
                  </div>
                </div>

                {/* Description */}
                <p className="text-center mb-6 leading-relaxed" style={{color: '#ccefeb'}}>
                  Hemat Rp 15.000 untuk setiap sesi yang Anda ikuti. Kesempatan terbatas!
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white">Akses 90 menit pembelajaran berkualitas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white">Materi dari pakar nasional</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white">Sesi interaktif via Zoom</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Pilih Sesi Tertentu
                </button>
              </div>
            </div>

            {/* Bundle Pricing - Featured */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-yellow-400/50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative group" style={{overflow: 'visible'}}>
              {/* Popular Badge */}
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-6 py-2 rounded-full text-xs font-extrabold transform rotate-12 shadow-xl z-20 border-2 border-white">
                ⭐ TERPOPULER
              </div>

              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/20 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" style={{overflow: 'hidden'}}></div>
              
              <div className="relative z-10">
                {/* Card Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-2xl mb-4">
                    <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Paket Bundling Hemat
                  </h3>
                </div>

                {/* Pricing */}
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <span className="text-2xl line-through" style={{color: '#9fddd6'}}>Rp 150.000</span>
                    <span className="text-4xl md:text-5xl font-bold text-yellow-400">Rp 100.000</span>
                  </div>
                  <div className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold inline-block">
                    Hemat Rp 50.000
                  </div>
                </div>

                {/* Description */}
                <p className="text-center mb-6 leading-relaxed" style={{color: '#ccefeb'}}>
                  Ikuti kedua sesi dan hemat Rp 50.000! Dapatkan pengalaman pembelajaran yang komprehensif.
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white">Akses ke kedua sesi lengkap (180 menit)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white">Pembelajaran holistik & komprehensif</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white">Bonus materi tambahan</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white">Prioritas akses ke komunitas</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Ambil Paket Lengkap
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Notice */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 bg-green-400/20 text-green-300 px-6 py-3 rounded-full border border-green-400/30">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Pelatihan telah terlaksana dengan sukses bersama 100+ peserta!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
