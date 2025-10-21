import React from 'react';

const TargetAudience: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 80 80" fill="none">
          <defs>
            <pattern id="target-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="3" fill="currentColor" className="text-custom-teal"/>
              <path d="M10 10l20 20M30 10l-20 20" stroke="currentColor" strokeWidth="0.5" className="text-yellow-400"/>
            </pattern>
          </defs>
          <rect width="80" height="80" fill="url(#target-pattern)" />
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-16 right-16 w-20 h-20 rounded-full blur-lg animate-pulse" style={{backgroundColor: 'rgba(19, 178, 161, 0.1)'}}></div>
      <div className="absolute bottom-16 left-16 w-24 h-24 bg-yellow-400/10 rounded-full blur-lg animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Siapa yang Harus Mengikuti Pelatihan Ini?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Pelatihan ini dirancang khusus untuk berbagai kalangan yang berkecimpung dalam dunia pendidikan dan pengasuhan. Jika Anda merasa perlu
              mengembangkan keterampilan pengelolaan diri dan keseimbangan emosional, pelatihan ini sangat tepat untuk Anda.
            </p>
            <div className="w-24 h-1 mx-auto rounded-full mt-6" style={{background: 'linear-gradient(to right, #13b2a1, #fbbf24)'}}></div>
          </div>

          {/* Target Audience Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Target 1: Guru & Pendidik */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group" style={{borderColor: '#13b2a1'}}>
              <div className="text-center">
                {/* Icon */}
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" style={{background: 'linear-gradient(to right, #13b2a1, #0f8f81)'}}>
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Guru & Pendidik
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  Guru TK, SD, SMP, SMA, atau perguruan tinggi yang ingin meningkatkan kualitas pengajaran dan kesejahteraan diri
                </p>
              </div>
            </div>

            {/* Target 2: Pengasuh Pesantren */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-yellow-400 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="text-center">
                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Pengasuh Pesantren
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  Musyrif/Musyrifah yang ingin menjadi pengasuh yang lebih bijaksana dan memahami kebutuhan emosional anak
                </p>
              </div>
            </div>

            {/* Target 3: Konselor Pendidikan */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group" style={{borderColor: '#13b2a1'}}>
              <div className="text-center">
                {/* Icon */}
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" style={{background: 'linear-gradient(to right, #13b2a1, #0f8f81)'}}>
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Konselor Pendidikan
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  Konselor sekolah atau psikolog pendidikan yang ingin memperdalam pendekatan holistik dalam konseling
                </p>
              </div>
            </div>

            {/* Target 4: Pengelola Lembaga */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-yellow-400 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="text-center">
                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Pengelola Lembaga
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  Kepala sekolah, Kepala Pesantren, Direktur atau pengelola lembaga pendidikan yang ingin meningkatkan kualitas tenaga pendidik
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-16 text-center">
            <div 
              className="rounded-3xl p-8 md:p-12 text-white"
              style={{background: '#119d8e'}}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Apakah Anda Termasuk Salah Satunya?
              </h3>
              <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto" style={{color: '#e6f7f5'}}>
                Jika Anda merasa resonan dengan salah satu profesi di atas dan ingin mengembangkan diri menjadi pendidik yang lebih baik, 
                pelatihan ini adalah kesempatan yang tepat untuk Anda.
              </p>
              
              {/* Call to Action */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-yellow-300 hover:bg-yellow-400 text-gray-900 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Daftar Sekarang
                </button>
                <button className="border-2 border-white text-white hover:bg-white font-bold py-4 px-8 rounded-full transition-all duration-300" style={{['--hover-text-color' as any]: '#119d8e'}}>
                  Konsultasi Gratis
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
