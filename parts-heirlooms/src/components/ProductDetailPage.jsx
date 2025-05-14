import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products'; // 假設商品資料在這裡

const ProductDetailPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // 根據 productId 尋找對應的商品
    const foundProduct = products.find(p => p.id === parseInt(productId));
    setProduct(foundProduct);
  }, [productId]);

  if (!product) {
    return <div>商品載入中或找不到商品...</div>;
  }

  // 這裡將是商品詳細頁面的 UI
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.imageUrl || "https://fakeimg.pl/600x400/cccccc/909090?text=Product+Image"} className="img-fluid" alt={product.name} /> {/* 使用代替圖片 */}
        </div>
        <div className="col-md-6">
          <h1>{product.name}</h1>
          <h2 className="text-success">${product.price}</h2>
          <p>{product.description}</p>
          <p>庫存數量: {product.quantity}</p> {/* 顯示產品數量 */}
          {/* 其他商品詳細資訊，例如評價等 */}
          <button className="btn btn-primary btn-lg">
            {/* 加入購物車 ICON，這裡使用一個簡單的文字代替，如果專案有圖示庫可以替換 */}
            <i className="bi bi-cart-plus"></i> 加入購物車
          </button>
        </div>
      </div>
      {/* 您可以在這裡添加更多區塊，例如商品規格、評價等 */}
    </div>
  );
};

export default ProductDetailPage;