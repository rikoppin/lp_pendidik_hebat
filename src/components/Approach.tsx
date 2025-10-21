import React from 'react';

const Approach: React.FC = () => {
  const approaches = [
    {
      title: 'Pendekatan Holistik',
      description: 'Menggabungkan Psikologi Islam dan Psikologi Positif untuk pendidikan yang bermakna dan menyentuh hati',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Insight Praktis',
      description: 'Strategi konkret yang dapat langsung diterapkan dalam kehidupan sehari-hari sebagai pendidik',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Pengalaman Transformatif',
      description: 'Belajar dari pakar nasional dengan pengalaman puluhan tahun di bidang psikologi pendidikan',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: 'from-purple-500 to-indigo-500'
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{
          backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><pattern id="learning" width="60" height="60" patternUnits="userSpaceOnUse"><circle cx="15" cy="15" r="2" fill="gray" opacity="0.1"/><circle cx="45" cy="45" r="1.5" fill="gray" opacity="0.1"/><rect x="25" y="25" width="8" height="8" fill="gray" opacity="0.05"/></pattern></defs><rect width="100%" height="100%" fill="url(%23learning)"/></svg>')`
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mengapa Pendekatan Kami 
            <span className="text-teal-500"> Berbeda?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami menggunakan metodologi yang telah terbukti untuk mengembangkan pendidik yang tidak hanya kompeten, 
            tetapi juga penuh empati dan inspiratif.
          </p>
        </div>

        {/* Approach Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {approaches.map((approach, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${approach.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${approach.gradient} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {approach.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                {approach.title}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                {approach.description}
              </p>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${approach.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-0.5`}>
                <div className="w-full h-full bg-white rounded-3xl"></div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Approach;
