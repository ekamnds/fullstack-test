// Data buah Andi
const fruits = [
    { fruitId: 1, fruitName: 'Apel', fruitType: 'IMPORT', stock: 10 },
    { fruitId: 2, fruitName: 'Kurma', fruitType: 'IMPORT', stock: 20 },
    { fruitId: 3, fruitName: 'apel', fruitType: 'IMPORT', stock: 50 },
    { fruitId: 4, fruitName: 'Manggis', fruitType: 'LOCAL', stock: 100 },
    { fruitId: 5, fruitName: 'Jeruk Bali', fruitType: 'LOCAL', stock: 10 },
    { fruitId: 5, fruitName: 'KURMA', fruitType: 'IMPORT', stock: 20 },
    { fruitId: 5, fruitName: 'Salak', fruitType: 'LOCAL', stock: 150 }
  ];
  
  // 1. Buah apa saja yang dimiliki Andi?
  const uniqueFruits = [...new Set(fruits.map(fruit => fruit.fruitName.toLowerCase()))];
  console.log("Buah yang dimiliki Andi:", uniqueFruits);
  
  // 2. Berapa jumlah wadah dan buah di masing-masing wadah?
  const groupedFruits = fruits.reduce((acc, fruit) => {
    const type = fruit.fruitType;
    if (!acc[type]) acc[type] = [];
    acc[type].push(fruit.fruitName);
    return acc;
  }, {});
  console.log("Jumlah wadah:", Object.keys(groupedFruits).length);
  console.log("Buah di masing-masing wadah:", groupedFruits);
  
  // 3. Total stock buah di masing-masing wadah
  const totalStock = fruits.reduce((acc, fruit) => {
    const type = fruit.fruitType;
    if (!acc[type]) acc[type] = 0;
    acc[type] += fruit.stock;
    return acc;
  }, {});
  console.log("Total stok buah di masing-masing wadah:", totalStock);
  
  // 4. Komentar terkait kasus
  console.log(`
  Komentar: 
  1. Terdapat duplikasi data 'fruitId' dan 'fruitName'.
  2. Disarankan untuk melakukan normalisasi data (case-insensitive untuk fruitName).
  3. FruitId sebaiknya bersifat unik untuk setiap buah.
  `);
  
