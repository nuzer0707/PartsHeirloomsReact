import React from 'react';
import ProductList from './ProductList'; // 可以重用 ProductList

function ProductsPage({ products }) { // 接收 products prop
  return (
    <div className="container mt-5 pt-5">
      <h2>所有商品</h2>
      {/* 這裡可以有篩選、排序等控制項 */}
      <ProductList products={products} listTitle="商品列表" />
    </div>
  );
}

export default ProductsPage;