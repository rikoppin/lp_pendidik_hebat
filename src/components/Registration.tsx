import React from 'react';

const Registration: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
          <defs>
            <pattern id="registration-pattern" width="25" height="25" patternUnits="userSpaceOnUse">
              <circle cx="12.5" cy="12.5" r="2" fill="currentColor" className="text-orange-600"/>
              <path d="M5 12.5h15M12.5 5v15" stroke="currentColor" strokeWidth="0.3" className="text-red-400"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#registration-pattern)" />
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-orange-400/20 rounded-full blur-lg animate-bounce"></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 bg-red-400/20 rounded-full blur-lg animate-bounce delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Jangan Lewatkan Kesempatan Emas Ini!
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Kuota peserta sangat terbatas untuk memastikan kualitas interaksi dan pembelajaran yang optimal. Segera daftarkan diri Anda sebelum
              kehabisan tempat. Ini adalah kesempatan langka untuk belajar langsung dari pakar nasional dengan investasi yang sangat terjangkau.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Registration Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Step 1: Isi Formulir */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 shadow-xl border-2 border-blue-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group relative">
              {/* Step Number */}
              <div className="absolute -top-4 -left-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
              </div>

              <div className="text-center pt-4">
                {/* Icon */}
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Isi Formulir
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  Lengkapi formulir pendaftaran online dengan data diri Anda
                </p>
              </div>
            </div>

            {/* Step 2: Lakukan Pembayaran */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 shadow-xl border-2 border-green-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group relative">
              {/* Step Number */}
              <div className="absolute -top-4 -left-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
              </div>

              <div className="text-center pt-4">
                {/* Icon */}
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Lakukan Pembayaran
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  Transfer sesuai paket yang dipilih ke rekening yang tertera
                </p>
              </div>
            </div>

            {/* Step 3: Konfirmasi */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 shadow-xl border-2 border-purple-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group relative">
              {/* Step Number */}
              <div className="absolute -top-4 -left-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
              </div>

              <div className="text-center pt-4">
                {/* Icon */}
                <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Konfirmasi
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  Kirim bukti transfer dan tunggu konfirmasi dari tim kami
                </p>
              </div>
            </div>

            {/* Step 4: Terima Link Zoom */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 shadow-xl border-2 border-orange-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group relative">
              {/* Step Number */}
              <div className="absolute -top-4 -left-4">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
              </div>

              <div className="text-center pt-4">
                {/* Icon */}
                <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Terima Link Zoom
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  Dapatkan link meeting dan materi persiapan via email/WhatsApp
                </p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Registration;
