import React from 'react';

const Registration: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-custom-teal relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
          <defs>
            <pattern id="registration-pattern" width="25" height="25" patternUnits="userSpaceOnUse">
              <circle cx="12.5" cy="12.5" r="2" fill="currentColor" className="text-custom-teal"/>
              <path d="M5 12.5h15M12.5 5v15" stroke="currentColor" strokeWidth="0.3" className="text-yellow-400"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#registration-pattern)" />
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 rounded-full blur-lg animate-bounce" style={{backgroundColor: 'rgba(19, 178, 161, 0.2)'}}></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-lg animate-bounce delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pelatihan Telah Terlaksana dengan Sukses!
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Terima kasih kepada 100+ peserta yang telah bergabung dalam pelatihan "Menjadi Pendidik Hebat Sedekat Sahabat". 
              Kami berkomitmen untuk terus menghadirkan program-program berkualitas untuk pengembangan pendidik dan pengasuh di Indonesia.
            </p>
            <div className="w-24 h-1 mx-auto rounded-full mt-6" style={{background: 'linear-gradient(to right, #13b2a1, #fbbf24)'}}></div>
          </div>

          {/* Contact Info for Future Events */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Contact Card 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 hover:shadow-2xl transition-all duration-300 group" style={{borderColor: '#13b2a1'}}>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-12 h-12 text-white" viewBox="0 0 32 32" fill="currentColor">
                    <path d="M16 0C7.164 0 0 7.164 0 16c0 2.825.738 5.478 2.027 7.777L.001 32l8.387-2.006A15.93 15.93 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.333A13.29 13.29 0 018.94 27.39l-.477-.28-4.943 1.184 1.207-4.877-.31-.495A13.26 13.26 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zM23.547 19.42c-.365-.183-2.16-1.066-2.494-1.187-.335-.122-.578-.183-.822.183s-.943 1.187-1.156 1.43c-.213.244-.426.274-.791.091s-1.543-.569-2.937-1.813c-1.086-.969-1.819-2.166-2.032-2.531-.213-.366-.023-.563.16-.745.165-.164.366-.427.549-.64.183-.214.244-.366.366-.61.122-.244.061-.457-.03-.64s-.822-1.982-1.126-2.714c-.296-.712-.597-.616-.822-.627-.213-.01-.457-.012-.7-.012s-.64.091-.975.457c-.335.366-1.278 1.25-1.278 3.048s1.308 3.536 1.491 3.779c.183.244 2.572 3.932 6.234 5.515.871.377 1.551.602 2.081.77.875.279 1.671.24 2.301.145.702-.105 2.16-.884 2.464-1.737.305-.853.305-1.585.213-1.737-.091-.152-.335-.244-.7-.427z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Hubungi via WhatsApp
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Dapatkan informasi terbaru tentang pelatihan mendatang dan program-program kami lainnya
                </p>
                <button className="bg-custom-teal text-white px-8 py-3 rounded-full font-semibold hover:bg-custom-teal-dark transition-all duration-300 transform hover:scale-105">
                  Chat Sekarang
                </button>
              </div>
            </div>

            {/* Contact Card 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-yellow-400 hover:shadow-2xl transition-all duration-300 group">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Email Kami
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Kirimkan pertanyaan atau permintaan informasi melalui email untuk respon yang lebih detail
                </p>
                <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105">
                  Kirim Email
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Note */}
          <div className="mt-12 text-center max-w-3xl mx-auto">
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-custom-teal/20">
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-custom-teal">Konsorsium Pendidikan Islam Internasional (KOPIN)</strong> berkomitmen 
                untuk terus menghadirkan pelatihan berkualitas bagi para pendidik dan pengasuh. 
                Nantikan program-program inspiratif kami selanjutnya!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
