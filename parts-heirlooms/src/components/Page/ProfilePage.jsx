import React, { useState, useContext } from 'react';
import { DataContext } from '../../contexts/DataContext'; // 引入 DataContext，用於獲取共用資料

function ProfilePage() {
  const [activeTab, setActiveTab] = useState('account');
  const [username, setUsername] = useState('currentUsername'); // 假設這是當前用戶名
  const [email, setEmail] = useState('current@example.com'); // 假設這是當前郵箱
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [reportTitle, setReportTitle] = useState('');
  const [reportContent, setReportContent] = useState('');

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

  const handleReportSubmit = () => {
    if (!reportTitle || !reportContent) {
      alert('請填寫問題標題和內容！');
      return;
    }
    alert(`問題回報已提交！\n標題: ${reportTitle}\n內容: ${reportContent}`);
    // 在這裡添加實際的 API 呼叫來提交問題回報
    // 為了模擬，我們可以在這裡清空表單
    setReportTitle('');
    setReportContent('');
  };

  const handleCancelOrder = (orderId) => {
    if (window.confirm(`確定要取消訂單 ${orderId} 嗎？`)) {
      alert(`訂單 ${orderId} 已取消。`);
      // 在這裡添加實際的 API 呼叫來更新訂單狀態為 'Cancelled'
      // 為了模擬，我們可以在這裡重新載入頁面或更新狀態
      // 實際應用中，您會更新後端資料並重新獲取前端資料
    }
  };

  // Map transaction status to display text
  const statusMap = {
    'Pending Payment': '待付款',
    'Paid': '已付款',
    'Processing': '處理中',
    'Shipped': '配送中',
    'Completed': '已完成',
    'Cancelled': '已取消',
  };

  // Map transaction method name to type
  const methodTypeMap = {
    '郵寄': 'delivery',
    '面交': 'pickup',
  };

  // Assuming current user is the first user in the users data
  const currentUserId = 2; // 假設這是當前用戶 ID

  // 從 DataContext 中獲取共用資料
  const { transactions, productTransactionDetails, products, transactionMethods, productContent, users } = useContext(DataContext);

  // Process data to create orders list (只顯示未完成的訂單)
  const userActiveOrders = transactions.filter(t =>
    t.buyer_user_id === currentUserId && t.status !== 'Completed' && t.status !== 'Cancelled'
  );

  const userTransactionHistory = transactions.filter(t =>
    t.buyer_user_id === currentUserId && (t.status === 'Completed' || t.status === 'Cancelled')
  );

  const processedOrders = userActiveOrders.map(transaction => {
    const product = products.find(p => p.product_id === transaction.product_id);
    const productDetail = productContent.find(pc => pc.product_id === transaction.product_id);
    const transactionDetail = productTransactionDetails.find(d => d.detail_id === transaction.chosen_transaction_detail_id);
    const transactionMethod = transactionMethods.find(m => m.method_id === transactionDetail?.method_id);

    const orderType = (transactionDetail?.meetup_latitude && transactionDetail?.meetup_longitude) ? 'pickup' : (methodTypeMap[transactionMethod?.name] || 'unknown');
    const statusText = statusMap[transaction.status] || transaction.status;

    return {
      id: transaction.transaction_id,
      productName: productDetail?.title || '未知產品',
      status: statusText,
      type: orderType,
      deliveryProgress: orderType === 'delivery' && transaction.shipped_at ? new Date(transaction.shipped_at).toLocaleString() : undefined,
      pickupLocation: orderType === 'pickup' ? transactionDetail?.general_notes || '未提供面交地點' : undefined,
      pickupTime: orderType === 'pickup' ? transactionDetail?.meetup_time ? new Date(transactionDetail.meetup_time).toLocaleString() : '未提供面交時間' : undefined,
      returnable: orderType === 'delivery' && transaction.status !== 'Completed' && transaction.status !== 'Cancelled', // 只有配送中的訂單且未完成/取消才可退貨
    };
  });

  const processedTransactionHistory = userTransactionHistory.map(transaction => {
    const product = products.find(p => p.product_id === transaction.product_id);
    const productDetail = productContent.find(pc => pc.product_id === transaction.product_id);
    const transactionDetail = productTransactionDetails.find(d => d.detail_id === transaction.chosen_transaction_detail_id);
    const transactionMethod = transactionMethods.find(m => m.method_id === transactionDetail?.method_id);

    const orderType = (transactionDetail?.meetup_latitude && transactionDetail?.meetup_longitude) ? 'pickup' : (methodTypeMap[transactionMethod?.name] || 'unknown');
    const statusText = statusMap[transaction.status] || transaction.status;

    return {
      id: transaction.transaction_id,
      productName: productDetail?.title || '未知產品',
      status: statusText,
      type: orderType,
      deliveryProgress: orderType === 'delivery' && transaction.shipped_at ? new Date(transaction.shipped_at).toLocaleString() : undefined,
      pickupLocation: orderType === 'pickup' ? transactionDetail?.general_notes || '未提供面交地點' : undefined,
      pickupTime: orderType === 'pickup' ? transactionDetail?.meetup_time ? new Date(transactionDetail.meetup_time).toLocaleString() : '未提供面交時間' : undefined,
    };
  });

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
                  {processedOrders.length > 0 ? (
                    <ul className="list-group order-list">
                      {processedOrders.map((order) => (
                        <li key={order.id} className="list-group-item">

                          <h5>{order.productName}</h5>
                          <p>訂單號: {order.id}</p>
                          <p>狀態: {order.status}</p>
                          {order.type === 'delivery' && (
                            <p>出貨時間: {order.deliveryProgress}</p>
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
                            {order.status !== '已完成' && order.status !== '已取消' && (
                              <button
                                className="btn btn-danger btn-sm ms-2"
                                onClick={() => handleCancelOrder(order.id)}
                              >
                                取消訂單
                              </button>
                            )}
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
                  {processedTransactionHistory.length > 0 ? (
                    <ul className="list-group order-list">
                      {processedTransactionHistory.map((transaction) => (
                        <li key={transaction.id} className="list-group-item">
                          <h5>{transaction.productName}</h5>
                          <p>訂單號: {transaction.id}</p>
                          <p>狀態: {transaction.status}</p>
                          {transaction.type === 'delivery' && transaction.deliveryProgress && (
                            <p>出貨時間: {transaction.deliveryProgress}</p>
                          )}
                          {transaction.type === 'pickup' && (
                            <div>
                              <p>面交地點: {transaction.pickupLocation}</p>
                              <p>面交時間: {transaction.pickupTime}</p>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>目前沒有交易歷史記錄。</p>
                  )}
                </div>
              )}
              {activeTab === 'customerService' && (
                <div>
                  <h3>客戶服務</h3>
                  <p>整合客服聯繫方式、常見問題解答(FAQ)及支援請求追蹤。</p>
                  <div className="mb-3">
                    <label htmlFor="reportTitle" className="form-label">問題標題</label>
                    <input
                      type="text"
                      className="form-control"
                      id="reportTitle"
                      value={reportTitle}
                      onChange={(e) => setReportTitle(e.target.value)}
                      placeholder="請輸入問題標題"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="reportContent" className="form-label">問題內容</label>
                    <textarea
                      className="form-control"
                      id="reportContent"
                      rows="5"
                      value={reportContent}
                      onChange={(e) => setReportContent(e.target.value)}
                      placeholder="請詳細描述您的問題"
                    ></textarea>
                  </div>
                  <button className="btn btn-primary" onClick={handleReportSubmit}>提交回報</button>
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