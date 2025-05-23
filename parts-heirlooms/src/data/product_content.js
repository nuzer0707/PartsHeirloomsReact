const productContent = [
  {
    content_id: 1,
    product_id: 1, // 顯示卡
    title: '二手顯示卡 GTX 1050 Ti 4GB',
    short_description: '入門級遊戲顯示卡，適合輕度遊戲與日常使用。',
    full_description: '=====產品名稱=====\n◎艾維克 EVGA  RTX 1060Ti 4GB\n=======保固=======\n◎五年免費保固\n◎一年故障換新\n◎註冊三年到府收件\n=====產品規格=====\n◎Performance\n◎NVIDIA RTX 1050 Ti\n◎4864 CUDA Cores\n◎1710 MHz Boost Clock/n259.9GT/s Texture Fill Rate' ,
    created_at: '2023-10-26T10:00:00Z',
    updated_at: '2023-10-26T10:00:00Z',
  },
  {
    content_id: 2,
    product_id: 2, // CPU
    title: 'Intel Core i7-8700K CPU',
    short_description: '高性能六核心處理器，適用於遊戲與專業工作。',
    full_description: '=====產品名稱=====\n◎Intel Core i7-8700K CPU\n=======產品描述=======\n◎高性能六核心處理器，適用於遊戲與專業工作。\n=====產品規格=====\n◎核心數: 6\n◎執行緒數: 12\n◎基礎時脈: 3.7 GHz\n◎最大超頻時脈: 4.7 GHz\n◎插槽類型: LGA 1151\n◎TDP: 95W\n=====其他資訊=====\n◎功能完好，性能穩定。',
    created_at: '2023-10-26T10:10:00Z',
    updated_at: '2023-10-26T10:10:00Z',
  },
  {
    content_id: 3,
    product_id: 3, // 記憶體
    title: 'DDR4 3200MHz 8GB 記憶體 x4',
    short_description: '高速記憶體套組，共32GB。',
    full_description: '=====產品名稱=====\n◎DDR4 3200MHz 8GB 記憶體 x4\n=======產品描述=======\n◎高速記憶體套組，共32GB。\n=====產品規格=====\n◎記憶體類型: DDR4\n◎頻率: 3200 MHz\n◎單條容量: 8GB\n◎數量: 4條\n◎總容量: 32GB\n◎時序: CL16\n=====其他資訊=====\n◎功能完好，性能穩定。',
    created_at: '2023-10-26T10:20:00Z',
    updated_at: '2023-10-26T10:20:00Z',
  },
  {
    content_id: 4,
    product_id: 4, // 主機板
    title: 'ATX Z370 主機板',
    short_description: '支援Intel第八代CPU的ATX主機板。',
    full_description: '=====產品名稱=====\n◎ATX Z370 主機板\n=======產品描述=======\n◎支援Intel第八代CPU的ATX主機板。\n=====產品規格=====\n◎晶片組: Intel Z370\n◎CPU插槽: LGA 1151\n◎記憶體插槽: 4 x DDR4 DIMM\n◎擴充槽: 2 x PCIe x16, 3 x PCIe x1\n◎儲存介面: 6 x SATA 6Gb/s, 2 x M.2\n◎尺寸: ATX\n=====其他資訊=====\n◎功能完好，性能穩定。',
    created_at: '2023-10-26T10:30:00Z',
    updated_at: '2023-10-26T10:30:00Z',
  },
  {
    content_id: 5,
    product_id: 5, // 電源
    title: '650W 80+金牌 電源供應器',
    short_description: '高效能穩定電源供應器。',
    full_description: '=====產品名稱=====\n◎650W 80+金牌 電源供應器\n=======產品描述=======\n◎高效能穩定電源供應器。\n=====產品規格=====\n◎額定功率: 650W\n◎80 PLUS認證: 金牌\n◎模組化: 半模組化\n◎保護機制: OVP, OPP, SCP, OCP, OTP\n◎風扇尺寸: 120mm\n=====其他資訊=====\n◎功能完好，性能穩定。',
    created_at: '2023-10-26T10:40:00Z',
    updated_at: '2023-10-26T10:40:00Z',
  },
  {
    content_id: 6,
    product_id: 6, // 硬碟
    title: '1TB SATA SSD 固態硬碟',
    short_description: '高速讀寫1TB固態硬碟。',
    full_description: '=====產品名稱=====\n◎1TB SATA SSD 固態硬碟\n=======產品描述=======\n◎高速讀寫1TB固態硬碟。\n=====產品規格=====\n◎容量: 1TB\n◎介面: SATA III 6Gb/s\n◎讀取速度: 高達 550 MB/s\n◎寫入速度: 高達 520 MB/s\n◎NAND類型: 3D TLC\n◎尺寸: 2.5吋\n=====其他資訊=====\n◎功能完好，性能穩定。',
    created_at: '2023-10-26T10:50:00Z',
    updated_at: '2023-10-26T10:50:00Z',
  },
  {
    content_id: 7,
    product_id: 7, // 散熱器
    title: 'CPU塔型散熱器',
    short_description: '高效能CPU散熱器，附風扇。',
    full_description: '=====產品名稱=====\n◎CPU塔型散熱器\n=======產品描述=======\n◎高效能CPU散熱器，附風扇。\n=====產品規格=====\n◎散熱器類型: 塔型\n◎熱管數量: 4根\n◎風扇尺寸: 120mm\n◎風扇轉速: 800-1800 RPM\n◎噪音水平: 18-30 dBA\n◎支援平台: Intel LGA115x/1200/1700, AMD AM4/AM5\n=====其他資訊=====\n◎功能完好，性能穩定。',
    created_at: '2023-10-26T11:00:00Z',
    updated_at: '2023-10-26T11:00:00Z',
  },
  {
    content_id: 8,
    product_id: 8, // 機殼
    title: '中塔式 ATX 電腦機殼',
    short_description: '簡約設計電腦機殼，散熱良好。',
    full_description: '=====產品名稱=====\n◎中塔式 ATX 電腦機殼\n=======產品描述=======\n◎簡約設計電腦機殼，散熱良好。\n=====產品規格=====\n◎機殼類型: 中塔式\n◎主機板支援: ATX, Micro-ATX, Mini-ITX\n◎硬碟槽: 2 x 3.5吋, 2 x 2.5吋\n◎I/O面板: 2 x USB 3.0, 音源輸入/輸出\n◎預裝風扇: 前置 2 x 120mm, 後置 1 x 120mm\n◎材質: 鋼材, 強化玻璃側板\n=====其他資訊=====\n◎功能完好，性能穩定。',
    created_at: '2023-10-26T11:10:00Z',
    updated_at: '2023-10-26T11:10:00Z',
  },
  {
    content_id: 9,
    product_id: 9, // 其他
    title: 'USB 無線網卡 x2',
    short_description: '高速USB無線網路卡，兩入組。',
    full_description: '=====產品名稱=====\n◎USB 無線網卡 x2\n=======產品描述=======\n◎高速USB無線網路卡，兩入組。\n=====產品規格=====\n◎無線標準: 802.11ac\n◎頻段: 2.4GHz & 5GHz\n◎介面: USB 2.0\n◎傳輸速率: 2.4GHz (300Mbps), 5GHz (867Mbps)\n◎天線: 內建式\n◎加密方式: WPA/WPA2\n=====其他資訊=====\n◎功能完好，性能穩定。',
    created_at: '2023-10-26T11:20:00Z',
    updated_at: '2023-10-26T11:20:00Z',
  },
  {
    content_id: 10,
    product_id: 10, // 顯示卡
    title: '高階顯示卡 RTX 3080 10GB',
    short_description: '頂級遊戲顯示卡，暢玩3A大作。',
    full_description: '=====產品名稱=====\n◎高階顯示卡 RTX 3080 10GB\n=======產品描述=======\n◎頂級遊戲顯示卡，暢玩3A大作。\n=====產品規格=====\n◎顯示晶片: NVIDIA GeForce RTX 3080\n◎記憶體: 10GB GDDR6X\n◎CUDA核心: 8704\n◎Boost時脈: 1710 MHz\n◎記憶體介面: 320-bit\n◎輸出接口: HDMI 2.1, DisplayPort 1.4a\n=====其他資訊=====\n◎功能完好，性能穩定。',
    created_at: '2023-10-26T11:30:00Z',
    updated_at: '2023-10-26T11:30:00Z',
  },
  {
    content_id: 11,
    product_id: 11, // CPU
    title: 'AMD Ryzen 9 5900X CPU',
    short_description: '旗艦級12核心處理器，性能怪獸。',
    full_description: '=====產品名稱=====\n◎AMD Ryzen 9 5900X CPU\n=======產品描述=======\n◎旗艦級12核心處理器，性能怪獸。\n=====產品規格=====\n◎核心數: 12\n◎執行緒數: 24\n◎基礎時脈: 3.7 GHz\n◎最大加速時脈: 4.8 GHz\n◎插槽類型: AM4\n◎TDP: 105W\n=====其他資訊=====\n◎功能完好，性能穩定。',
    created_at: '2023-10-26T11:40:00Z',
    updated_at: '2023-10-26T11:40:00Z',
  },
  {
    content_id: 12,
    product_id: 12, // 記憶體
    title: 'DDR5 5200MHz 16GB 記憶體 x2',
    short_description: '新一代高速DDR5記憶體，共32GB。',
    full_description: '=====產品名稱=====\n◎DDR5 5200MHz 16GB 記憶體 x2\n=======產品描述=======\n◎新一代高速DDR5記憶體，共32GB。\n=====產品規格=====\n◎記憶體類型: DDR5\n◎頻率: 5200 MHz\n◎單條容量: 16GB\n◎數量: 2條\n◎總容量: 32GB\n◎時序: CL40\n=====其他資訊=====\n◎功能完好，性能穩定。',
    created_at: '2023-10-26T11:50:00Z',
    updated_at: '2023-10-26T11:50:00Z',
  },
];


export default productContent;
