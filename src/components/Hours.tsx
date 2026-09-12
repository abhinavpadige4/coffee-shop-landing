export default function Hours() {
  const hours = [
    { day: "Monday", open: "7:00 AM", close: "6:00 PM" },
    { day: "Tuesday", open: "7:00 AM", close: "6:00 PM" },
    { day: "Wednesday", open: "7:00 AM", close: "6:00 PM" },
    { day: "Thursday", open: "7:00 AM", close: "6:00 PM" },
    { day: "Friday", open: "7:00 AM", close: "7:00 PM" },
    { day: "Saturday", open: "8:00 AM", close: "7:00 PM" },
    { day: "Sunday", open: "8:00 AM", close: "5:00 PM" }
  ];

  return (
    <section id="hours" className="py-20 bg-coffee-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-display text-center text-coffee-800 mb-12">
          Opening Hours
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {hours.map((hour) => (
            <div key={hour.day} className="bg-white rounded-xl p-6 text-center shadow-sm">
              <h3 className="text-lg font-medium text-coffee-800 mb-4">{hour.day}</h3>
              <div className="space-y-2">
                <p className="text-coffee-600 flex justify-center">
                  <span className="mr-2">Open:</span> <span className="font-medium">{hour.open}</span>
                </p>
                <p className="text-coffee-600 flex justify-center">
                  <span className="mr-2">Close:</span> <span className="font-medium">{hour.close}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}