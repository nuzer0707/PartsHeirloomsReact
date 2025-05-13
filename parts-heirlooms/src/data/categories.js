class Category {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  // 你可以在這裡添加特定於分類的方法，例如：
  // getDisplayName() {
  //   return `Category: ${this.name}`;
  // }
}

export const categories = [
  new Category(1, '顯示卡'),
  new Category(2, 'CPU'),
  new Category(3, '記憶體'),
  new Category(4, '主機板'),
  new Category(5, '電源'),
  new Category(6, '硬碟'),
  new Category(7, '散熱器'),
  new Category(8, '機殼'),
  new Category(9, '其他'),
];