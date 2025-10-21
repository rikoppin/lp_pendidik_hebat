import React from 'react';

const Schedule: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 60 60" fill="none">
          <defs>
            <pattern id="schedule-grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M15 5v20M5 15h20" stroke="currentColor" strokeWidth="0.5" style={{color: '#0f8f81'}}/>
              <circle cx="15" cy="15" r="2" fill="currentColor" className="text-yellow-400"/>
            </pattern>
          </defs>
          <rect width="60" height="60" fill="url(#schedule-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Jadwal & Tema Pelatihan
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Pelatihan ini dirancang dalam dua sesi komprehensif yang saling melengkapi, memberikan Anda fondasi kuat untuk menjadi pendidik yang lebih
              efektif dan bahagia. Setiap sesi berlangsung selama 90 menit dengan materi yang padat namun mudah dipahami.
            </p>
            <div className="w-24 h-1 mx-auto rounded-full mt-6" style={{background: 'linear-gradient(to right, #5ec9bd, #0f8f81)'}}></div>
          </div>

          {/* Schedule Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Session 1 */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-300">
              {/* Session Header */}
              <div className="p-8 text-white" style={{background: 'linear-gradient(to right, #13b2a1, #0f8f81)'}}>
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                    Sesi 1
                  </span>
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Manajemen Diri Pengasuh
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 118 0v4m-4 8V7M3 15h18M5 15v6a2 2 0 002 2h10a2 2 0 002-2v-6" />
                    </svg>
                    <span className="text-lg font-semibold">Jumat, 31 Oktober 2025</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-lg">08.00 - 09.30 WIB</span>
                  </div>
                </div>
              </div>

              {/* Session Content */}
              <div className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Pelajari teknik-teknik praktis untuk mengelola emosi, stress, dan
                  energi Anda sebagai pendidik. Temukan cara menjaga kesehatan
                  mental sambil memberikan yang terbaik untuk anak didik.
                </p>

                <div className="space-y-4">
                  <h4 className="font-bold text-gray-900 mb-3">Materi yang akan dipelajari:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-custom-teal rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Teknik self-awareness dan mindfulness</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-custom-teal rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Strategi manajemen stress untuk pendidik</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-custom-teal rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Membangun resiliensi emosional</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-custom-teal rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Praktik self-care yang berkelanjutan</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Session 2 */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-300">
              {/* Session Header */}
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-8 text-white">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                    Sesi 2
                  </span>
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Psikologi Keseimbangan
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 118 0v4m-4 8V7M3 15h18M5 15v6a2 2 0 002 2h10a2 2 0 002-2v-6" />
                    </svg>
                    <span className="text-lg font-semibold">Sabtu, 1 November 2025</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-lg">08.00 - 09.30 WIB</span>
                  </div>
                </div>
              </div>

              {/* Session Content */}
              <div className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Eksplorasi prinsip-prinsip keseimbangan hidup dalam perspektif
                  Psikologi Islam dan Positif. Pelajari cara menciptakan harmoni
                  antara peran profesional dan kehidupan personal.
                </p>

                <div className="space-y-4">
                  <h4 className="font-bold text-gray-900 mb-3">Materi yang akan dipelajari:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Konsep keseimbangan dalam Islam</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Work-life balance untuk pendidik</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Membangun kebahagiaan autentik</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Menemukan makna dalam profesi</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Platform Info */}
          <div 
            className="rounded-2xl p-8 border border-gray-200"
            style={{background: 'linear-gradient(to right, #e6f7f5, #fef3c7)'}}
          >
            <div className="flex items-center justify-center space-x-4 text-center">
              <div className="w-12 h-12 bg-custom-teal rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <div className="text-left">
                <h4 className="text-lg font-bold text-gray-900 mb-1">Platform: Zoom Meeting</h4>
                <p className="text-gray-600">Akses mudah dari mana saja, cukup dengan koneksi internet yang stabil</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
