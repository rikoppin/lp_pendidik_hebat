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
                <div className="w-20 h-20 bg-gradient-to-br from-custom-teal to-custom-teal-dark rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Hubungi via WhatsApp
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Dapatkan informasi terbaru tentang pelatihan mendatang dan program-program kami lainnya
                </p>
                <button className="bg-custom-teal text-white px-8 py-3 rounded-full font-semibold hover:bg-custom-teal-dark transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 mx-auto">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515z"/>
                  </svg>
                  <span>Chat Sekarang</span>
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
