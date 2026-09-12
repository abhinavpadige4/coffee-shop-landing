export default function Menu() {
  const menuItems = [
    {
      id: 1,
      name: "Espresso",
      description: "Rich, concentrated shot of our house blend",
      price: "$2.50",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=60"
    },
    {
      id: 2,
      name: "Americano",
      description: "Espresso topped with hot water for a smooth cup",
      price: "$3.00",
      image: "https://images.unsplash.com/photo-1518938098479-4636b91d5705?auto=format&fit=crop&w=400&q=60"
    },
    {
      id: 3,
      name: "Cappuccino",
      description: "Equal parts espresso, steamed milk, and foam",
      price: "$3.75",
      image: "https://images.unsplash.com/photo-1534540243648-ef034b70553f?auto=format&fit=crop&w=400&q=60"
    },
    {
      id: 4,
      name: "Latte",
      description: "Silky steamed milk with a shot of espresso",
      price: "$4.00",
      image: "https://images.unsplash.com/photo-1518876082837-6e1034054969?auto=format&fit=crop&w=400&q=60"
    },
    {
      id: 5,
      name: "Mocha",
      description: "Chocolate, espresso, and steamed milk",
      price: "$4.50",
      image: "https://images.unsplash.com/photo-1541167641019-0b0b3b4d1b2b?auto=format&fit=crop&w=400&q=60"
    },
    {
      id: 6,
      name: "Cold Brew",
      description: "Smooth, low-acid coffee steeped for 20 hours",
      price: "$4.25",
      image: "https://images.unsplash.com/photo-1518876082837-6e1034054969?auto=format&fit=crop&w=400&q=60"
    },
    {
      id: 7,
      name: "Blueberry Muffin",
      description: "Freshly baked with local blueberries",
      price: "$3.50",
      image: "https://images.unsplash.com/photo-1586444248902-2f64edd913df?auto=format&fit=crop&w=400&q=60"
    },
    {
      id: 8,
      name: "Croissant",
      description: "Flaky, buttery pastry baked fresh daily",
      price: "$3.25",
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808c?auto=format&fit=crop&w=400&q=60"
    }
  ];

  return (
    <section id="menu" className="py-20 bg-coffee-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-display text-center text-coffee-800 mb-12">
          Our Menu
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-medium text-coffee-800 mb-2">{item.name}</h3>
                <p className="text-coffee-600 mb-4 line-clamp-2">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-coffee-800">{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}