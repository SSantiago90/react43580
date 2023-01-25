/* -------------- BACK-END (API, database, servicio) -------------- */
const databaseItems = [
  {
    id: 1,
    category: "smartphones",
    stock: 2,
    title: "iPhone 9",
    discount: 25,
    price: 649,
    imgurl: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
    detail: "An apple mobile which is nothing like apple",
  },
  {
    id: 2,
    title: "iPhone X",
    newProduct: true,
    detail:
      "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    price: 899,
    stock: 34,
    category: "smartphones",
    imgurl: "https://dummyjson.com/image/i/products/2/thumbnail.jpg",
  },
  {
    id: 4,
    title: "OPPOF19",
    detail: "OPPO F19 is officially announced on April 2021.",
    price: 280,
    discount: 50,
    stock: 123,
    category: "smartphones",
    imgurl: "https://dummyjson.com/image/i/products/4/thumbnail.jpg",
  },
  {
    id: 5,
    title: "Huawei P30",
    detail:
      "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    price: 499,
    stock: 32,
    category: "smartphones",
    imgurl: "https://dummyjson.com/image/i/products/5/thumbnail.jpg",
  },
  {
    id: 6,
    title: "MacBook Pro",
    detail:
      "MacBook Pro 2021 with mini-LED display may launch between September, November",
    price: 1749,
    stock: 83,
    category: "laptops",
    imgurl: "https://dummyjson.com/image/i/products/6/thumbnail.png",
  },
  {
    id: 7,
    title: "Samsung Galaxy Book",
    detail:
      "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
    price: 1499,
    stock: 50,
    category: "laptops",
    imgurl: "https://dummyjson.com/image/i/products/7/thumbnail.jpg",
    discount: 40,
  },
  {
    id: 8,
    title: "Microsoft Surface Laptop 4",
    detail:
      "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
    price: 1499,
    stock: 68,
    category: "laptops",
    imgurl: "https://dummyjson.com/image/i/products/8/thumbnail.jpg",
  },
  {
    id: 9,
    title: "Infinix INBOOK",
    detail:
      "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
    price: 1099,
    stock: 96,
    category: "laptops",
    imgurl: "https://dummyjson.com/image/i/products/9/thumbnail.jpg",
    newProduct: true,
  },
  {
    id: 10,
    title: "HP Pavilion 15-DK1056WM",
    detail:
      "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
    price: 1099,
    stock: 89,
    category: "laptops",
    imgurl: "https://dummyjson.com/image/i/products/10/thumbnail.jpeg",
  },
  {
    id: 11,
    title: "perfume Oil",
    detail:
      "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
    price: 13,
    stock: 65,
    category: "fragrances",
    imgurl: "https://dummyjson.com/image/i/products/11/thumbnail.jpg",
  },
  {
    id: 12,
    title: "Brown Perfume",
    detail: "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
    price: 40,
    stock: 52,
    category: "fragrances",
    imgurl: "https://dummyjson.com/image/i/products/12/thumbnail.jpg",
  },
  {
    id: 13,
    title: "Fog Scent Xpressio Perfume",
    detail:
      "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
    price: 13,
    stock: 61,
    category: "fragrances",
    imgurl: "https://dummyjson.com/image/i/products/13/thumbnail.webp",
  },
  {
    id: 14,
    title: "Non-Alcoholic Concentrated Perfume Oil",
    detail:
      "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
    price: 120,
    stock: 114,
    category: "fragrances",
    imgurl: "https://dummyjson.com/image/i/products/14/thumbnail.jpg",
  },
  {
    id: 15,
    title: "Eau De Perfume Spray",
    detail:
      "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
    price: 30,
    stock: 105,
    category: "fragrances",
    imgurl: "https://dummyjson.com/image/i/products/15/thumbnail.jpg",
  },
  {
    id: 16,
    title: "Hyaluronic Acid Serum",
    detail:
      "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
    price: 19,
    stock: 110,
    category: "skincare",
    imgurl: "https://dummyjson.com/image/i/products/16/thumbnail.jpg",
  },
  {
    id: 17,
    title: "Tree Oil 30ml",
    detail:
      "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,",
    price: 12,
    stock: 78,
    category: "skincare",
    imgurl: "https://dummyjson.com/image/i/products/17/thumbnail.jpg",
  },
  {
    id: 18,
    title: "Oil Free Moisturizer 100ml",
    detail:
      "Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.",
    price: 40,
    stock: 88,
    category: "skincare",
    imgurl: "https://dummyjson.com/image/i/products/18/thumbnail.jpg",
  },
  {
    id: 19,
    title: "Skin Beauty Serum.",
    detail:
      "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m",
    price: 46,
    stock: 54,
    category: "skincare",
    imgurl: "https://dummyjson.com/image/i/products/19/thumbnail.jpg",
  },
  {
    id: 20,
    title: "Freckle Treatment Cream- 15gm",
    detail:
      "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
    price: 70,
    stock: 140,
    category: "skincare",
    imgurl: "https://dummyjson.com/image/i/products/20/thumbnail.jpg",
  },
  {
    id: 21,
    title: "- Daal Masoor 500 grams",
    detail: "Fine quality Branded Product Keep in a cool and dry place",
    price: 20,
    stock: 133,
    category: "groceries",
    imgurl: "https://dummyjson.com/image/i/products/21/thumbnail.png",
  },
  {
    id: 22,
    title: "Elbow Macaroni - 400 gm",
    detail: "Product details of Bake Parlor Big Elbow Macaroni - 400 gm",
    price: 14,
    stock: 146,
    category: "groceries",
    imgurl: "https://dummyjson.com/image/i/products/22/thumbnail.jpg",
  },
  {
    id: 23,
    title: "Orange Essence Food Flavou",
    detail:
      "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item",
    price: 14,
    stock: 26,
    category: "groceries",
    imgurl: "https://dummyjson.com/image/i/products/23/thumbnail.jpg",
  },
  {
    id: 24,
    title: "cereals muesli fruit nuts",
    detail:
      "original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji",
    price: 46,
    stock: 113,
    category: "groceries",
    imgurl: "https://dummyjson.com/image/i/products/24/thumbnail.jpg",
  },
  {
    id: 25,
    title: "Gulab Powder 50 Gram",
    detail: "Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds",
    price: 70,
    stock: 47,
    category: "groceries",
    imgurl: "https://dummyjson.com/image/i/products/25/thumbnail.jpg",
  },
  {
    id: 26,
    title: "Plant Hanger For Home",
    detail:
      "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf",
    price: 41,
    stock: 131,
    category: "home-decoration",
    imgurl: "https://dummyjson.com/image/i/products/26/thumbnail.jpg",
  },
  {
    id: 27,
    title: "Flying Wooden Bird",
    detail:
      "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm",
    price: 51,
    stock: 17,
    category: "home-decoration",
    imgurl: "https://dummyjson.com/image/i/products/27/thumbnail.webp",
  },
  {
    id: 28,
    title: "3D Embellishment Art Lamp",
    detail:
      "3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)",
    price: 20,
    stock: 54,
    category: "home-decoration",
    imgurl: "https://dummyjson.com/image/i/products/28/thumbnail.jpg",
  },
  {
    id: 29,
    title: "Handcraft Chinese style",
    detail:
      "Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate",
    price: 60,
    stock: 7,
    category: "home-decoration",
    imgurl: "https://dummyjson.com/image/i/products/29/thumbnail.webp",
  },
  {
    id: 30,
    title: "Key Holder",
    detail:
      "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
    price: 30,
    stock: 54,
    category: "home-decoration",
    imgurl: "https://dummyjson.com/image/i/products/30/thumbnail.jpg",
  },
];

export default function getItems() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      /* reject("no hay productos"); */
      resolve(databaseItems);
    }, 1500);
  });
}

export function authUser(userLoginData) {
  return new Promise((res, rej) => {
    if (userLoginData === 123) res("ok");
    else rej("usuario no autenticado");
  });
}

export function getSingleItem(itemid) {
  // 3. Usamos find para encontrar el producto deseado
  let itemReq = databaseItems.find((item) => {
    return item.id === parseInt(itemid);
  });

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (itemReq !== undefined) resolve(itemReq);
      else reject("Item no encontrado en la base de datos.");
    }, 1500);
  });
}

export function getItemsByCategory(categoryid) {
  let itemsCat = databaseItems.filter((item) => item.category === categoryid);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(itemsCat);
    }, 1500);
  });
}
