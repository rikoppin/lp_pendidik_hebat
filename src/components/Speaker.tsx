import React from 'react';

const Speaker: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-custom-teal relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
          <defs>
            <pattern id="speaker-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="currentColor" className="text-custom-teal"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#speaker-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Speaker Profile - Full Width Design */}
          <div className="grid lg:grid-cols-5 gap-0 bg-white rounded-2xl shadow-xl overflow-hidden" style={{minHeight: '450px'}}>
            {/* Profile Image - Full Height, No Padding */}
            <div className="relative h-full min-h-[450px] lg:col-span-2">
              <img 
                src="/images/speaker-taufik-kasturi.png" 
                alt="Prof. Taufik Kasturi, S.Psi., M.Si., Ph.D"
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = '<div class="absolute inset-0 w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200"><span class="text-6xl font-bold text-gray-400">TK</span></div>';
                  }
                }}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0" style={{background: 'linear-gradient(to right, transparent 0%, rgba(255,255,255,0.1) 100%)'}}></div>
            </div>

            {/* Profile Content - With Right Spacing */}
            <div className="flex flex-col justify-center px-6 md:px-8 lg:px-10 py-8 lg:py-10 space-y-5 bg-gradient-to-br from-white to-gray-50 lg:col-span-3">
              {/* Section Label */}
              <div className="inline-block">
                <span className="text-xs font-bold tracking-widest text-custom-teal uppercase">Narasumber</span>
                <div className="w-16 h-0.5 mt-1 rounded-full" style={{background: 'linear-gradient(to right, #13b2a1, #fbbf24)'}}></div>
              </div>

              {/* Name and Title */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 leading-tight">
                  Prof. Taufik Kasturi, S.Psi., M.Si., Ph.D
                </h3>
                <p className="text-base md:text-lg text-custom-teal font-semibold">
                  Guru Besar Fakultas Psikologi Universitas Muhammadiyah Surakarta
                </p>
              </div>

              {/* Description */}
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p className="text-sm md:text-base">
                  Guru Besar Fakultas Psikologi Universitas Muhammadiyah Surakarta yang telah 
                  mendedikasikan hidupnya untuk mengembangkan ilmu psikologi di Indonesia. 
                  Beliau adalah pakar terkemuka dalam bidang Psikologi Islam dan Psikologi Positif 
                  dengan pengalaman lebih dari 25 tahun.
                </p>
              </div>

              {/* Credentials */}
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-custom-teal rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">
                    Pakar Psikologi Islam & Psikologi Positif
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">
                    Penulis berbagai buku dan jurnal ilmiah
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-custom-teal rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">
                    Pembicara nasional berpengalaman
                  </span>
                </div>
              </div>

              {/* Quote */}
              <div className="pt-4 border-t border-gray-200">
                <blockquote className="text-sm md:text-base font-medium text-gray-600 italic leading-relaxed">
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
