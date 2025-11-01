import React from 'react';

const Article: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 60 60" fill="none">
          <defs>
            <pattern id="article-grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M15 5v20M5 15h20" stroke="currentColor" strokeWidth="0.5" style={{color: '#0f8f81'}}/>
              <circle cx="15" cy="15" r="2" fill="currentColor" className="text-yellow-400"/>
            </pattern>
          </defs>
          <rect width="60" height="60" fill="url(#article-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Article Container */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Featured Image */}
            <div className="relative h-64 md:h-96 bg-gradient-to-br from-custom-teal-light to-custom-teal overflow-hidden">
              <img 
                src="/images/pelatihan-kopin-oktober-2025.jpg" 
                alt="Pelatihan Menjadi Pendidik Hebat Sedekat Sahabat - KOPIN"
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
              
              {/* Location Badge */}
              <div className="absolute bottom-6 left-6 flex items-center space-x-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg z-10">
                <svg className="w-4 h-4 text-custom-teal" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold text-gray-700">Jakarta, 31 Oktober 2025</span>
              </div>
            </div>

            {/* Article Content */}
            <div className="p-8 md:p-12">
              {/* Category Label */}
              <div className="inline-block mb-6">
                <span className="text-xs font-bold tracking-widest text-custom-teal uppercase">Liputan Pelatihan</span>
                <div className="w-16 h-0.5 mt-1 rounded-full" style={{background: 'linear-gradient(to right, #13b2a1, #fbbf24)'}}></div>
              </div>

              {/* Article Title */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Pelatihan "Menjadi Pendidik Hebat Sedekat Sahabat": Prof. Taufik Kasturi Tekankan Pentingnya Manajemen Diri bagi Pengasuh
              </h2>

              {/* Article Body */}
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  <strong>Jakarta, 31 Oktober 2025</strong> — Konsorsium Pendidikan Islam Internasional (KOPIN) menggelar pelatihan inspiratif "Menjadi Pendidik Hebat Sedekat Sahabat" secara daring melalui Zoom Meeting. Lebih dari 100 guru dan pengasuh dari berbagai lembaga pendidikan Islam di seluruh Indonesia mengikuti kegiatan ini dengan antusias.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Narasumber utama, <strong>Prof. Taufik Kasturi, S.Psi., M.Si., Ph.D</strong>, Guru Besar Psikologi Universitas Muhammadiyah Surakarta, membawakan materi bertema <em>"Manajemen Diri Pengasuh."</em> Ia menekankan bahwa pendidik hebat tidak hanya pandai mengajar, tetapi juga mampu mengelola diri secara bijak agar tetap seimbang secara emosional, spiritual, dan profesional.
                </p>

                {/* Highlight Box */}
                <div className="my-8 p-6 bg-gradient-to-br from-custom-teal-50 to-white rounded-2xl border-l-4 border-custom-teal shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <svg className="w-6 h-6 text-custom-teal mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                    </svg>
                    5 Pilar Manajemen Diri
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-custom-teal rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700"><strong>Self Awareness</strong> - Kesadaran Diri</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700"><strong>Self Motivation</strong> - Motivasi Diri</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-custom-teal rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700"><strong>Emotional Regulation</strong> - Regulasi Emosi</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700"><strong>Time & Energy Management</strong> - Manajemen Waktu & Energi</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-custom-teal rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700"><strong>Self Reflection</strong> - Refleksi Diri</span>
                    </li>
                  </ul>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Prof. Taufik memperkenalkan 5 Pilar Manajemen Diri, yaitu Self Awareness, Self Motivation, Emotional Regulation, Time & Energy Management, dan Self Reflection. Kelima pilar ini menjadi panduan praktis bagi pengasuh dan guru untuk menjaga keseimbangan diri dalam menjalankan amanah pendidikan.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Kegiatan ini merupakan bagian dari upaya KOPIN meningkatkan kapasitas pendidik dan pengasuh dalam membentuk karakter peserta didik yang berakhlak dan tangguh. Pelatihan berlanjut Sabtu (1/11) dengan tema <em>"Psikologi Keseimbangan."</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Article;
