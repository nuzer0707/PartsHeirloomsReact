// 引入 React 的 useState 和 useEffect
import React, { useState, useEffect } from 'react';

// 回到頂部按鈕組件
function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // 監聽滾動事件
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) { // 當滾動超過 300px 時顯示按鈕
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // 缓动函数 (easeInOutQuad)
  // t: currentTime, b: startValue, c: changeInValue, d: duration
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };

  // 自訂平滑滾動到頂部
  const scrollToTop = () => {
    const startPosition = window.pageYOffset;
    const distance = -startPosition; // 滾動到 0
    const duration = 500; // 動畫持續時間 (毫秒)
    let startTime = null;

    function animationStep(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) {
        requestAnimationFrame(animationStep);
      }
    }
    requestAnimationFrame(animationStep);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    // 元件卸載時移除事件監聽器
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="btn btn-secondary rounded-circle p-2 lh-1" // 使用 Bootstrap class
          aria-label="回到頂部"
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 1000, // 確保在頂層
          }}
        >
          <i className="bi bi-arrow-up-short fs-4"></i>
        </button>
      )}
    </div>
  );
}

export default ScrollToTopButton;