import React, { useState, useEffect } from 'react';
import products from '../../data/products';
import productContent from '../../data/product_content';
import productImages from '../../data/product_images'; // 假設有圖片數據

function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // 這裡模擬從購物車中獲取商品數據
    // 實際應用中，這些數據會來自後端或全局狀態管理
    const initialCartItems = [
      { product_id: 1, quantity: 1 },
      { product_id: 3, quantity: 2 },
    ];

    const itemsWithDetails = initialCartItems.map(item => {
      const productDetail = products.find(p => p.product_id === item.product_id);
      const contentDetail = productContent.find(c => c.product_id === item.product_id);
      const imageDetail = productImages.find(img => img.product_id === item.product_id); // 假設圖片數據
      return {
        ...item,
        ...productDetail,
        ...contentDetail,
        image_url: imageDetail ? imageDetail.image_url : 'https://via.placeholder.com/150', // 預設圖片
      };
    });
    setCartItems(itemsWithDetails);
  }, []);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.product_id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.product_id !== productId));
  };

  return (
    <section className="h-100 gradient-custom">
      <div className="container py-5">
        <div className="row d-flex justify-content-center my-4">
          <div className="col-md-8">
            <div className="card mb-4 cart-card">
              <div className="card-header py-3">
                <h5 className="mb-0">購物車 - {cartItems.length} 件商品</h5>
              </div>
              <div className="card-body">
                {cartItems.length === 0 ? (
                  <p>您的購物車是空的。</p>
                ) : (
                  cartItems.map((item) => (
                    <div key={item.product_id}>
                      <div className="row">
                        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                          {/* <!-- Image --> */}
                          <div className="bg-image ripple rounded">
                            <img src={item.image_url}
                              className="w-100" alt={item.title} />
                          </div>
                          {/* <!-- Image --> */}
                        </div>

                        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                          {/* <!-- Data --> */}
                          <p><strong>{item.title}</strong></p>
                          <p>價格: ${item.price}</p>
                          <button type="button" className="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                            title="從購物車中移除" onClick={() => handleRemoveItem(item.product_id)}>
                            <i className="fas fa-trash"></i>
                          </button>
                          <button type="button" className="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip"
                            title="移至願望清單">
                            <i className="fas fa-heart"></i>
                          </button>
                          {/* <!-- Data --> */}
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                          {/* <!-- Quantity --> */}
                          <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                            <button className="btn btn-outline-primary px-3"
                              onClick={() => handleQuantityChange(item.product_id, Math.max(1, item.quantity - 1))}
                              style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0, borderTopLeftRadius: '0.25rem', borderBottomLeftRadius: '0.25rem' }}>
                              <i className="bi bi-dash"></i>
                            </button>

                            <div className="form-control text-center" style={{ borderRadius: 0, borderLeft: 'none', borderRight: 'none', lineHeight: '2.5', width: '50px' }}>
                              {item.quantity}
                            </div>

                            <button className="btn btn-outline-primary px-3"
                              onClick={() => handleQuantityChange(item.product_id, item.quantity + 1)}
                              style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0, borderTopRightRadius: '0.25rem', borderBottomRightRadius: '0.25rem' }}>
                              <i className="bi bi-plus"></i>
                            </button>
                          </div>
                          {/* <!-- Quantity --> */}

                          {/* <!-- Price --> */}
                          <p className="text-start text-md-center">
                            <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                          </p>
                          {/* <!-- Price --> */}
                        </div>
                      </div>
                      <hr className="my-4" />
                    </div>
                  ))
                )}
              </div>
            </div>
            <div className="card mb-4 cart-card">
              <div className="card-body">
                <p><strong>預期送達時間</strong></p>
                <p className="mb-0">2025 年 5 月 26 日</p>
              </div>
            </div>
            <div className="card mb-4 mb-lg-0 cart-card">
              <div className="card-body">
                <p><strong>我們接受</strong></p>
                <img className="me-2" width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                  alt="Visa" />
                <img className="me-2" width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                  alt="American Express" />
                <img className="me-2" width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                  alt="Mastercard" />
                <img className="me-2" width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/discover.svg"
                  alt="Discover" />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 cart-card">
              <div className="card-header py-3">
                <h5 className="mb-0">摘要</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li
                    className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    商品
                    <span>${calculateTotal().toFixed(2)}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    運費
                    <span>免運費</span>
                  </li>
                  <li
                    className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>總金額</strong>
                      <strong>
                        <p className="mb-0">(含增值稅)</p>
                      </strong>
                    </div>
                    <span><strong>${calculateTotal().toFixed(2)}</strong></span>
                  </li>
                </ul>

                <button type="button" className="btn btn-primary btn-lg btn-block">
                  前往結帳
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CartPage;