export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;

  description?: string;
  category: string;
  brand?: string;
  rating?: number;
  stock: number;
  isFeatured?: boolean;
  tags?: string[];
  releaseDate?: string; // ISO string e.g. "2023-05-10"
  discountPercent?: number;
}

export let products: Product[] = [
  {
    id: '1',
    name: 'Smartphone',
    price: 699,
    imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9',
    description: 'Latest smartphone with OLED display and fast processor.',
    category: 'Electronics',
    brand: 'TechCorp',
    rating: 4.5,
    stock: 25,
    isFeatured: true,
    tags: ['smartphone', 'mobile', 'tech'],
    releaseDate: '2023-05-10',
    discountPercent: 10,
  },
  {
    id: '2',
    name: 'Laptop Pro',
    price: 1299,
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    description: 'Powerful laptop for professionals with retina display.',
    category: 'Computers',
    brand: 'CompuTech',
    rating: 4.8,
    stock: 10,
    tags: ['laptop', 'computer', 'pro'],
    releaseDate: '2022-11-15',
  },
  {
    id: '3',
    name: 'Wireless Headphones',
    price: 199,
    imageUrl: 'https://images.unsplash.com/photo-1580894908361-10682d4f45aa',
    description: 'Noise-canceling wireless headphones with long battery life.',
    category: 'Audio',
    brand: 'SoundMax',
    rating: 4.2,
    stock: 40,
    tags: ['wireless', 'headphones', 'audio'],
    releaseDate: '2023-01-20',
    discountPercent: 5,
  },
  {
    id: '4',
    name: 'Smartwatch',
    price: 299,
    imageUrl: 'https://images.unsplash.com/photo-1513151233558-d860c5398176',
    description: 'Stylish smartwatch with health tracking features.',
    category: 'Wearables',
    brand: 'TechCorp',
    rating: 4.0,
    stock: 30,
    isFeatured: true,
    tags: ['smartwatch', 'wearable', 'fitness'],
    releaseDate: '2022-12-05',
  },
  {
    id: '5',
    name: 'Bluetooth Speaker',
    price: 149,
    imageUrl: 'https://images.unsplash.com/photo-1495121605193-b116b5b9c79e',
    description: 'Portable Bluetooth speaker with rich sound.',
    category: 'Audio',
    brand: 'SoundMax',
    rating: 4.3,
    stock: 50,
    tags: ['speaker', 'bluetooth', 'portable'],
    releaseDate: '2023-03-10',
  },
  {
    id: '6',
    name: 'Gaming Console',
    price: 499,
    imageUrl: 'https://images.unsplash.com/photo-1587202372775-600b8ef5b392',
    description: 'Next-gen gaming console with stunning graphics.',
    category: 'Gaming',
    brand: 'GameX',
    rating: 4.7,
    stock: 15,
    isFeatured: true,
    tags: ['gaming', 'console', 'entertainment'],
    releaseDate: '2023-04-01',
  },
  {
    id: '7',
    name: '4K Monitor',
    price: 399,
    imageUrl: 'https://images.unsplash.com/photo-1588247896092-5a0b86efa517',
    description: 'Ultra HD 4K monitor for professionals and gamers.',
    category: 'Computers',
    brand: 'VisionTech',
    rating: 4.4,
    stock: 22,
    tags: ['monitor', '4k', 'display'],
    releaseDate: '2022-10-25',
  },
  {
    id: '8',
    name: 'Mechanical Keyboard',
    price: 129,
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8',
    description: 'Mechanical keyboard with customizable RGB lighting.',
    category: 'Accessories',
    brand: 'KeyMasters',
    rating: 4.6,
    stock: 60,
    tags: ['keyboard', 'mechanical', 'gaming'],
    releaseDate: '2023-02-15',
  },
  {
    id: '9',
    name: 'Gaming Mouse',
    price: 79,
    imageUrl: 'https://images.unsplash.com/photo-1555617117-08fda01cac11',
    description: 'Ergonomic gaming mouse with high precision sensor.',
    category: 'Accessories',
    brand: 'KeyMasters',
    rating: 4.5,
    stock: 55,
    tags: ['mouse', 'gaming', 'accessories'],
    releaseDate: '2022-09-30',
  },
  {
    id: '10',
    name: 'USB-C Hub',
    price: 49,
    imageUrl: 'https://images.unsplash.com/photo-1587825140509-11a1b68e84be',
    description: 'Compact USB-C hub with multiple ports for connectivity.',
    category: 'Accessories',
    brand: 'Connectify',
    rating: 4.1,
    stock: 70,
    tags: ['usb-c', 'hub', 'connectivity'],
    releaseDate: '2023-01-10',
  },
  {
    id: '11',
    name: 'Portable Charger',
    price: 39,
    imageUrl: 'https://images.unsplash.com/photo-1536305030429-64d4fdff09d1',
    description: 'High capacity portable charger for devices on the go.',
    category: 'Accessories',
    brand: 'PowerMax',
    rating: 4.3,
    stock: 80,
    tags: ['charger', 'portable', 'battery'],
    releaseDate: '2022-11-05',
  },
  {
    id: '12',
    name: 'Action Camera',
    price: 299,
    imageUrl: 'https://images.unsplash.com/photo-1560741711-7d3c654fe2fd',
    description: 'Durable action camera with 4K recording capability.',
    category: 'Photography',
    brand: 'CaptureIt',
    rating: 4.4,
    stock: 25,
    tags: ['camera', 'action', '4k'],
    releaseDate: '2023-03-15',
  },
  {
    id: '13',
    name: 'Drone',
    price: 999,
    imageUrl: 'https://images.unsplash.com/photo-1504198266289-165cca1f1d0f',
    description: 'Advanced drone with camera and GPS stabilization.',
    category: 'Photography',
    brand: 'SkyHigh',
    rating: 4.7,
    stock: 12,
    isFeatured: true,
    tags: ['drone', 'camera', 'gps'],
    releaseDate: '2022-12-20',
  },
  {
    id: '14',
    name: 'VR Headset',
    price: 599,
    imageUrl: 'https://images.unsplash.com/photo-1582520026554-00cd7d4692a3',
    description: 'Immersive VR headset with high resolution display.',
    category: 'Gaming',
    brand: 'VirtuaTech',
    rating: 4.6,
    stock: 20,
    tags: ['vr', 'headset', 'gaming'],
    releaseDate: '2023-01-25',
  },
  {
    id: '15',
    name: 'Smart Home Hub',
    price: 129,
    imageUrl: 'https://images.unsplash.com/photo-1550288121-453da0f1af93',
    description: 'Control all your smart home devices with one hub.',
    category: 'Smart Home',
    brand: 'HomeSync',
    rating: 4.2,
    stock: 35,
    tags: ['smart home', 'hub', 'automation'],
    releaseDate: '2022-10-10',
  },
  {
    id: '16',
    name: 'Noise-Canceling Earbuds',
    price: 249,
    imageUrl: 'https://images.unsplash.com/photo-1599516091438-c960bb05a570',
    description: 'Compact earbuds with active noise cancellation.',
    category: 'Audio',
    brand: 'SoundMax',
    rating: 4.5,
    stock: 45,
    tags: ['earbuds', 'noise-canceling', 'audio'],
    releaseDate: '2023-02-28',
  },
  {
    id: '17',
    name: 'Portable Projector',
    price: 449,
    imageUrl: 'https://images.unsplash.com/photo-1590642913208-71e4a58013bb',
    description: 'Lightweight projector for movies and presentations.',
    category: 'Electronics',
    brand: 'VisionTech',
    rating: 4.3,
    stock: 18,
    tags: ['projector', 'portable', 'video'],
    releaseDate: '2022-11-22',
  },
  {
    id: '18',
    name: 'Smart Doorbell',
    price: 179,
    imageUrl: 'https://images.unsplash.com/photo-1604617571047-1697a88f1fae',
    description: 'Smart doorbell with camera and two-way audio.',
    category: 'Smart Home',
    brand: 'HomeSync',
    rating: 4.1,
    stock: 40,
    tags: ['doorbell', 'smart home', 'security'],
    releaseDate: '2023-03-05',
  },
  {
    id: '19',
    name: 'Robot Vacuum',
    price: 399,
    imageUrl: 'https://images.unsplash.com/photo-1586949967724-e892e4b73593',
    description: 'Automated robot vacuum with smart mapping.',
    category: 'Smart Home',
    brand: 'CleanBot',
    rating: 4.4,
    stock: 28,
    isFeatured: true,
    tags: ['vacuum', 'robot', 'cleaning'],
    releaseDate: '2023-01-12',
  },
  {
    id: '20',
    name: 'Smart Light Bulb',
    price: 29,
    imageUrl: 'https://images.unsplash.com/photo-1580930920338-8381b02eddb9',
    description: 'Energy-efficient smart bulb with adjustable brightness.',
    category: 'Smart Home',
    brand: 'BrightLite',
    rating: 4.0,
    stock: 90,
    tags: ['light bulb', 'smart home', 'lighting'],
    releaseDate: '2023-04-05',
  },
   {
    id: '21',
    name: 'Wireless Charger',
    price: 59,
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    description: 'Fast wireless charger compatible with most smartphones.',
    category: 'Accessories',
    brand: 'ChargeIt',
    rating: 4.2,
    stock: 40,
    tags: ['charger', 'wireless', 'fast-charge'],
    releaseDate: '2023-05-01',
  },
  {
    id: '22',
    name: 'Smart Thermostat',
    price: 199,
    imageUrl: 'https://images.unsplash.com/photo-1572120360610-d971b9b9a991',
    description: 'Smart thermostat to control your home temperature remotely.',
    category: 'Smart Home',
    brand: 'ClimateControl',
    rating: 4.6,
    stock: 25,
    tags: ['thermostat', 'smart home', 'climate'],
    releaseDate: '2022-12-01',
  },
  {
    id: '23',
    name: 'Fitness Tracker',
    price: 99,
    imageUrl: 'https://images.unsplash.com/photo-1539889705455-19c53c56e9da',
    description: 'Track your fitness goals with real-time stats and sleep monitoring.',
    category: 'Wearables',
    brand: 'FitTrack',
    rating: 4.1,
    stock: 50,
    tags: ['fitness', 'tracker', 'wearable'],
    releaseDate: '2023-02-20',
  },
  {
    id: '24',
    name: 'E-Reader',
    price: 179,
    imageUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794',
    description: 'Lightweight e-reader with glare-free screen and long battery life.',
    category: 'Electronics',
    brand: 'ReadMore',
    rating: 4.4,
    stock: 30,
    tags: ['ereader', 'books', 'electronics'],
    releaseDate: '2022-09-15',
  },
  {
    id: '25',
    name: 'Smart Security Camera',
    price: 249,
    imageUrl: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15',
    description: 'High definition smart security camera with night vision.',
    category: 'Smart Home',
    brand: 'SecureCam',
    rating: 4.7,
    stock: 18,
    isFeatured: true,
    tags: ['security', 'camera', 'smart home'],
    releaseDate: '2023-01-10',
  },
  {
    id: '26',
    name: 'Portable SSD 1TB',
    price: 149,
    imageUrl: 'https://images.unsplash.com/photo-1588345921523-436ec1f2a48b',
    description: 'Fast and compact 1TB portable SSD for your data storage needs.',
    category: 'Computers',
    brand: 'DataStore',
    rating: 4.8,
    stock: 40,
    tags: ['ssd', 'storage', 'portable'],
    releaseDate: '2023-03-30',
  },
  {
    id: '27',
    name: 'Smart Glasses',
    price: 349,
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    description: 'Innovative smart glasses with heads-up display.',
    category: 'Wearables',
    brand: 'VisionX',
    rating: 4.0,
    stock: 12,
    tags: ['smart glasses', 'wearable', 'tech'],
    releaseDate: '2023-04-12',
  },
  {
    id: '28',
    name: 'Wireless Gaming Headset',
    price: 179,
    imageUrl: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e',
    description: 'Wireless gaming headset with surround sound and noise cancellation.',
    category: 'Gaming',
    brand: 'GameX',
    rating: 4.5,
    stock: 35,
    tags: ['gaming', 'headset', 'wireless'],
    releaseDate: '2023-02-28',
  },
  {
    id: '29',
    name: '4K Action Cam',
    price: 349,
    imageUrl: 'https://images.unsplash.com/photo-1557425493-8c1082c01e3d',
    description: 'Waterproof 4K action camera for extreme sports.',
    category: 'Photography',
    brand: 'CaptureIt',
    rating: 4.6,
    stock: 20,
    tags: ['camera', 'action', '4k'],
    releaseDate: '2023-03-05',
  },
  {
    id: '30',
    name: 'Noise-Canceling Over-Ear Headphones',
    price: 299,
    imageUrl: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f',
    description: 'Premium noise-canceling over-ear headphones with rich sound.',
    category: 'Audio',
    brand: 'SoundMax',
    rating: 4.7,
    stock: 25,
    tags: ['headphones', 'noise-canceling', 'audio'],
    releaseDate: '2022-11-20',
  },
  {
    id: '31',
    name: 'Smartwatch Fitness Edition',
    price: 329,
    imageUrl: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df',
    description: 'Advanced smartwatch with heart rate monitor and GPS.',
    category: 'Wearables',
    brand: 'FitTrack',
    rating: 4.3,
    stock: 28,
    tags: ['smartwatch', 'fitness', 'wearable'],
    releaseDate: '2023-01-18',
  },
  {
    id: '32',
    name: 'Ergonomic Office Chair',
    price: 299,
    imageUrl: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    description: 'Comfortable ergonomic office chair with adjustable features.',
    category: 'Furniture',
    brand: 'ComfortSeat',
    rating: 4.5,
    stock: 18,
    tags: ['chair', 'office', 'ergonomic'],
    releaseDate: '2022-12-22',
  },
  {
    id: '33',
    name: 'Mechanical Gaming Keyboard',
    price: 159,
    imageUrl: 'https://images.unsplash.com/photo-1587202372775-600b8ef5b392',
    description: 'RGB mechanical gaming keyboard with programmable keys.',
    category: 'Accessories',
    brand: 'KeyMasters',
    rating: 4.6,
    stock: 50,
    tags: ['keyboard', 'gaming', 'mechanical'],
    releaseDate: '2023-04-01',
  },
  {
    id: '34',
    name: 'Smart LED TV 55"',
    price: 799,
    imageUrl: 'https://images.unsplash.com/photo-1503602642458-232111445657',
    description: '55 inch smart LED TV with 4K resolution and streaming apps.',
    category: 'Electronics',
    brand: 'VisionTech',
    rating: 4.7,
    stock: 15,
    tags: ['tv', 'smart tv', '4k'],
    releaseDate: '2023-05-05',
  },
  {
    id: '35',
    name: 'Bluetooth Fitness Earbuds',
    price: 89,
    imageUrl: 'https://images.unsplash.com/photo-1590080877777-1f543e5a6a63',
    description: 'Sweat-resistant Bluetooth earbuds for fitness enthusiasts.',
    category: 'Audio',
    brand: 'SoundMax',
    rating: 4.2,
    stock: 40,
    tags: ['earbuds', 'fitness', 'bluetooth'],
    releaseDate: '2023-03-10',
  },
  {
    id: '36',
    name: 'Smart Light Strip',
    price: 49,
    imageUrl: 'https://images.unsplash.com/photo-1587825140509-11a1b68e84be',
    description: 'Color changing smart light strip with app control.',
    category: 'Smart Home',
    brand: 'BrightLite',
    rating: 4.4,
    stock: 60,
    tags: ['light', 'smart home', 'led'],
    releaseDate: '2022-10-28',
  },
  {
    id: '37',
    name: 'Portable Bluetooth Speaker',
    price: 129,
    imageUrl: 'https://images.unsplash.com/photo-1495121605193-b116b5b9c79e',
    description: 'Compact and powerful portable Bluetooth speaker.',
    category: 'Audio',
    brand: 'SoundMax',
    rating: 4.3,
    stock: 55,
    tags: ['speaker', 'bluetooth', 'portable'],
    releaseDate: '2023-04-15',
  },
  {
    id: '38',
    name: 'Smart Home Smoke Detector',
    price: 99,
    imageUrl: 'https://images.unsplash.com/photo-1526470498-3eeb1a7a2898',
    description: 'Smart smoke detector with app alerts and battery backup.',
    category: 'Smart Home',
    brand: 'SecureHome',
    rating: 4.5,
    stock: 22,
    tags: ['smoke detector', 'smart home', 'security'],
    releaseDate: '2023-02-05',
  },
  {
    id: '39',
    name: 'Wireless Mechanical Keyboard',
    price: 169,
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8',
    description: 'Wireless mechanical keyboard with customizable RGB lighting.',
    category: 'Accessories',
    brand: 'KeyMasters',
    rating: 4.7,
    stock: 30,
    tags: ['keyboard', 'wireless', 'mechanical'],
    releaseDate: '2023-01-28',
  },
  {
    id: '40',
    name: 'Gaming Chair',
    price: 349,
    imageUrl: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    description: 'Comfortable gaming chair with adjustable height and lumbar support.',
    category: 'Furniture',
    brand: 'GameX',
    rating: 4.5,
    stock: 14,
    tags: ['gaming chair', 'furniture', 'comfort'],
    releaseDate: '2023-03-15',
  },
];
