// data/products.js

const products = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    category: "Smartphone",
    brand: "Apple",
    price: 1199,
    originalPrice: 1299,
    rating: 4.8,
    reviews: 245,
    inStock: true,
    sku: "IPH15PM-256-BLK",
    images: [
      "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=800&q=80",
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&q=80",
      "https://images.unsplash.com/photo-1592286927505-ed856c2c76e5?w=800&q=80",
      "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=800&q=80"
    ],
    colors: ["Space Black", "Silver", "Gold", "Deep Purple"],
    storageOptions: ["128GB", "256GB", "512GB", "1TB"],
    description: "The iPhone 15 Pro Max features a stunning titanium design, powerful A17 Pro chip, and advanced camera system. Experience the ultimate in smartphone technology with industry-leading performance and battery life.",
    features: [
      "A17 Pro chip with 6-core CPU",
      "6.7-inch Super Retina XDR display",
      "Pro camera system (48MP Main, 12MP Ultra Wide, 12MP Telephoto)",
      "Up to 29 hours video playback",
      "Titanium design with Ceramic Shield front",
      "Action button for quick access",
      "5G capable",
      "Face ID for secure authentication"
    ],
    specifications: {
      Display: '6.7" Super Retina XDR, 2796 x 1290 pixels',
      Processor: "A17 Pro chip",
      RAM: "8GB",
      Camera: "48MP Main + 12MP Ultra Wide + 12MP Telephoto",
      Battery: "4422 mAh",
      OS: "iOS 17",
      Connectivity: "5G, Wi-Fi 6E, Bluetooth 5.3",
      Dimensions: "159.9 x 76.7 x 8.25 mm",
      Weight: "221g"
    }
  },
  {
    id: 2,
    name: "MacBook Pro 14\"",
    category: "Laptop",
    brand: "Apple",
    price: 1999,
    originalPrice: 2199,
    rating: 4.9,
    reviews: 189,
    inStock: true,
    sku: "MBP14-512-SG",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80"
    ],
    colors: ["Space Gray", "Silver"],
    storageOptions: ["512GB", "1TB", "2TB"],
    description: "MacBook Pro 14-inch with M3 Pro chip delivers exceptional performance for professionals. Features stunning Liquid Retina XDR display and all-day battery life.",
    features: [
      "M3 Pro chip for incredible performance",
      "14.2-inch Liquid Retina XDR display",
      "Up to 18 hours battery life",
      "Advanced thermal system",
      "Three Thunderbolt 4 ports",
      "SDXC card slot",
      "MagSafe 3 charging",
      "1080p FaceTime HD camera"
    ],
    specifications: {
      Display: '14.2" Liquid Retina XDR, 3024 x 1964 pixels',
      Processor: "Apple M3 Pro chip",
      RAM: "18GB unified memory",
      Storage: "512GB SSD",
      Battery: "Up to 18 hours",
      OS: "macOS Sonoma",
      Connectivity: "Wi-Fi 6E, Bluetooth 5.3",
      Dimensions: "31.26 x 22.12 x 1.55 cm",
      Weight: "1.6 kg"
    }
  },
  {
    id: 3,
    name: "Apple Watch Ultra 2",
    category: "Smartwatch",
    brand: "Apple",
    price: 799,
    originalPrice: 899,
    rating: 4.7,
    reviews: 312,
    inStock: true,
    sku: "AWU2-49-TIT",
    images: [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&q=80"
    ],
    colors: ["Titanium"],
    storageOptions: [],
    description: "The most rugged and capable Apple Watch. Features a 49mm titanium case, precision dual-frequency GPS, and up to 36 hours of battery life.",
    features: [
      "49mm aerospace-grade titanium case",
      "Always-On Retina display (3000 nits)",
      "Precision dual-frequency GPS",
      "Water resistant to 100m",
      "Depth gauge and water temperature sensor",
      "Action button for quick controls",
      "Up to 36 hours battery life",
      "Advanced health and fitness features"
    ],
    specifications: {
      Display: '1.92" Always-On Retina LTPO OLED',
      Processor: "Apple S9 SiP",
      Connectivity: "GPS + Cellular, Wi-Fi, Bluetooth 5.3",
      WaterResistance: "100m (WR100)",
      Battery: "Up to 36 hours",
      Dimensions: "49 x 44 x 14.4 mm",
      Weight: "61.4g"
    }
  },
  {
    id: 4,
    name: "AirPods Pro (2nd Gen)",
    category: "Audio",
    brand: "Apple",
    price: 249,
    originalPrice: 279,
    rating: 4.6,
    reviews: 428,
    inStock: true,
    sku: "APP2-USB-C",
    images: [
      "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=800&q=80"
    ],
    colors: ["White"],
    storageOptions: [],
    description: "Rebuilt from the sound up with Apple's H2 chip. Experience richer audio and next-level Active Noise Cancellation. Now with USB-C charging.",
    features: [
      "Apple H2 chip for superior audio",
      "Up to 2x more Active Noise Cancellation",
      "Adaptive Audio",
      "Personalized Spatial Audio",
      "Conversation Awareness",
      "USB-C charging case",
      "Up to 6 hours listening time",
      "Precision Finding with U1 chip"
    ],
    specifications: {
      Chip: "Apple H2",
      Battery: "Up to 6 hours (ANC on)",
      Charging: "USB-C, MagSafe, Wireless",
      WaterResistance: "IPX4 (earbuds and case)",
      Connectivity: "Bluetooth 5.3",
      Weight: "5.3g per earbud"
    }
  },
  {
    id: 5,
    name: "iPad Pro 12.9\"",
    category: "Tablet",
    brand: "Apple",
    price: 1099,
    originalPrice: 1199,
    rating: 4.8,
    reviews: 167,
    inStock: true,
    sku: "IPP129-256-SG",
    images: [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80"
    ],
    colors: ["Space Gray", "Silver"],
    storageOptions: ["128GB", "256GB", "512GB", "1TB", "2TB"],
    description: "The ultimate iPad experience with M2 chip. Featuring stunning Liquid Retina XDR display and support for Apple Pencil Pro.",
    features: [
      "M2 chip with 8-core CPU",
      "12.9-inch Liquid Retina XDR display",
      "ProMotion technology (120Hz)",
      "12MP Wide and 10MP Ultra Wide cameras",
      "Face ID for secure authentication",
      "Thunderbolt / USB 4 port",
      "Support for Apple Pencil Pro",
      "Magic Keyboard compatible"
    ],
    specifications: {
      Display: '12.9" Liquid Retina XDR, 2732 x 2048 pixels',
      Processor: "Apple M2 chip",
      RAM: "8GB",
      Camera: "12MP Wide + 10MP Ultra Wide",
      Battery: "Up to 10 hours",
      OS: "iPadOS 17",
      Connectivity: "Wi-Fi 6E, Bluetooth 5.3",
      Dimensions: "280.6 x 214.9 x 6.4 mm",
      Weight: "682g"
    }
  },
  {
    id: 6,
    name: "Magic Keyboard",
    category: "Accessories",
    brand: "Apple",
    price: 149,
    originalPrice: 179,
    rating: 4.5,
    reviews: 203,
    inStock: true,
    sku: "MK-BLK-US",
    images: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80"
    ],
    colors: ["Black", "White"],
    storageOptions: [],
    description: "Magic Keyboard with Touch ID delivers a remarkably comfortable and precise typing experience. Pairs automatically with your Mac.",
    features: [
      "Wireless and rechargeable",
      "Touch ID for secure unlock",
      "Scissor mechanism with 1mm travel",
      "Extended layout with function keys",
      "USB-C to Lightning cable included",
      "Works with Mac with Apple silicon",
      "Multi-device support",
      "Up to 1 month battery life"
    ],
    specifications: {
      Connectivity: "Bluetooth",
      Compatibility: "Mac with Apple silicon",
      Battery: "Built-in rechargeable lithium-ion",
      Charging: "Lightning port",
      Dimensions: "27.9 x 11.49 x 1.09 cm",
      Weight: "243g"
    }
  },
  {
    id: 7,
    name: "Samsung Galaxy S24 Ultra",
    category: "Smartphone",
    brand: "Samsung",
    price: 1199,
    originalPrice: 1299,
    rating: 4.7,
    reviews: 276,
    inStock: true,
    sku: "SGS24U-256-BLK",
    images: [
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800&q=80"
    ],
    colors: ["Phantom Black", "Cream", "Gray", "Violet"],
    storageOptions: ["256GB", "512GB", "1TB"],
    description: "Galaxy S24 Ultra with built-in Galaxy AI. The ultimate smartphone experience with S Pen, 200MP camera, and all-day battery.",
    features: [
      "Snapdragon 8 Gen 3 processor",
      "6.8-inch Dynamic AMOLED 2X display",
      "200MP main camera with AI enhancements",
      "Built-in S Pen",
      "5000mAh battery with fast charging",
      "Titanium frame design",
      "IP68 water resistance",
      "Samsung DeX support"
    ],
    specifications: {
      Display: '6.8" Dynamic AMOLED 2X, 3120 x 1440 pixels',
      Processor: "Snapdragon 8 Gen 3",
      RAM: "12GB",
      Camera: "200MP Main + 12MP Ultra Wide + 10MP Telephoto (3x) + 10MP Telephoto (10x)",
      Battery: "5000 mAh",
      OS: "Android 14 with One UI 6.1",
      Connectivity: "5G, Wi-Fi 7, Bluetooth 5.3",
      Dimensions: "162.3 x 79 x 8.6 mm",
      Weight: "232g"
    }
  },
  {
    id: 8,
    name: "Dell XPS 15",
    category: "Laptop",
    brand: "Dell",
    price: 1699,
    originalPrice: 1899,
    rating: 4.6,
    reviews: 189,
    inStock: true,
    sku: "DXPS15-512-PLT",
    images: [
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&q=80"
    ],
    colors: ["Platinum Silver", "Graphite"],
    storageOptions: ["512GB", "1TB", "2TB"],
    description: "Dell XPS 15 combines power and portability. Features Intel 13th Gen processors and NVIDIA GeForce RTX graphics for creators and professionals.",
    features: [
      "Intel Core i7-13700H processor",
      "15.6-inch InfinityEdge display",
      "NVIDIA GeForce RTX 4060",
      "Up to 12 hours battery life",
      "Precision touchpad",
      "Killer Wi-Fi 6E",
      "Dual fans cooling system",
      "Carbon fiber palm rest"
    ],
    specifications: {
      Display: '15.6" FHD+, 1920 x 1200 pixels',
      Processor: "Intel Core i7-13700H",
      RAM: "16GB DDR5",
      GPU: "NVIDIA GeForce RTX 4060 6GB",
      Storage: "512GB NVMe SSD",
      Battery: "86Wh, up to 12 hours",
      OS: "Windows 11 Pro",
      Connectivity: "Wi-Fi 6E, Bluetooth 5.2",
      Dimensions: "344.7 x 230.1 x 18 mm",
      Weight: "1.86 kg"
    }
  },
  {
    id: 9,
    name: "Samsung Galaxy Watch 6",
    category: "Smartwatch",
    brand: "Samsung",
    price: 349,
    originalPrice: 399,
    rating: 4.5,
    reviews: 234,
    inStock: true,
    sku: "SGW6-44-BLK",
    images: [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&q=80"
    ],
    colors: ["Black", "Silver", "Gold"],
    storageOptions: [],
    description: "Samsung Galaxy Watch6 with advanced health monitoring. Features improved sensors, longer battery life, and seamless integration with Galaxy devices.",
    features: [
      "Advanced sleep tracking",
      "Body composition analysis",
      "ECG and blood pressure monitoring",
      "Fall detection",
      "Always-On Display",
      "5ATM + IP68 water resistance",
      "Wireless charging",
      "Bixby voice assistant"
    ],
    specifications: {
      Display: '1.5" Super AMOLED',
      Processor: "Exynos W930",
      RAM: "2GB",
      Storage: "16GB",
      Battery: "425mAh, up to 40 hours",
      OS: "Wear OS 4 with One UI Watch 5",
      Connectivity: "Bluetooth 5.3, Wi-Fi, NFC",
      WaterResistance: "5ATM + IP68",
      Dimensions: "44 x 43.3 x 9 mm",
      Weight: "33.3g"
    }
  },
  {
    id: 10,
    name: "Sony WH-1000XM5",
    category: "Audio",
    brand: "Sony",
    price: 399,
    originalPrice: 449,
    rating: 4.9,
    reviews: 521,
    inStock: true,
    sku: "SONYWH1000XM5-BLK",
    images: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80"
    ],
    colors: ["Black", "Silver"],
    storageOptions: [],
    description: "Industry-leading noise canceling with Auto NC Optimizer. Premium sound quality with 30mm drivers and LDAC support for Hi-Res audio.",
    features: [
      "Industry-leading noise cancellation",
      "30mm driver units",
      "8 microphones for crystal clear calls",
      "Up to 30 hours battery life",
      "Multi-point connection",
      "Speak-to-Chat technology",
      "Quick Attention Mode",
      "Carrying case included"
    ],
    specifications: {
      Driver: "30mm",
      Battery: "Up to 30 hours (ANC on)",
      Charging: "USB-C, Quick charge (3 min = 3 hours)",
      Connectivity: "Bluetooth 5.2, NFC, 3.5mm jack",
      Codec: "LDAC, AAC, SBC",
      Weight: "250g",
      Folding: "Yes, swivel design"
    }
  },
  {
    id: 11,
    name: "Logitech MX Master 3S",
    category: "Accessories",
    brand: "Logitech",
    price: 99,
    originalPrice: 129,
    rating: 4.8,
    reviews: 456,
    inStock: true,
    sku: "LGMXM3S-BLK",
    images: [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80"
    ],
    colors: ["Graphite", "Pale Gray"],
    storageOptions: [],
    description: "Logitech's most advanced mouse. 8K DPI sensor, quiet clicks, and multi-device connectivity make it perfect for productivity professionals.",
    features: [
      "8000 DPI sensor",
      "Quiet clicks (-90% noise)",
      "MagSpeed Electromagnetic scrolling",
      "USB-C quick charging",
      "Up to 70 days on full charge",
      "Multi-device (up to 3 devices)",
      "Customizable buttons",
      "Ergonomic design"
    ],
    specifications: {
      Sensor: "Darkfield 8000 DPI",
      Connectivity: "Bluetooth, USB receiver",
      Battery: "Up to 70 days",
      Charging: "USB-C",
      Buttons: "7 customizable",
      Compatibility: "Windows, macOS, Linux, iPadOS",
      Dimensions: "124.9 x 84.3 x 51 mm",
      Weight: "141g"
    }
  },
  {
    id: 12,
    name: "HP Spectre x360",
    category: "Laptop",
    brand: "HP",
    price: 1499,
    originalPrice: 1699,
    rating: 4.4,
    reviews: 178,
    inStock: false,
    sku: "HPSX360-512-NS",
    images: [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80"
    ],
    colors: ["Nightfall Black", "Natural Silver"],
    storageOptions: ["512GB", "1TB"],
    description: "Premium 2-in-1 convertible laptop with gem-cut design. Intel Evo platform with 13.5-inch 3:2 display perfect for productivity.",
    features: [
      "Intel Core i7-1355U (12th Gen)",
      "13.5-inch 3:2 WUXGA+ touchscreen",
      "360-degree hinge design",
      "HP Rechargeable MPP2.0 Tilt Pen included",
      "Thunderbolt 4 ports",
      "Bang & Olufsen audio",
      "IR camera with Windows Hello",
      "Up to 16 hours battery"
    ],
    specifications: {
      Display: '13.5" WUXGA+, 1920 x 1280 pixels, touch',
      Processor: "Intel Core i7-1355U",
      RAM: "16GB LPDDR4x",
      Storage: "512GB PCIe NVMe SSD",
      Battery: "66Wh, up to 16 hours",
      OS: "Windows 11 Home",
      Connectivity: "Wi-Fi 6E, Bluetooth 5.3",
      Dimensions: "298.5 x 220.4 x 17 mm",
      Weight: "1.35 kg"
    }
  },
  {
    id: 13,
    name: "Xiaomi 13 Pro",
    category: "Smartphone",
    brand: "Xiaomi",
    price: 899,
    originalPrice: 999,
    rating: 4.6,
    reviews: 312,
    inStock: true,
    sku: "XM13P-256-BLK",
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80"
    ],
    colors: ["Ceramic Black", "Ceramic White", "Flora Green"],
    storageOptions: ["256GB", "512GB"],
    description: "Xiaomi 13 Pro with Leica cameras. Snapdragon 8 Gen 2 processor and 120W HyperCharge for ultimate flagship experience.",
    features: [
      "Snapdragon 8 Gen 2",
      "6.73-inch AMOLED display (120Hz)",
      "Leica triple camera system",
      "50MP main camera with 1-inch sensor",
      "4820mAh battery",
      "120W wired + 50W wireless charging",
      "IP68 water resistance",
      "Dolby Atmos speakers"
    ],
    specifications: {
      Display: '6.73" AMOLED, 3200 x 1440 pixels, 120Hz',
      Processor: "Snapdragon 8 Gen 2",
      RAM: "12GB",
      Camera: "50MP Main (1-inch) + 50MP Ultra Wide + 50MP Telephoto",
      Battery: "4820 mAh",
      OS: "Android 13 with MIUI 14",
      Connectivity: "5G, Wi-Fi 7, Bluetooth 5.3",
      Dimensions: "162.9 x 74.6 x 8.38 mm",
      Weight: "229g"
    }
  },
  {
    id: 14,
    name: "iPad Air 5th Gen",
    category: "Tablet",
    brand: "Apple",
    price: 599,
    originalPrice: 649,
    rating: 4.7,
    reviews: 289,
    inStock: true,
    sku: "IPA5-256-BL",
    images: [
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=800&q=80"
    ],
    colors: ["Space Gray", "Starlight", "Pink", "Purple", "Blue"],
    storageOptions: ["64GB", "256GB"],
    description: "Serious performance in a thin and light design. M1 chip brings breakthrough performance to iPad Air with all-day battery life.",
    features: [
      "M1 chip for powerful performance",
      "10.9-inch Liquid Retina display",
      "12MP Wide camera",
      "12MP Ultra Wide front camera with Center Stage",
      "Touch ID in top button",
      "USB-C connector",
      "Apple Pencil (2nd gen) support",
      "Magic Keyboard compatible"
    ],
    specifications: {
      Display: '10.9" Liquid Retina, 2360 x 1640 pixels',
      Processor: "Apple M1 chip",
      RAM: "8GB",
      Camera: "12MP Wide rear, 12MP Ultra Wide front",
      Battery: "Up to 10 hours",
      OS: "iPadOS 17",
      Connectivity: "Wi-Fi 6, Bluetooth 5.0",
      Dimensions: "247.6 x 178.5 x 6.1 mm",
      Weight: "461g"
    }
  },
  {
    id: 15,
    name: "Bose QuietComfort Earbuds II",
    category: "Audio",
    brand: "Bose",
    price: 279,
    originalPrice: 299,
    rating: 4.5,
    reviews: 367,
    inStock: true,
    sku: "BQCE2-BLK",
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80"
    ],
    colors: ["Triple Black", "Soapstone"],
    storageOptions: [],
    description: "Personalized noise cancellation and sound. CustomTune technology auto-adjusts to your ears for best-in-class noise cancellation.",
    features: [
      "Personalized noise cancellation",
      "CustomTune sound calibration",
      "Aware Mode with ActiveSense",
      "Up to 6 hours battery (24 with case)",
      "IPX4 water resistance",
      "Touch controls",
      "Bluetooth 5.3",
      "Bose Music app"
    ],
    specifications: {
      Battery: "6 hours (24 hours with case)",
      Charging: "USB-C, Qi wireless",
      Connectivity: "Bluetooth 5.3",
      WaterResistance: "IPX4",
      Codec: "AAC, SBC",
      Weight: "6.24g per earbud",
      CaseWeight: "59.8g"
    }
  },
  {
    id: 16,
    name: "Anker USB-C Hub",
    category: "Accessories",
    brand: "Anker",
    price: 49,
    originalPrice: 59,
    rating: 4.6,
    reviews: 512,
    inStock: true,
    sku: "ANK-USBC7-GRY",
    images: [
      "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=800&q=80"
    ],
    colors: ["Space Gray"],
    storageOptions: [],
    description: "7-in-1 USB-C hub with 4K HDMI output. Essential adapter for MacBook and laptops with versatile connectivity options.",
    features: [
      "4K HDMI output (30Hz)",
      "2x USB 3.0 ports",
      "SD and microSD card readers",
      "USB-C PD charging (100W)",
      "Gigabit Ethernet port",
      "Aluminum construction",
      "Plug and play",
      "LED indicator"
    ],
    specifications: {
      Ports: "HDMI, 2x USB 3.0, SD, microSD, USB-C PD, Ethernet",
      HDMI: "4K@30Hz",
      USB: "USB 3.0 (5Gbps)",
      PowerDelivery: "100W pass-through",
      Compatibility: "MacBook, Windows, ChromeOS",
      Dimensions: "110 x 48 x 15 mm",
      Weight: "71g"
    }
  },
  {
    id: 17,
    name: "OnePlus 11",
    category: "Smartphone",
    brand: "OnePlus",
    price: 699,
    originalPrice: 799,
    rating: 4.6,
    reviews: 298,
    inStock: true,
    sku: "OP11-256-BLK",
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80"
    ],
    colors: ["Titan Black", "Eternal Green"],
    storageOptions: ["128GB", "256GB"],
    description: "OnePlus 11 with Hasselblad Camera for Mobile. Snapdragon 8 Gen 2 and 100W SUPERVOOC charging for flagship killer performance.",
    features: [
      "Snapdragon 8 Gen 2",
      "6.7-inch AMOLED display (120Hz)",
      "Hasselblad Camera system",
      "50MP main camera with Sony IMX890",
      "5000mAh battery",
      "100W SUPERVOOC fast charging",
      "Alert Slider",
      "OxygenOS 13"
    ],
    specifications: {
      Display: '6.7" AMOLED, 3216 x 1440 pixels, 120Hz',
      Processor: "Snapdragon 8 Gen 2",
      RAM: "16GB",
      Camera: "50MP Main + 48MP Ultra Wide + 32MP Telephoto",
      Battery: "5000 mAh",
      OS: "Android 13 with OxygenOS 13",
      Connectivity: "5G, Wi-Fi 7, Bluetooth 5.3",
      Dimensions: "163.1 x 74.1 x 8.53 mm",
      Weight: "205g"
    }
  },
  {
    id: 18,
    name: "Lenovo ThinkPad X1 Carbon",
    category: "Laptop",
    brand: "Lenovo",
    price: 1599,
    originalPrice: 1799,
    rating: 4.7,
    reviews: 234,
    inStock: true,
    sku: "LEN-X1C11-512",
    images: [
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&q=80"
    ],
    colors: ["Black"],
    storageOptions: ["512GB", "1TB"],
    description: "Business ultrabook redefined. 11th Gen Intel processors, MIL-STD-810H tested durability, and legendary ThinkPad keyboard.",
    features: [
      "Intel Core i7-1165G7",
      "14-inch FHD+ display",
      "MIL-STD-810H tested",
      "TrackPoint and glass touchpad",
      "Rapid Charge (80% in 1 hour)",
      "Dolby Atmos speakers",
      "IR camera with PrivacyShutter",
      "Up to 16 hours battery"
    ],
    specifications: {
      Display: '14" FHD+, 1920 x 1200 pixels',
      Processor: "Intel Core i7-1165G7",
      RAM: "16GB LPDDR4x",
      Storage: "512GB PCIe NVMe SSD",
      Battery: "57Wh, up to 16 hours",
      OS: "Windows 11 Pro",
      Connectivity: "Wi-Fi 6, Bluetooth 5.2",
      Dimensions: "315.6 x 222.5 x 14.9 mm",
      Weight: "1.13 kg"
    }
  },
  {
    id: 19,
    name: "Samsung Galaxy Buds2 Pro",
    category: "Audio",
    brand: "Samsung",
    price: 229,
    originalPrice: 249,
    rating: 4.5,
    reviews: 389,
    inStock: true,
    sku: "SGBP2-GRA",
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80"
    ],
    colors: ["Graphite", "White", "Bora Purple"],
    storageOptions: [],
    description: "Premium true wireless earbuds with intelligent ANC. 360 Audio and seamless switching between Galaxy devices.",
    features: [
      "Intelligent Active Noise Cancellation",
      "360 Audio with Direct Multi-Channel",
      "Voice Detect",
      "IPX7 water resistance",
      "Up to 8 hours playback (ANC off)",
      "Wireless charging case",
      "Touch controls",
      "Ambient Sound mode"
    ],
    specifications: {
      Battery: "5 hours (ANC on), 8 hours (ANC off)",
      Charging: "USB-C, Qi wireless",
      Connectivity: "Bluetooth 5.3",
      WaterResistance: "IPX7",
      Codec: "SSC, AAC, Scalable",
      Weight: "5.5g per earbud",
      CaseWeight: "43.4g"
    }
  },
  {
    id: 20,
    name: "Microsoft Surface Pro 9",
    category: "Tablet",
    brand: "Microsoft",
    price: 999,
    originalPrice: 1099,
    rating: 4.6,
    reviews: 198,
    inStock: true,
    sku: "MSSP9-256-PLT",
    images: [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80"
    ],
    colors: ["Platinum", "Graphite", "Sapphire", "Forest"],
    storageOptions: ["128GB", "256GB", "512GB", "1TB"],
    description: "Laptop versatility meets tablet portability. Intel 12th Gen processors with all-day battery and stunning PixelSense display.",
    features: [
      "Intel Core i5-1235U (12th Gen)",
      "13-inch PixelSense touchscreen",
      "Detachable keyboard (sold separately)",
      "Surface Pen support",
      "Dual Thunderbolt 4 ports",
      "Windows 11 Pro",
      "Up to 15.5 hours battery",
      "Dolby Atmos audio"
    ],
    specifications: {
      Display: '13" PixelSense, 2880 x 1920 pixels, 120Hz',
      Processor: "Intel Core i5-1235U",
      RAM: "8GB LPDDR5",
      Storage: "256GB SSD",
      Battery: "Up to 15.5 hours",
      OS: "Windows 11 Pro",
      Connectivity: "Wi-Fi 6E, Bluetooth 5.1",
      Dimensions: "287 x 209 x 9.3 mm",
      Weight: "879g"
    }
  }
];

export default products;
