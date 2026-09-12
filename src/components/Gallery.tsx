export default function Gallery() {
  const galleryImages = [
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1518938098479-4636b91d5705?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1534540243648-ef034b70553f?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1518876082837-6e1034054969?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1541167641019-0b0b3b4d1b2b?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1555507036-ab1f4038808c?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1586444248902-2f64edd913df?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=60"
  ];

  return (
    <section id="gallery" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-display text-center text-coffee-800 mb-12">
          Our Space
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((src, index) => (
            <div key={index} className="relative overflow-hidden rounded-xl shadow-lg">
              <img 
                src={src} 
                alt="Coffee shop interior" 
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-300 hover:opacity-100 flex items-center justify-center">
                <div className="text-white text-center px-4">
                  <h3 className="font-semibold mb-2">Brew Haven</h3>
                  <p className="text-sm">Neighborhood Coffee Shop</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}