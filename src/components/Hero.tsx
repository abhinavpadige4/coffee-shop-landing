export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-coffee-50 to-white py-24">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-10"></div>
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-coffee-800 mb-6 leading-tight">
            Freshly Brewed Coffee
          </h1>
          <p className="text-xl md:text-2xl text-coffee-600 max-w-2xl mx-auto mb-8">
            Artisanal coffee roasted in-house and served with a smile
          </p>
          <div className="flex flex-col sm:flex-row sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#menu" className="inline-block bg-coffee-800 text-white px-6 py-3 rounded-lg hover:bg-coffee-900 transition-colors font-medium">
              See Our Menu
            </a>
            <a href="#contact" className="inline-block border-2 border-coffee-800 text-coffee-800 px-6 py-3 rounded-lg hover:bg-coffee-50 transition-colors font-medium">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}