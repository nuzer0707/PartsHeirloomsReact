const users = [
  {
    user_id: 1,
    username: 'seller_john',
    email: 'john.seller@example.com',
    password_hash: 'hashed_password_1',
    hash_salt: 'salt_1',
    primary_role: 'SELLER',
    created_at: '2023-10-26T10:20:00Z',
  },
  {
    user_id: 2,
    username: 'buyer_jane',
    email: 'jane.buyer@example.com',
    password_hash: 'hashed_password_2',
    hash_salt: 'salt_2',
    primary_role: 'BUYER',
    created_at: '2023-10-26T10:30:00Z',
  },
  {
    user_id: 3,
    username: 'admin_peter',
    email: 'peter.admin@example.com',
    password_hash: 'hashed_password_3',
    hash_salt: 'salt_3',
    primary_role: 'ADMIN',
    created_at: '2023-10-26T10:40:00Z',
  },
];

export default users;
