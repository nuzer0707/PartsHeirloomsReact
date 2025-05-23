import productTransactionDetails from './product_transaction_details';
import transactionMethods from './transaction_methods';

const transactions = [
  
  //資料格式
  {
    transaction_id: 1,
    product_id: 1,
    seller_user_id: 1,
    buyer_user_id: 2,
    chosen_transaction_detail_id: productTransactionDetails[1].detail_id,
    final_price: 2500,
    status: 'Pending Payment',//ENUM('Pending Payment', 'Paid', 'Processing', 'Shipped', 'Completed', 'Cancelled')
    shipped_at: '2023-10-27T11:15:00Z',
    created_at: '2023-10-26T11:15:00Z',
  },
  //資料格式

  {
    transaction_id: 2,
    product_id: 2,
    seller_user_id: 1,
    buyer_user_id: 2,
    chosen_transaction_detail_id: productTransactionDetails[2].detail_id,
    final_price: 1200,
    status: 'Pending Payment',
    shipped_at: '2023-10-27T11:15:00Z',
    created_at: '2023-10-26T11:15:00Z',
  },
  {
    transaction_id: 3,
    product_id: 3,
    seller_user_id: 1,
    buyer_user_id: 2,
    chosen_transaction_detail_id: productTransactionDetails[3].detail_id,
    final_price: 5000,
    status: 'Processing',
    shipped_at: null,
    created_at: '2023-10-26T11:15:00Z',
  },
  {
    transaction_id: 4,
    product_id: 4,
    seller_user_id: 1,
    buyer_user_id: 2,
    chosen_transaction_detail_id: productTransactionDetails[4].detail_id,
    final_price: 300,
    status: 'Completed',
    shipped_at: '2023-10-27T11:15:00Z',
    created_at: '2023-10-26T11:15:00Z',
  },
  {
    transaction_id: 5,  
    product_id: 5,
    seller_user_id: 1,
    buyer_user_id: 2,
    chosen_transaction_detail_id: productTransactionDetails[5].detail_id,
    final_price: 800,
    status: 'Cancelled',
    shipped_at: null,
    created_at: '2023-10-26T11:15:00Z',
  },
];

export default transactions;


