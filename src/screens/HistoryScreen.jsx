import React from 'react';
import Ace from '../components/Ace';

const HistoryScreen = ({ equipped }) => {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const adherence = ['taken', 'taken', 'missed', 'taken', 'taken', 'taken', 'future'];
  const graphData = [85, 100, 75, 100, 90, 100, 85];
  const maxVal = 100;
  const chartWidth = 280; const chartHeight = 100;
  const points = graphData.map((val, i) => { const x = (i * (chartWidth / (graphData.length - 1))) + 10; const y = chartHeight - (val / maxVal) * (chartHeight - 20) - 10; return { x, y, val, day: days[i] }; });
  const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  const areaPath = `${linePath} L ${points[points.length-1].x} ${chartHeight} L ${points[0].x} ${chartHeight} Z`;

  return (
    <div className="screen-content">
      <div className="screen-header-ace">
        <Ace size={60} equipped={equipped} float={false} />
        <div>
          <h2 className="screen-title">Your Week</h2>
          <p className="screen-subtitle">Look at that progress!</p>
        </div>
      </div>
      <div className="analytics-card">
        <div className="analytics-header">
          <div><h3>Adherence Rate</h3><span className="trend-badge positive">▲ 12% vs last week</span></div>
          <h2 className="big-stat">90%</h2>
        </div>
        <div className="chart-container">
          <svg viewBox="0 0 300 120" width="100%" height="120">
            <defs><linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#10B981" stopOpacity="0.4" /><stop offset="100%" stopColor="#10B981" stopOpacity="0" /></linearGradient></defs>
            <line x1="0" y1="30" x2="300" y2="30" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            <line x1="0" y1="60" x2="300" y2="60" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            <line x1="0" y1="90" x2="300" y2="90" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            <path d={areaPath} fill="url(#chartGrad)" className="chart-area-anim" />
            <path d={linePath} fill="none" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="chart-line-anim" style={{filter: 'drop-shadow(0 0 6px rgba(16, 185, 129, 0.6))'}} />
            {points.map((p, i) => (<g key={i}><circle cx={p.x} cy={p.y} r="4" fill="#0F172A" stroke="#10B981" strokeWidth="2" /><text x={p.x} y="115" fill="#64748B" fontSize="10" textAnchor="middle" fontFamily="'Outfit', sans-serif" fontWeight="600">{p.day}</text></g>))}
          </svg>
        </div>
      </div>
      <div className="insights-card">
        <h3>Daily Breakdown</h3>
        <p className="insight-text">You've taken 85% of your doses this week. Keep it up!</p>
        <div className="week-heatmap">{days.map((day, i) => (<div key={i} className="heat-day"><div className={`heat-dot ${adherence[i]}`}></div><span>{day}</span></div>))}</div>
      </div>
      <div className="stats-grid">
        <div className="stat-card"><h3>25</h3><p>Taken</p></div>
        <div className="stat-card"><h3>1</h3><p>Missed</p></div>
        <div className="stat-card streak-stat"><Ace size={40} equipped={equipped} float={false} /><h3>5</h3><p>Day Streak</p></div>
      </div>
    </div>
  );
};

export default HistoryScreen;