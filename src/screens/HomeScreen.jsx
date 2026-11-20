import React from 'react';
import Ace from '../components/Ace';
const HomeScreen = ({ level, levelName, aceMessage, onTakeMed, onTapAce, meds, takenMeds, equipped, onShowBondProfile }) => {
  const morningMeds = meds.filter(m => m.timeOfDay === 'Morning');
  const bgGradients = {
    1: 'radial-gradient(circle at 50% 30%, #1E293B 0%, #0B1120 70%)',
    2: 'radial-gradient(circle at 50% 30%, #4A1D3B 0%, #0B1120 70%)',
    3: 'radial-gradient(circle at 50% 30%, #0C4A6E 0%, #0B1120 70%)',
    4: 'radial-gradient(circle at 50% 30%, #3B1E66 0%, #0B1120 70%)',
    5: 'radial-gradient(circle at 50% 30%, #422006 0%, #0B1120 70%)'
  };
  return (
    <div className="screen-content" style={{ background: bgGradients[level] || bgGradients[1] }}>
      <div className="home-top-bar" style={{ marginBottom: '24px' }}>
        <div className="smart-widget">
          <div className="widget-text">
            <span className="widget-time">09:24 AM</span>
            <span className="widget-desc">Sunny · 72°F</span>
          </div>
          <div className="widget-sun"></div>
        </div>
        <div className="month-ring-widget">
          <svg width="40" height="40" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="6" />
            <circle cx="25" cy="25" r="20" fill="none" stroke="#06B6D4" strokeWidth="6" strokeLinecap="round" strokeDasharray="125.6" strokeDashoffset="40" transform="rotate(-90 25 25)" />
          </svg>
          <div className="month-ring-label">68%</div>
        </div>
      </div>
      <div className="ace-zone" style={{ marginBottom: '24px' }}>
        <div className="speech-bubble">{aceMessage}</div>
        <Ace size={140} onClick={onTapAce} equipped={equipped} />
        <div className="ace-level-badge" onClick={onShowBondProfile}>Lv. {level} - {levelName}</div>
        <div className="led-pad"></div>
      </div>
      <div className="home-dashboard">
        <div className="dashboard-header">
          <div className="progress-ring">
            <svg width="50" height="50"><circle cx="25" cy="25" r="20" stroke="rgba(255,255,255,0.1)" strokeWidth="8" fill="none"/><circle cx="25" cy="25" r="20" stroke="#10B981" strokeWidth="8" fill="none" strokeDasharray="125.6" strokeDashoffset="40" transform="rotate(-90 25 25)" strokeLinecap="round" className="progress-circle-anim"/></svg>
            <span>75%</span>
          </div>
          <div className="streak-flame">🔥 5 Days</div>
        </div>
        {morningMeds.length > 0 ? (
          morningMeds.map(med => (
            <div key={med.id} className="upcoming-med">
              <div className="med-text-block">
                <span className="upcoming-title">{med.name}</span>
                <span className="upcoming-sub">{med.dose} · 1 Pill</span>
              </div>
              <button className={`check-in-btn ${takenMeds[med.id] ? 'taken' : ''}`} onClick={() => onTakeMed(med.id, 15)}>
                {takenMeds[med.id] ? '✓' : 'Take'}
              </button>
            </div>
          ))
        ) : (
          <div className="upcoming-med">
            <div className="med-text-block">
              <span className="upcoming-title">No meds scheduled</span>
              <span className="upcoming-sub">Enjoy your day!</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default HomeScreen;