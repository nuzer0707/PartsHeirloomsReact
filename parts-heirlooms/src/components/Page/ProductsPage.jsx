import React, { useState, useContext } from 'react';
import ProductList from '../ProductList'; // 可以重用 ProductList
import categories from '../../data/categories'; // 引入分類資料
import { DataContext } from '../../contexts/DataContext'; // 引入 DataContext，用於獲取共用資料

function ProductsPage() { // 不再接收 products prop，改從 Context 獲取
  // 從 DataContext 中獲取 products 資料
  const { products } = useContext(DataContext);
  const [selectedCategory, setSelectedCategory] = useState(''); // 預設不選擇任何分類

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="container mt-5 pt-5">
      <h2>商品</h2>
      <div className="mb-3">
        <div className="form-label">篩選分類：</div>
        <div className="btn-group" role="group" aria-label="Category filter">
          <button
            type="button"
            className={`btn ${selectedCategory === '' ? 'btn-secondary' : 'btn-outline-secondary'}`}
            onClick={() => handleCategoryChange('')}
          >
            所有分類
          </button>
          {categories.map(category => (
            <button
              key={category.category_id}
              type="button"
              className={`btn ${selectedCategory === category.category_id ? 'btn-secondary' : 'btn-outline-secondary'}`}
              onClick={() => handleCategoryChange(category.category_id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {selectedCategory ? (
        // 如果選擇了特定分類，則顯示該分類的商品
        <ProductList
          products={products.filter(product => product.category_id === selectedCategory)}
          listTitle={categories.find(c => c.category_id === selectedCategory)?.name || "商品列表"}
        // navigateTo 不再需要傳遞
        />
      ) : (
        // 如果選擇了 "所有分類"，則遍歷所有分類並分別顯示
        categories.map(category => {
          const productsInCategory = products.filter(product => product.category_id === category.category_id);
          if (productsInCategory.length > 0) {
            return (
              <ProductList
                key={category.category_id}
                products={productsInCategory}
                listTitle={category.name}
              // navigateTo 不再需要傳遞
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
