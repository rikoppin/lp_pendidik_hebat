import React from 'react';

const Speaker: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
          <defs>
            <pattern id="speaker-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="currentColor" className="text-blue-600"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#speaker-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Narasumber
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          {/* Speaker Profile */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Profile Image Placeholder */}
              <div className="md:col-span-1 flex justify-center">
                <div className="w-48 h-48 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                  <div className="w-44 h-44 bg-white rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-gray-600">TK</span>
                  </div>
                </div>
              </div>

              {/* Profile Content */}
              <div className="md:col-span-2 space-y-6">
                {/* Name and Title */}
                <div className="text-center md:text-left">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    Prof. Taufik Kasturi, S.Psi., M.Si., Ph.D
                  </h3>
                  <p className="text-lg text-blue-600 font-semibold">
                    Guru Besar Fakultas Psikologi Universitas Muhammadiyah Surakarta
                  </p>
                </div>

                {/* Description */}
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-base md:text-lg">
                    Guru Besar Fakultas Psikologi Universitas Muhammadiyah Surakarta yang telah 
                    mendedikasikan hidupnya untuk mengembangkan ilmu psikologi di Indonesia. 
                    Beliau adalah pakar terkemuka dalam bidang Psikologi Islam dan Psikologi Positif 
                    dengan pengalaman lebih dari 25 tahun.
                  </p>
                  <p className="text-base md:text-lg">
                    Dengan pendekatan yang menggabungkan nilai-nilai spiritual dan prinsip-prinsip 
                    psikologi modern, Prof. Taufik telah membantu ribuan pendidik menemukan makna 
                    sejati dalam profesi mereka dan mengembangkan keseimbangan hidup yang harmonis.
                  </p>
                </div>

                {/* Credentials */}
                <div className="grid sm:grid-cols-2 gap-4 pt-6">
                  <div className="bg-white/70 rounded-xl p-4 backdrop-blur-sm border border-white/20">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                      <span className="text-sm md:text-base font-medium text-gray-800">
                        Guru Besar Fakultas Psikologi UMS
                      </span>
                    </div>
                  </div>
                  <div className="bg-white/70 rounded-xl p-4 backdrop-blur-sm border border-white/20">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                      <span className="text-sm md:text-base font-medium text-gray-800">
                        Pakar Psikologi Islam & Psikologi Positif
                      </span>
                    </div>
                  </div>
                  <div className="bg-white/70 rounded-xl p-4 backdrop-blur-sm border border-white/20">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                      <span className="text-sm md:text-base font-medium text-gray-800">
                        Penulis berbagai buku dan jurnal ilmiah
                      </span>
                    </div>
                  </div>
                  <div className="bg-white/70 rounded-xl p-4 backdrop-blur-sm border border-white/20">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                      <span className="text-sm md:text-base font-medium text-gray-800">
                        Pembicara nasional berpengalaman
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote or Highlight */}
            <div className="mt-8 pt-8 border-t border-white/30">
              <div className="text-center">
                <blockquote className="text-lg md:text-xl font-medium text-gray-600 italic">
                  "Pendidikan sejati adalah proses menemukan makna dan tujuan hidup melalui 
                  pengembangan potensi diri yang selaras dengan nilai-nilai spiritual"
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speaker;
