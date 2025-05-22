import productTransactionDetails from './product_transaction_details';

const transactions = [
  {
    transaction_id: 1,
    product_id: 1,
    seller_user_id: 1,
    buyer_user_id: 2,
    chosen_transaction_detail_id: productTransactionDetails[0].detail_id,
    final_price: 2500,
    status: 'Completed',
    created_at: productTransactionDetails[0].created_at,
  },
  {
    transaction_id: 2,
    product_id: 2,
    seller_user_id: 3,
    buyer_user_id: 1,
    chosen_transaction_detail_id: productTransactionDetails[2].detail_id,
    final_price: 1200,
    status: 'Pending',
    created_at: productTransactionDetails[2].created_at,
  },
  {
    transaction_id: 3,
    product_id: 3,
    seller_user_id: 4,
    buyer_user_id: 2,
    chosen_transaction_detail_id: productTransactionDetails[3].detail_id,
    final_price: 5000,
    status: 'Completed',
    created_at: productTransactionDetails[3].created_at,
  },
  {
    transaction_id: 4,
    product_id: 4,
    seller_user_id: 1,
    buyer_user_id: 2,
    chosen_transaction_detail_id: productTransactionDetails[4].detail_id,
    final_price: 300,
    status: 'Cancelled',
    created_at: productTransactionDetails[4].created_at,
  },
  {
    transaction_id: 5,
    product_id: 5,
    seller_user_id: 2,
    buyer_user_id: 4,
    chosen_transaction_detail_id: productTransactionDetails[5].detail_id,
    final_price: 800,
    status: 'Completed',
    created_at: productTransactionDetails[5].created_at,
  },
];

export default transactions;
