class Product {
  constructor(id, imageUrl, title, description, price, quantity, categoryId) {
    this.id = id;
    this.imageUrl = imageUrl;
    this.title = title;
    this.description = description;
    this.price = price;
    this.quantity = quantity;
    this.categoryId = categoryId;
  }

  // 你可以在這裡添加特定於產品的方法，例如：
  // getFormattedPrice(currency = 'NT$') {
  //   return `${currency} ${this.price.toLocaleString()}`;
  // }
}

export const products = [
  new Product(
    1,
    "https://fakeimg.pl/600x400/cccccc/909090?text=RTX+3070",
    "高效能顯示卡 RTX 3070",
    "九成新，盒裝完整，遊戲與創作利器。尚在保固內。",
    9500,
    1,
    1
  ),
  new Product(
    2,
    "https://fakeimg.pl/600x400/cccccc/909090?text=i7-10700K",
    "Intel Core i7-10700K CPU",
    "二手良品，功能正常，適合升級或組裝。",
    5200,
    1,
    2
  ),
  new Product(
    3,
    "https://fakeimg.pl/600x400/cccccc/909090?text=16GB+RAM",
    "DDR4 3200 16GB (8GB*2) 記憶體",
    "知名品牌，穩定耐用，雙通道組合。",
    1800,
    4,
    3
  ),
  new Product(
    4,
    "https://fakeimg.pl/600x400/cccccc/909090?text=Z490+Motherboard",
    "Z490 主機板",
    "功能完整，支援最新處理器。",
    3500,
    1,
    4
  ),
  new Product(
    5,
    "https://fakeimg.pl/600x400/cccccc/909090?text=750W+PSU",
    "750W 金牌電源供應器",
    "穩定供電，靜音風扇。",
    2200,
    1,
    5
  ),
  new Product(
    6,
    "https://fakeimg.pl/600x400/cccccc/909090?text=1TB+SSD",
    "1TB NVMe SSD",
    "高速讀寫，系統秒開。",
    2800,
    1,
    6
  ),
  new Product(
    7,
    "https://fakeimg.pl/600x400/cccccc/909090?text=CPU+Cooler",
    "塔式 CPU 散熱器",
    "強力散熱，保持低溫。",
    1200,
    1,
    7
  ),
  new Product(
    8,
    "https://fakeimg.pl/600x400/cccccc/909090?text=ATX+Case",
    "ATX 中塔機殼",
    "散熱良好，空間寬敞。",
    1500,
    1,
    8
  ),
  new Product(
    9,
    "https://fakeimg.pl/600x400/cccccc/909090?text=Gaming+Mouse",
    "電競滑鼠",
    "高 DPI，可自訂按鍵。",
    900,
    2,
    9
  ),
  new Product(
    10,
    "https://fakeimg.pl/600x400/cccccc/909090?text=RTX+4080",
    "頂級顯示卡 RTX 4080",
    "全新未拆，效能怪獸。",
    35000,
    1,
    1
  ),
  new Product(
    11,
    "https://fakeimg.pl/600x400/cccccc/909090?text=Ryzen+9",
    "AMD Ryzen 9 7900X CPU",
    "多核強效，適合專業工作。",
    15000,
    1,
    2
  ),
  new Product(
    12,
    "https://fakeimg.pl/600x400/cccccc/909090?text=32GB+RAM",
    "DDR5 6000 32GB (16GB*2) 記憶體",
    "高速大容量，滿足多工需求。",
    4500,
    2,
    3
  )
];