const productImages = [
 {
    image_id: 1,
    product_id: 1, // GTX 1050 Ti
    image_url: 'https://fakeimg.pl/350x200/?text=GTX+1050Ti+1&font=noto',
    created_at: '2023-10-26T10:00:00Z',
  },
  {
    image_id: 2,
    product_id: 1, // GTX 1050 Ti
    image_url: 'https://fakeimg.pl/350x200/?text=GTX+1050Ti+2&font=noto',
    created_at: '2023-10-26T10:00:00Z',
  },
  {
    image_id: 3,
    product_id: 2, // i7-8700K
    image_url: 'https://fakeimg.pl/350x200/?text=i7-8700K&font=noto',
    created_at: '2023-10-26T10:10:00Z',
  },
  {
    image_id: 4,
    product_id: 3, // DDR4 3200MHz 8GB x4
    image_url: 'https://fakeimg.pl/350x200/?text=RAM+DDR4&font=noto',
    created_at: '2023-10-26T10:20:00Z',
  },
  {
    image_id: 5,
    product_id: 4, // ATX Z370 主機板
    image_url: 'https://fakeimg.pl/350x200/?text=Z370&font=noto',
    created_at: '2023-10-26T10:30:00Z',
  },
  {
    image_id: 6,
    product_id: 5, // 650W 80+金牌 電源
    image_url: 'https://fakeimg.pl/350x200/?text=PSU+650W&font=noto',
    created_at: '2023-10-26T10:40:00Z',
  },
  {
    image_id: 7,
    product_id: 6, // 1TB SATA SSD
    image_url: 'https://fakeimg.pl/350x200/?text=1TB+SATA&font=noto',
    created_at: '2023-10-26T10:50:00Z',
  },
  {
    image_id: 8,
    product_id: 7, // CPU塔型散熱器
    image_url: 'https://fakeimg.pl/350x200/?text=Cooler+Tower&font=noto',
    created_at: '2023-10-26T11:00:00Z',
  },
  {
    image_id: 9,
    product_id: 8, // 中塔式 ATX 機殼
    image_url: 'https://fakeimg.pl/350x200/?text=ATX+Mid&font=noto',
    created_at: '2023-10-26T11:10:00Z',
  },
  {
    image_id: 10,
    product_id: 9, // USB 無線網卡 x2
    image_url: 'https://fakeimg.pl/350x200/?text=WiFi+Adapter&font=noto',
    created_at: '2023-10-26T11:20:00Z',
  },
  {
    image_id: 11,
    product_id: 10, // RTX 3080
    image_url: 'https://fakeimg.pl/350x200/?text=RTX+3080&&font=noto',
    created_at: '2023-10-26T11:30:00Z',
  },
  {
    image_id: 12,
    product_id: 10, // RTX 3080
    image_url: 'https://fakeimg.pl/350x200/?text=RTX+3080&+1&font=noto',
    created_at: '2023-10-26T11:30:00Z',
  },
  {
    image_id: 13,
    product_id: 11, // Ryzen 9 5900X
    image_url: 'https://fakeimg.pl/350x200/?text=Ryzen+9+5900X&font=noto',
    created_at: '2023-10-26T11:40:00Z',
  },
  {
    image_id: 14,
    product_id: 12, // DDR5 5200MHz 16GB x2
    image_url: 'https://fakeimg.pl/350x200/?text=RAM+DDR5&font=noto',
    created_at: '2023-10-26T11:50:00Z',
  },
  // 如果需要，可以為其他產品添加更多圖片
  // 例如為 product_id: 2 (CPU) 添加一個包裝盒圖片
  {
    image_id: 15,
    product_id: 2, // i7-8700K
    image_url: 'https://fakeimg.pl/350x200/?text=i7-8700K&font=noto',
    created_at: '2023-10-26T10:10:00Z',
  },
];

export default productImages;
