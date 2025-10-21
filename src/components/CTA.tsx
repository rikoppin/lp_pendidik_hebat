import React from 'react';

const CTA: React.FC = () => {
  return (
    <section 
      className="py-20 relative overflow-hidden"
      style={{background: 'linear-gradient(to bottom right, #0d8c7d, #0a6d62, #084e47)'}}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
          <defs>
            <pattern id="cta-pattern" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="15" cy="15" r="2" fill="currentColor" className="text-white"/>
              <circle cx="5" cy="5" r="1" fill="currentColor" className="text-yellow-400"/>
              <circle cx="25" cy="25" r="1" fill="currentColor" className="text-yellow-400"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#cta-pattern)" />
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full blur-xl" style={{backgroundColor: 'rgba(94, 201, 189, 0.2)'}}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-300/20 rounded-full blur-xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main CTA Content */}
          <div className="space-y-8">
            {/* Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Daftar Sekarang & Mulai
              <br />
              <span className="text-yellow-400">Transformasi Anda</span>
            </h2>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto">
                Ambil langkah pertama menuju perjalanan transformasi Anda sebagai pendidik
                yang lebih baik, lebih bahagia, dan lebih bermakna. Investasi kecil hari ini akan
                memberikan dampak besar untuk masa depan Anda dan generasi yang Anda didik.
              </p>
              <p className="text-lg md:text-xl text-yellow-300 leading-relaxed max-w-4xl mx-auto font-medium">
                Jangan tunda lagi! Setiap hari yang berlalu adalah kesempatan yang terlewat untuk
                menjadi versi terbaik dari diri Anda sebagai pendidik.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              {/* Primary Button */}
              <button className="group relative px-10 py-5 bg-yellow-400 text-gray-900 font-bold text-xl rounded-full hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-400/25">
                <span className="relative z-10">Daftar Sekarang</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              {/* Secondary Button */}
              <button className="group relative px-10 py-5 border-2 border-white text-white font-bold text-xl rounded-full hover:bg-white hover:text-teal-900 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center space-x-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515z"/>
                </svg>
                <span className="relative z-10">Tanya via WhatsApp</span>
              </button>
            </div>

            {/* Bottom Help Section */}
            <div className="pt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center justify-center space-x-3 text-center">
                  <svg className="w-8 h-8 text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="text-left">
                    <h4 className="text-lg font-bold text-white mb-1">Pertanyaan?</h4>
                    <p className="text-white/80">Tim kami siap membantu Anda. Hubungi kami melalui WhatsApp untuk informasi lebih lanjut atau konsultasi mengenai pelatihan ini</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
