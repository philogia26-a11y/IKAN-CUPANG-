// Image Cycling Helper
const getProductImage = (index) => {
    // Cycle through 26 local images provided by user
    // p1.jpeg to p26.jpeg
    const imgIndex = (index % 26) + 1; 
    return `images/p${imgIndex}.jpeg`;
};

const products = [
  // 1. Dumbo Ear Multicolor (Original)
  {
    id: 1,
    name: "Dumbo Ear Multicolor",
    price: "100000-300000",
    category: "Plakat",
    subcategory: "Dumbo Ear",
    color: "Multicolor",
    age: "4 Bulan",
    size: "M",
    image: getProductImage(0),
    description: "Ikan cupang Plakat Dumbo Ear dengan sirip dada lebar menyerupai telinga gajah. Warna multicolor yang unik.",
    isNew: true,
  },
  // 2. Plakat Multicolor Grade A (Original)
  {
    id: 2,
    name: "Bumblebee",
    price: "100000-500000",
    category: "Bumblebee",
    subcategory: "Standard",
    color: "Yellow/Black",
    age: "4.5 Bulan",
    size: "L",
    image: getProductImage(22),
    description: "Ikan cupang bumblebee dengan pola garis hitam–kuning dan cooper yang unik, warna kontras tajam, dan tampilan atraktif yang mencuri perhatian",
    isNew: true,
  },
  // 3. Barongsai (Renamed by User)
  {
    id: 3,
    name: "Barongsai",
    price: "50000-150000",
    category: "Plakat",
    subcategory: "Barongsai",
    color: "Red",
    age: "4 Bulan",
    size: "M",
    image: getProductImage(2),
    description: "Ikan cupang Plakat Barongsai dengan kombinasi warna merah putih kontras, karakter agresif, dan tampilan kokoh yang memikat.",
    isNew: false,
  },
  // 4. Yellow Base multycolor (Renamed by User)
  {
    id: 4,
    name: "Yellow Base multycolor",
    price: "50000-100000",
    category: "Yellow Base",
    subcategory: "multycolor",
    color: "Yellow",
    age: "4 Bulan",
    size: "M",
    image: getProductImage(3),
    description: "Ikan cupang Yellow Base multycolor dengan warna dasar kuning cerah dengan corak multycolor yang menarik.",
    isNew: false,
  },
  // 5. Yellow Base Multycolor (Renamed)
  {
    id: 5,
    name: "Yellow Base Multycolor",
    price: "50000-100000",
    category: "Yellow Base",
    subcategory: "Multycolor",
    color: "Yellow",
    age: "4 Bulan",
    size: "M",
    image: "images/p27.jpeg", // Custom image as per previous request
    description: "Ikan cupang Yellow Base multycolor dengan warna dasar kuning cerah dengan corak multycolor yang menarik.",
    isNew: true,
  },
  // 6. Halfmoon Dumbo Ear Multycolor (Renamed)
  {
    id: 6,
    name: "Halfmoon Dumbo Ear Multycolor",
    price: "100000-500000",
    category: "Halfmoon",
    subcategory: "Dumbo Ear",
    color: "Multicolor",
    age: "4 Bulan",
    size: "M",
    image: getProductImage(5),
    description: "Ikan cupang halfmoon dumbo ear multycolor dengan sirip lebar elegan, warna beragam cerah, dan tampilan mewah yang memikat.",
    isNew: true,
  },
  // 7. Yellow Base Multycolor (Renamed)
  { 
    id: 7, 
    name: "Yellow Base Multycolor", 
    price: "50000-100000", 
    category: "Yellow Base", 
    subcategory: "Multycolor", 
    color: "Yellow", 
    age: "3.5 Bulan", 
    size: "M", 
    image: getProductImage(6), 
    description: "Ikan cupang Yellow Base multycolor dengan warna dasar kuning cerah dengan corak multycolor yang menarik.", 
    isNew: false 
  },
  // 8. Halfmoon Dumbo Ear Multycolor (Renamed)
  { 
    id: 8, 
    name: "Halfmoon Dumbo Ear Multycolor", 
    price: "100000-500000", 
    category: "Halfmoon", 
    subcategory: "Dumbo Ear", 
    color: "Multicolor", 
    age: "3.5 Bulan", 
    size: "M", 
    image: getProductImage(7), 
    description: "Ikan cupang halfmoon dumbo ear multycolor dengan sirip lebar elegan, warna beragam cerah, dan tampilan mewah yang memikat.", 
    isNew: false 
  },
  // 9. Halfmoon Dumbo Ear Nemo (Renamed)
  { 
    id: 9, 
    name: "Halfmoon Dumbo Ear Nemo", 
    price: "100000-400000", 
    category: "Halfmoon", 
    subcategory: "Nemo", 
    color: "Nemo", 
    age: "4 Bulan", 
    size: "M", 
    image: getProductImage(8), 
    description: "Ikan cupang halfmoon dumbo ear nemo dengan sirip lebar elegan, warna dominan orange yang cerah, dan tampilan mewah yang memikat", 
    isNew: true 
  },
  // 10. Bumblebee (Renamed)
  { 
    id: 10, 
    name: "Bumblebee", 
    price: "100000-500000", 
    category: "Bumblebee", 
    subcategory: "Standard", 
    color: "Yellow/Black", 
    age: "3.5 Bulan", 
    size: "M", 
    image: getProductImage(9), 
    description: "Ikan cupang bumblebee dengan pola garis hitam–kuning dan cooper yang unik, warna kontras tajam, dan tampilan atraktif yang mencuri perhatian", 
    isNew: false 
  },
  // 11. Yellow Base Multycolor (Renamed)
  { 
    id: 11, 
    name: "Yellow Base Multycolor", 
    price: "50000-100000", 
    category: "Yellow Base", 
    subcategory: "Multycolor", 
    color: "Yellow", 
    age: "4.5 Bulan", 
    size: "L", 
    image: getProductImage(10), 
    description: "Ikan cupang Yellow Base multycolor dengan warna dasar kuning cerah dengan corak multycolor yang menarik.", 
    isNew: true 
  },
  // 12. Yellow Base Multycolor (Renamed)
  { 
    id: 12, 
    name: "Yellow Base Multycolor", 
    price: "50000-100000", 
    category: "Yellow Base", 
    subcategory: "Multycolor", 
    color: "Yellow", 
    age: "4 Bulan", 
    size: "M", 
    image: getProductImage(11), 
    description: "Ikan cupang Yellow Base multycolor dengan warna dasar kuning cerah dengan corak multycolor yang menarik.", 
    isNew: false 
  },
  // 13. Plakat Dumbo Ear Multycolor (Renamed)
  { 
    id: 13, 
    name: "Plakat Dumbo Ear Multycolor", 
    price: "100000-300000", 
    category: "Plakat", 
    subcategory: "Dumbo Ear", 
    color: "Multicolor", 
    age: "3.5 Bulan", 
    size: "M", 
    image: getProductImage(12), 
    description: "Ikan cupang Plakat Dumbo Ear dengan sirip dada lebar menyerupai telinga gajah. Warna multicolor yang unik.", 
    isNew: false 
  },
  // 14. Plakat Dumbo Ear Multycolor (Renamed)
  { 
    id: 14, 
    name: "Plakat Dumbo Ear Multycolor", 
    price: "100000-300000", 
    category: "Plakat", 
    subcategory: "Dumbo Ear", 
    color: "Multicolor", 
    age: "4 Bulan", 
    size: "M", 
    image: getProductImage(13), 
    description: "Ikan cupang Plakat Dumbo Ear dengan sirip dada lebar menyerupai telinga gajah. Warna multicolor yang unik.", 
    isNew: true 
  },
  // 15. Halfmoon Dumbo Ear Multycolor (Renamed)
  { 
    id: 15, 
    name: "Halfmoon Dumbo Ear Multycolor", 
    price: "100000-500000", 
    category: "Halfmoon", 
    subcategory: "Dumbo Ear", 
    color: "Multicolor", 
    age: "3 Bulan", 
    size: "S", 
    image: getProductImage(14), 
    description: "Ikan cupang halfmoon dumbo ear multycolor dengan sirip lebar elegan, warna beragam cerah, dan tampilan mewah yang memikat.", 
    isNew: false 
  },
  // 16. Halfmoon Dumbo Ear Multycolor (Renamed)
  { 
    id: 16, 
    name: "Halfmoon Dumbo Ear Multycolor", 
    price: "100000-500000", 
    category: "Halfmoon", 
    subcategory: "Dumbo Ear", 
    color: "Multicolor", 
    age: "4 Bulan", 
    size: "M", 
    image: getProductImage(15), 
    description: "Ikan cupang halfmoon dumbo ear multycolor dengan sirip lebar elegan, warna beragam cerah, dan tampilan mewah yang memikat.", 
    isNew: true 
  },
  // 17-21. Bumblebee (Renamed)
  { id: 17, name: "Bumblebee", price: "100000-500000", category: "Bumblebee", subcategory: "Standard", color: "Yellow/Black", age: "4 Bulan", size: "M", image: getProductImage(16), description: "Ikan cupang bumblebee dengan pola garis hitam–kuning dan cooper yang unik, warna kontras tajam, dan tampilan atraktif yang mencuri perhatian", isNew: false },
  { id: 18, name: "Bumblebee", price: "100000-500000", category: "Bumblebee", subcategory: "Standard", color: "Yellow/Black", age: "4 Bulan", size: "XL", image: getProductImage(17), description: "Ikan cupang bumblebee dengan pola garis hitam–kuning dan cooper yang unik, warna kontras tajam, dan tampilan atraktif yang mencuri perhatian", isNew: true },
  { id: 19, name: "Bumblebee", price: "100000-500000", category: "Bumblebee", subcategory: "Standard", color: "Yellow/Black", age: "4 Bulan", size: "XL", image: getProductImage(18), description: "Ikan cupang bumblebee dengan pola garis hitam–kuning dan cooper yang unik, warna kontras tajam, dan tampilan atraktif yang mencuri perhatian", isNew: false },
  { id: 20, name: "Bumblebee", price: "100000-500000", category: "Bumblebee", subcategory: "Standard", color: "Yellow/Black", age: "3.5 Bulan", size: "M", image: getProductImage(19), description: "Ikan cupang bumblebee dengan pola garis hitam–kuning dan cooper yang unik, warna kontras tajam, dan tampilan atraktif yang mencuri perhatian", isNew: false },
  { id: 21, name: "Bumblebee", price: "100000-500000", category: "Bumblebee", subcategory: "Standard", color: "Yellow/Black", age: "3.5 Bulan", size: "M", image: getProductImage(20), description: "Ikan cupang bumblebee dengan pola garis hitam–kuning dan cooper yang unik, warna kontras tajam, dan tampilan atraktif yang mencuri perhatian", isNew: false },
  // 22. HMPK Bumblebee (Renamed)
  { id: 22, name: "HMPK Bumblebee", price: "200000-800000", category: "Plakat", subcategory: "Bumblebee", color: "Yellow/Black", age: "4 Bulan", size: "L", image: getProductImage(21), description: "Ikan cupang HMPK dengan bentuk tubuh kokoh, sirip setengah bulan rapi, dan warna tajam yang tampil agresif dan berkelas.", isNew: true },
  // 23-26. Bumblebee (Renamed)
  { id: 23, name: "Bumblebee", price: "100000-500000", category: "Bumblebee", subcategory: "Standard", color: "Yellow/Black", age: "4.5 Bulan", size: "L", image: getProductImage(22), description: "Ikan cupang bumblebee dengan pola garis hitam–kuning dan cooper yang unik, warna kontras tajam, dan tampilan atraktif yang mencuri perhatian", isNew: true },
  { id: 24, name: "Bumblebee", price: "100000-500000", category: "Bumblebee", subcategory: "Standard", color: "Yellow/Black", age: "3.5 Bulan", size: "M", image: getProductImage(23), description: "Ikan cupang bumblebee dengan pola garis hitam–kuning dan cooper yang unik, warna kontras tajam, dan tampilan atraktif yang mencuri perhatian", isNew: false },
  { id: 25, name: "Bumblebee", price: "100000-500000", category: "Bumblebee", subcategory: "Standard", color: "Yellow/Black", age: "3.5 Bulan", size: "M", image: getProductImage(24), description: "Ikan cupang bumblebee dengan pola garis hitam–kuning dan cooper yang unik, warna kontras tajam, dan tampilan atraktif yang mencuri perhatian", isNew: false },
  { id: 26, name: "Bumblebee", price: "100000-500000", category: "Bumblebee", subcategory: "Standard", color: "Yellow/Black", age: "4 Bulan", size: "M", image: getProductImage(25), description: "Ikan cupang bumblebee dengan pola garis hitam–kuning dan cooper yang unik, warna kontras tajam, dan tampilan atraktif yang mencuri perhatian", isNew: true },
  // 27. Plakat Dumbo Ear Multycolor (Renamed)
  { id: 27, name: "Plakat Dumbo Ear Multycolor", price: "100000-300000", category: "Plakat", subcategory: "Dumbo Ear", color: "Multicolor", age: "3.5 Bulan", size: "M", image: getProductImage(26), description: "Ikan cupang Plakat Dumbo Ear dengan sirip dada lebar menyerupai telinga gajah. Warna multicolor yang unik.", isNew: false }
];

const categories = ["All", "Plakat", "Halfmoon", "Yellow Base", "Barongsai", "Bumblebee"];
