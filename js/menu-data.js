// js/menu-data.js
// Menu data array exported as ES module
// Categories: espresso, brewed, specialty, tea, pastries

export const menuItems = [
  // ── Espresso ──
  {
    name: "Espresso",
    description: "A concentrated shot of our signature house blend, rich and bold with notes of dark chocolate and toasted hazelnut.",
    price: "$3.00",
    category: "espresso"
  },
  {
    name: "Double Espresso",
    description: "Two shots of our signature blend for those who need an extra kick to start the day.",
    price: "$4.00",
    category: "espresso"
  },
  {
    name: "Macchiato",
    description: "Espresso marked with a dollop of steamed milk foam — a perfect balance of strength and creaminess.",
    price: "$4.25",
    category: "espresso"
  },
  {
    name: "Cortado",
    description: "Equal parts espresso and steamed milk, served in a small glass for a smooth, velvety sip.",
    price: "$4.50",
    category: "espresso"
  },
  {
    name: "Flat White",
    description: "Double shot espresso topped with micro-foamed milk, delivering a silky texture and intense coffee flavor.",
    price: "$5.00",
    category: "espresso"
  },
  {
    name: "Cappuccino",
    description: "Classic Italian cappuccino with equal parts espresso, steamed milk, and airy foam dusted with cocoa.",
    price: "$5.25",
    category: "espresso"
  },
  {
    name: "Latte",
    description: "Espresso with steamed milk and a thin layer of foam. Available with vanilla, caramel, or hazelnut syrup.",
    price: "$5.50",
    category: "espresso"
  },
  {
    name: "Mocha",
    description: "Espresso blended with rich chocolate sauce and steamed milk, topped with whipped cream and cocoa shavings.",
    price: "$5.75",
    category: "espresso"
  },

  // ── Brewed ──
  {
    name: "House Drip Coffee",
    description: "Our rotating single-origin pour-over, brewed fresh every two hours. Ask about today's selection.",
    price: "$3.50",
    category: "brewed"
  },
  {
    name: "Decaf Drip Coffee",
    description: "Smooth and flavorful decaffeinated drip coffee, processed using the Swiss Water method.",
    price: "$3.50",
    category: "brewed"
  },
  {
    name: "Cold Brew",
    description: "Steeped for 18 hours in cold water for a smooth, naturally sweet cup with low acidity.",
    price: "$4.75",
    category: "brewed"
  },
  {
    name: "Nitro Cold Brew",
    description: "Cold brew infused with nitrogen for a creamy, cascading texture reminiscent of a stout beer.",
    price: "$5.50",
    category: "brewed"
  },
  {
    name: "Pour-Over Single Origin",
    description: "Hand-poured single-origin coffee from a rotating selection of farms in Ethiopia, Colombia, and Guatemala.",
    price: "$5.00",
    category: "brewed"
  },
  {
    name: "French Press",
    description: "Full-immersion brew with a bold, full-bodied flavor. Available in regular or decaf.",
    price: "$4.25",
    category: "brewed"
  },

  // ── Specialty ──
  {
    name: "Caramel Macchiato",
    description: "Vanilla-infused milk marked with espresso and drizzled with caramel sauce over ice or hot.",
    price: "$5.75",
    category: "specialty"
  },
  {
    name: "Honey Lavender Latte",
    description: "Espresso with steamed milk, local wildflower honey, and a hint of culinary lavender.",
    price: "$6.00",
    category: "specialty"
  },
  {
    name: "Spiced Chai Latte",
    description: "Black tea simmered with cinnamon, cardamom, ginger, and cloves, served with steamed milk.",
    price: "$5.50",
    category: "specialty"
  },
  {
    name: "Iced Caramel Cold Foam",
    description: "Cold brew topped with a sweet, airy caramel cold foam — our most popular summer drink.",
    price: "$6.25",
    category: "specialty"
  },
  {
    name: "Matcha White Chocolate",
    description: "Ceremonial-grade matcha whisked with steamed milk and white chocolate sauce.",
    price: "$6.00",
    category: "specialty"
  },
  {
    name: "Affogato",
    description: "A scoop of vanilla bean gelato drowned in a shot of hot espresso. A dessert in a cup.",
    price: "$6.50",
    category: "specialty"
  },
  {
    name: "Espresso Tonic",
    description: "Double espresso poured over ice and tonic water with a twist of orange peel. Refreshing and effervescent.",
    price: "$5.75",
    category: "specialty"
  },

  // ── Tea ──
  {
    name: "English Breakfast Tea",
    description: "A robust blend of Assam and Ceylon teas, best enjoyed with milk and a touch of sugar.",
    price: "$3.75",
    category: "tea"
  },
  {
    name: "Earl Grey",
    description: "Black tea scented with natural bergamot oil for a floral, citrusy aroma.",
    price: "$3.75",
    category: "tea"
  },
  {
    name: "Jasmine Green Tea",
    description: "Delicate green tea leaves scented with jasmine blossoms, served hot or iced.",
    price: "$4.00",
    category: "tea"
  },
  {
    name: "Chamomile Herbal Tea",
    description: "Caffeine-free chamomile flowers with a hint of lemon balm — perfect for winding down.",
    price: "$3.75",
    category: "tea"
  },
  {
    name: "Iced Peach Oolong",
    description: "Lightly oxidized oolong tea with natural peach flavor, served over ice.",
    price: "$4.25",
    category: "tea"
  },
  {
    name: "Masala Chai Tea",
    description: "Pure spiced black tea concentrate — add your own milk or enjoy it straight.",
    price: "$4.00",
    category: "tea"
  },

  // ── Pastries ──
  {
    name: "Butter Croissant",
    description: "Flaky, golden layers of laminated dough baked fresh every morning with French butter.",
    price: "$3.50",
    category: "pastries"
  },
  {
    name: "Almond Croissant",
    description: "Twice-baked croissant filled with frangipane cream and topped with sliced almonds and powdered sugar.",
    price: "$4.50",
    category: "pastries"
  },
  {
    name: "Blueberry Muffin",
    description: "Moist muffin bursting with wild blueberries and a crumbly streusel topping.",
    price: "$3.75",
    category: "pastries"
  },
  {
    name: "Cinnamon Roll",
    description: "Soft, pillowy roll swirled with cinnamon sugar and glazed with cream cheese frosting.",
    price: "$4.25",
    category: "pastries"
  },
  {
    name: "Chocolate Chip Cookie",
    description: "Chewy center, crispy edges, loaded with dark chocolate chips and a pinch of sea salt.",
    price: "$2.75",
    category: "pastries"
  },
  {
    name: "Banana Bread",
    description: "Dense, moist banana bread with walnuts and a hint of cinnamon, baked daily.",
    price: "$3.50",
    category: "pastries"
  },
  {
    name: "Avocado Toast",
    description: "Sourdough toast topped with smashed avocado, cherry tomatoes, radish, and everything bagel seasoning.",
    price: "$7.50",
    category: "pastries"
  },
  {
    name: "Breakfast Burrito",
    description: "Warm flour tortilla filled with scrambled eggs, black beans, cheese, salsa, and cilantro.",
    price: "$8.00",
    category: "pastries"
  }
];

// Export category metadata for filter buttons
export const menuCategories = [
  { id: "all", label: "All Items" },
  { id: "espresso", label: "Espresso" },
  { id: "brewed", label: "Brewed" },
  { id: "specialty", label: "Specialty" },
  { id: "tea", label: "Tea" },
  { id: "pastries", label: "Pastries" }
];
