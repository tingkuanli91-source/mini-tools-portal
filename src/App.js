import React, { useState } from 'react';
import './App.css';

const tools = [
  {
    id: 'pomodoro',
    name: '番茄鐘',
    nameEn: 'Pomodoro Timer',
    description: '專注時間管理工具，提升工作效率',
    icon: 'timer',
    color: '#ef4444',
    url: 'https://pomodoro-timer-ebon-iota.vercel.app',
    features: ['自定義時間', '休息提醒', '任務追蹤', '統計數據']
  },
  {
    id: 'tetris',
    name: '俄羅斯方塊',
    nameEn: 'Tetris Game',
    description: '經典方塊遊戲，訓練反應速度',
    icon: 'sports_esports',
    color: '#8b5cf6',
    url: 'https://tetris-game-omega-sandy.vercel.app',
    features: ['多種模式', '積分排行', '道具系統', '海報儲存']
  },
  {
    id: 'keyboard',
    name: '打字練習',
    nameEn: 'Type Keyboard',
    description: '鍵盤打字練習，提升輸入速度',
    icon: 'keyboard',
    color: '#10b981',
    url: 'https://type-keyboard.vercel.app',
    features: ['多語言支援', '速度測試', '錯誤分析', '進度追蹤']
  }
];

function App() {
  const [activeTool, setActiveTool] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const openTool = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="app">
      <header className="header">
        <div className="logo">
          <span className="material-symbols-outlined">apps</span>
          <h1>小工具入口</h1>
        </div>
        <p className="tagline">台灣微網科技 - 實用工具集</p>
      </header>

      <main className="main">
        <section className="hero">
          <div className="hero-content">
            <h2>工作與休閒的最佳夥伴</h2>
            <p>集結實用小工具，讓您的生活更有效率</p>
          </div>
        </section>

        <section className="tools-grid">
          <div className="tools-header">
            <h3>全部工具</h3>
            <span className="tools-count">{tools.length} 個工具</span>
          </div>
          
          <div className="cards-container">
            {tools.map(tool => (
              <div 
                key={tool.id} 
                className="tool-card"
                onClick={() => openTool(tool.url)}
              >
                <div className="card-icon" style={{ background: tool.color }}>
                  <span className="material-symbols-outlined">{tool.icon}</span>
                </div>
                <div className="card-content">
                  <h4>{tool.name}</h4>
                  <p className="name-en">{tool.nameEn}</p>
                  <p className="description">{tool.description}</p>
                  <div className="features">
                    {tool.features.map((f, i) => (
                      <span key={i} className="feature-tag">{f}</span>
                    ))}
                  </div>
                </div>
                <div className="card-action">
                  <span className="material-symbols-outlined">open_in_new</span>
                  前往
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="stats-section">
          <h3>工具統計</h3>
          <div className="stats-grid">
            <div className="stat-card">
              <span className="material-symbols-outlined">group</span>
              <div className="stat-value">12,345</div>
              <div className="stat-label">總使用人次</div>
            </div>
            <div className="stat-card">
              <span className="material-symbols-outlined">star</span>
              <div className="stat-value">4.8</div>
              <div className="stat-label">平均評分</div>
            </div>
            <div className="stat-card">
              <span className="material-symbols-outlined">schedule</span>
              <div className="stat-value">50,000+</div>
              <div className="stat-label">總專注時數</div>
            </div>
          </div>
        </section>

        <section className="quick-access">
          <h3>快速啟動</h3>
          <div className="quick-buttons">
            {tools.map(tool => (
              <button 
                key={tool.id}
                className="quick-btn"
                style={{ borderColor: tool.color, color: tool.color }}
                onClick={() => openTool(tool.url)}
              >
                <span className="material-symbols-outlined">{tool.icon}</span>
                {tool.name}
              </button>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 台灣微網科技股份有限公司 | Taiwan Microgrid Technology</p>
        <div className="footer-links">
          <a href="https://factory-pwr-sys.vercel.app" target="_blank" rel="noopener noreferrer">工廠用電管理</a>
          <a href="https://energy-mobile.vercel.app" target="_blank" rel="noopener noreferrer">手機版能源管理</a>
          <a href="https://development-procedures.vercel.app" target="_blank" rel="noopener noreferrer">開發程序</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
