import React from 'react';

const WhyDifferent: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><pattern id="education" width="80" height="80" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="3" fill="white" opacity="0.1"/><circle cx="60" cy="60" r="2" fill="white" opacity="0.1"/><rect x="35" y="35" width="10" height="10" fill="white" opacity="0.05"/></pattern></defs><rect width="100%" height="100%" fill="url(%23education)"/></svg>')`
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Menjadi Pendidik Hebat,
            <br />
            <span className="text-teal-400">Sedekat Sahabat</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Bergabunglah dalam pelatihan inspiratif yang dirancang khusus untuk para pendidik 
            dan pengasuh yang ingin tumbuh menjadi pribadi yang kuat, tenang, dan penuh 
            makna dalam mendidik generasi masa depan.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
          <button className="bg-transparent border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-gray-900 font-bold py-4 px-8 rounded-full transition-all duration-300 flex items-center space-x-2">
            <span>Hubungi Kami</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </button>
        </div>

        {/* Why Different Section */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Mengapa Pelatihan Ini Berbeda?
          </h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 leading-relaxed text-center">
              Dalam dunia pendidikan yang terus berkembang, seorang pendidik tidak hanya dituntut untuk mengajar, 
              tetapi juga menjadi sahabat yang memahami, menginspirasi, dan membimbing dengan hati yang penuh empati. 
              Pelatihan ini hadir sebagai jawaban atas kebutuhan para pendidik dan pengasuh untuk mengembangkan 
              keterampilan pengelolaan diri dan keseimbangan emosional.
            </p>
          </div>
        </div>

        {/* Stats or Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-800 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h4 className="text-xl font-bold mb-3">Pendekatan Holistik</h4>
            <p className="text-gray-400 leading-relaxed">
              Menggabungkan Psikologi Islam dan Psikologi Positif untuk pendidikan yang bermakna dan menyentuh hati
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h4 className="text-xl font-bold mb-3">Insight Praktis</h4>
            <p className="text-gray-400 leading-relaxed">
              Strategi konkret yang dapat langsung diterapkan dalam kehidupan sehari-hari sebagai pendidik
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold mb-3">Pengalaman Transformatif</h4>
            <p className="text-gray-400 leading-relaxed">
              Belajar dari pakar nasional dengan pengalaman puluhan tahun di bidang psikologi pendidikan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
