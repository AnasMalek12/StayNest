const sampleListings = [
  {
    title: "Cozy Home in Nadiad",
    description:
      "Stay in a peaceful residential area of Nadiad. Perfect for families visiting temples or nearby cities like Anand.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4",
    },
    price: 1500,
    location: "Nadiad",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [72.8634, 22.6916],
    },
  },
  {
    title: "Modern Apartment in Anand",
    description:
      "Comfortable apartment near Amul Dairy. Ideal for business trips and short stays.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    },
    price: 1800,
    location: "Anand",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [72.9559, 22.5645],
    },
  },
  {
    title: "Budget Stay near Dakor Temple",
    description:
      "Affordable stay for pilgrims visiting the famous Ranchhodrai Temple in Dakor.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    },
    price: 800,
    location: "Dakor",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [73.1498, 22.7527],
    },
  },
  {
    title: "Luxury Villa in Vadodara",
    description:
      "Spacious villa with modern amenities. Perfect for group stays and celebrations.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1613977257363-707ba9348227",
    },
    price: 4000,
    location: "Vadodara",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [73.1812, 22.3072],
    },
  },
  {
    title: "Farmhouse Stay near Nadiad",
    description:
      "Experience rural Gujarat with this peaceful farmhouse surrounded by greenery.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    },
    price: 2000,
    location: "Nadiad",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [72.8634, 22.6916],
    },
  },
  {
    title: "Student-Friendly PG in Vallabh Vidyanagar",
    description:
      "Affordable and comfortable stay for students near colleges and universities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1554995207-c18c203602cb",
    },
    price: 600,
    location: "Vallabh Vidyanagar",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [72.9236, 22.5536],
    },
  },
  {
    title: "Heritage Style Home in Ahmedabad",
    description:
      "Traditional Gujarati house with modern comfort located in the heart of Ahmedabad.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    },
    price: 2500,
    location: "Ahmedabad",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [72.5714, 23.0225],
    },
  },
  {
    title: "Weekend Getaway near Saputara",
    description:
      "Escape to hills of Saputara with this scenic and peaceful stay.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    price: 3000,
    location: "Saputara",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [73.75, 20.5783],
    },
  },
  {
    title: "Budget Room in Surat",
    description:
      "Simple and clean room in Surat, ideal for business travelers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1551776235-dde6d482980b",
    },
    price: 1200,
    location: "Surat",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [72.8311, 21.1702],
    },
  },
  {
    title: "Beach Stay in Diu",
    description: "Relax near the beach with beautiful sea views in Diu.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    price: 3500,
    location: "Diu",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [70.9874, 20.7144],
    },
  },
];

module.exports = { data: sampleListings };
