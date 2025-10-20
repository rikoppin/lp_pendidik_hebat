import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 60 60" fill="none">
          <defs>
            <pattern id="testimonials-pattern" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M15 5L25 15L15 25L5 15Z" fill="currentColor" className="text-blue-600"/>
              <circle cx="15" cy="15" r="1" fill="currentColor" className="text-purple-400"/>
            </pattern>
          </defs>
          <rect width="60" height="60" fill="url(#testimonials-pattern)" />
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-16 h-16 bg-blue-400/10 rounded-full blur-lg"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-purple-400/10 rounded-full blur-lg"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Apa Kata Peserta Pelatihan Sebelumnya?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ribuan pendidik telah merasakan transformasi positif setelah mengikuti pelatihan dengan Prof. Taufik Kasturi. Berikut adalah beberapa testimoni
              dari peserta yang telah merasakan manfaatnya.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 shadow-xl border border-blue-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative">
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="pt-4">
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "Pelatihan ini membuka wawasan saya tentang pentingnya mengatur diri sebelum mengajar. Materinya mudah dipahami dan bisa langsung diterapkan. Sekarang saya jadi lebih tenang dan senang saat mengajar!"
                </p>

                {/* Rating Stars */}
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 shadow-xl border border-purple-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative">
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="pt-4">
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "Materi Prof. Taufik sangat menarik dan penuh makna. Saya belajar cara menyeimbangkan pekerjaan dan kehidupan pribadi. Ini adalah investasi terbaik untuk diri saya tahun ini."
                </p>

                {/* Rating Stars */}
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 shadow-xl border border-green-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative">
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="pt-4">
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "Pendekatan Psikologi Islam dan Psikologi Positif sangat pas untuk pendidik Muslim. Isinya mendalam dan praktis. Sangat direkomendasikan untuk semua pendidik!"
                </p>

                {/* Rating Stars */}
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-gray-100 to-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Bergabunglah dengan Ribuan Pendidik Lainnya
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Jadilah bagian dari transformasi pendidikan yang bermakna
              </p>
              <div className="flex items-center justify-center space-x-16">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">85%</div>
                  <div className="text-sm text-gray-600">tingkat kepuasan</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">500+</div>
                  <div className="text-sm text-gray-600">Alumni</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
