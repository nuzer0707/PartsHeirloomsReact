import React, { useState } from 'react';

function ProfilePage() {
  const [activeTab, setActiveTab] = useState('account');
  const [username, setUsername] = useState('currentUsername'); // 假設這是當前用戶名
  const [email, setEmail] = useState('current@example.com'); // 假設這是當前郵箱
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [orders, setOrders] = useState([
    {
      id: 'ORD001',
      productName: '復古機械鍵盤',
      status: '配送中',
      type: 'delivery',
      deliveryProgress: '已出貨，預計明天送達',
      returnable: true,
    },
    {
      id: 'ORD002',
      productName: '限量版公仔',
      status: '待面交',
      type: 'pickup',
      pickupLocation: '台北車站',
      pickupTime: '2025/06/01 14:00',
      returnable: false,
    },
    {
      id: 'ORD003',
      productName: '藍芽耳機',
      status: '已完成',
      type: 'delivery',
      deliveryProgress: '已簽收',
      returnable: true,
    },
    {
      id: 'ORD004',
      productName: '設計師款手錶',
      status: '退貨處理中',
      type: 'delivery',
      deliveryProgress: '退貨申請已提交，等待賣家確認',
      returnable: false,
    },
  ]);

  const handleUsernameChange = () => {
    alert(`用戶名已更新為: ${username}`);
    // 在這裡添加實際的 API 呼叫來更新用戶名
  };

  const handleEmailChange = () => {
    alert(`郵箱已更新為: ${email}`);
    // 在這裡添加實際的 API 呼叫來更新郵箱
  };

  const handlePasswordChange = () => {
    if (newPassword !== confirmNewPassword) {
      alert('新密碼與確認密碼不符！');
      return;
    }
    if (newPassword.length < 6) {
      alert('新密碼長度至少為6位！');
      return;
    }
    alert('密碼已更新！');
    // 在這裡添加實際的 API 呼叫來更新密碼
    setCurrentPassword('');
    setNewPassword('');
    setConfirmNewPassword('');
  };

  const handleReturnRequest = (orderId) => {
    alert(`已提交訂單 ${orderId} 的退貨申請。`);
    // 在這裡添加實際的 API 呼叫來處理退貨申請
  };

  const handleContactSeller = (orderId) => {
    alert(`已聯繫訂單 ${orderId} 的賣家。`);
    // 在這裡添加實際的 API 呼叫來聯繫賣家
  };

  return (
    <div className="container mt-5 pt-5">
      <h2 className="mb-4">個人中心</h2>
      <div className="row">
        <div className="col-md-3">
          <div className="list-group">
            <button
              className={`list-group-item list-group-item-action ${activeTab === 'account' ? 'active' : ''}`}
              onClick={() => setActiveTab('account')}
            >
              帳戶設定
            </button>
            <button
              className={`list-group-item list-group-item-action ${activeTab === 'orders' ? 'active' : ''}`}
              onClick={() => setActiveTab('orders')}
            >
              訂單與退貨管理
            </button>
            <button
              className={`list-group-item list-group-item-action ${activeTab === 'transactions' ? 'active' : ''}`}
              onClick={() => setActiveTab('transactions')}
            >
              交易歷史
            </button>
            <button
              className={`list-group-item list-group-item-action ${activeTab === 'customerService' ? 'active' : ''}`}
              onClick={() => setActiveTab('customerService')}
            >
              客戶服務
            </button>
          </div>
        </div>
        <div className="col-md-9">
          <div className="card cart-card">
            <div className="card-body">
              {activeTab === 'account' && (
                <div>
                  <h3>帳戶設定</h3>
                  <p>管理您的個人資料、密碼、隱私設定及通知偏好。</p>

                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">用戶名</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      <button className="btn btn-primary" onClick={handleUsernameChange}>修改</button>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">郵箱</label>
                    <div className="input-group">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <button className="btn btn-primary" onClick={handleEmailChange}>修改</button>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="currentPassword" className="form-label">當前密碼</label>
                    <input
                      type="password"
                      className="form-control"
                      id="currentPassword"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="newPassword" className="form-label">新密碼</label>
                    <input
                      type="password"
                      className="form-control"
                      id="newPassword"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="confirmNewPassword" className="form-label">確認新密碼</label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmNewPassword"
                      value={confirmNewPassword}
                      onChange={(e) => setConfirmNewPassword(e.target.value)}
                    />
                  </div>

                  <button className="btn btn-primary" onClick={handlePasswordChange}>修改密碼</button>

                </div>
              )}
              {activeTab === 'orders' && (
                <div>
                  <h3>訂單與退貨管理</h3>
                  <p>查詢所有訂單的狀態、歷史記錄，並提交或追蹤退貨申請。</p>
                  {orders.length > 0 ? (
                    <ul className="list-group">
                      {orders.map((order) => (
                        <li key={order.id} className="list-group-item mb-3">
                          <h5>訂單號: {order.id} - {order.productName}</h5>
                          <p>狀態: {order.status}</p>
                          {order.type === 'delivery' && (
                            <p>配送進度: {order.deliveryProgress}</p>
                          )}
                          {order.type === 'pickup' && (
                            <div>
                              <p>面交地點: {order.pickupLocation}</p>
                              <p>面交時間: {order.pickupTime}</p>
                            </div>
                          )}
                          <div className="d-flex justify-content-end">
                            {order.returnable && (
                              <button
                                className="btn btn-warning btn-sm me-2"
                                onClick={() => handleReturnRequest(order.id)}
                              >
                                退貨
                              </button>
                            )}
                            <button
                              className="btn btn-info btn-sm"
                              onClick={() => handleContactSeller(order.id)}
                            >
                              賣家詢問
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>目前沒有訂單。</p>
                  )}
                </div>
              )}
              {activeTab === 'transactions' && (
                <div>
                  <h3>交易歷史</h3>
                  <p>清晰呈現所有消費與支付詳細記錄。</p>
                  {/* 交易記錄列表或組件 */}
                </div>
              )}
              {activeTab === 'customerService' && (
                <div>
                  <h3>客戶服務</h3>
                  <p>整合客服聯繫方式、常見問題解答(FAQ)及支援請求追蹤。</p>
                  {/* 客戶服務內容或組件 */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;