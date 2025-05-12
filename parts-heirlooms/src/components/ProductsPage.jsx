import React, { useState } from 'react';
import ProductList from './ProductList'; // 可以重用 ProductList
import { categories } from '../data/categories'; // 引入分類資料

function ProductsPage({ products }) { // 接收 products prop
  const [selectedCategory, setSelectedCategory] = useState(''); // 預設不選擇任何分類

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // 篩選邏輯移到渲染部分，以便根據 selectedCategory 決定渲染方式
  // const filteredProducts = selectedCategory
  //   ? products.filter(product => product.categoryId === parseInt(selectedCategory))
  //   : products;

  return (
    <div className="container mt-5 pt-5">
      <h2>所有商品</h2>
      <div className="mb-3">
        <label htmlFor="categoryFilter" className="form-label">篩選分類：</label>
        <select
          id="categoryFilter"
          className="form-select"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">所有分類</option>
          {categories.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {selectedCategory ? (
        // 如果選擇了特定分類，則顯示該分類的商品
        <ProductList
          products={products.filter(product => product.categoryId === parseInt(selectedCategory))}
          listTitle={categories.find(c => c.id === parseInt(selectedCategory))?.name || "商品列表"}
        />
      ) : (
        // 如果選擇了 "所有分類"，則遍歷所有分類並分別顯示
        categories.map(category => {
          const productsInCategory = products.filter(product => product.categoryId === category.id);
          if (productsInCategory.length > 0) {
            return (
              <ProductList
                key={category.id}
                products={productsInCategory}
                listTitle={category.name}
              />
            );
          }
          return null; // 如果該分類沒有商品，則不渲染
        })
      )}
    </div>
  );
}

export default ProductsPage;