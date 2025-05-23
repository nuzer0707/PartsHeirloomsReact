import React, { createContext, useState, useEffect } from 'react';
// 匯入應用程式所需的靜態資料
import transactions from '../data/transactions';
import productTransactionDetails from '../data/product_transaction_details';
import products from '../data/products';
import transactionMethods from '../data/transaction_methods';
import productContent from '../data/product_content';
import productImages from '../data/product_images';
import users from '../data/users';

// 創建一個新的 Context，用於在組件樹中共享資料
export const DataContext = createContext();

// DataProvider 組件負責提供資料給其子組件
export const DataProvider = ({ children }) => {
  // 將所有共用資料打包成一個物件
  const sharedData = {
    transactions,
    productTransactionDetails,
    products,
    transactionMethods,
    productContent,
    productImages,
    users,
  };

  return (
    // 使用 DataContext.Provider 將 sharedData 提供給所有子組件
    <DataContext.Provider value={sharedData}>
      {children}
    </DataContext.Provider>
  );
};