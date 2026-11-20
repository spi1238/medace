import React from 'react';
import Ace from '../components/Ace';

const MedsScreen = ({ meds, onAddMedClick, onDeleteMed, equipped }) => {
  const times = ['Morning', 'Afternoon', 'Evening', 'As Needed'];
  return (
    <div className="screen-content">
      <div className="screen-header-ace">
        <Ace size={60} equipped={equipped} float={false} />
        <div>
          <h2 className="screen-title">Medications</h2>
          <p className="screen-subtitle">Stay on track, I'm rooting for you!</p>
        </div>
      </div>
      {times.map(time => {
        const groupMeds = meds.filter(m => m.timeOfDay === time);
        if (groupMeds.length === 0) return null;
        return (
          <div key={time} className="time-group">
            <h3 className="time-group-header">{time}</h3>
            {groupMeds.map(med => (
              <div key={med.id} className="med-card">
                <button className="delete-med-btn" onClick={() => onDeleteMed(med.id)}>✕</button>
                <div className="card-header">
                  <h3 style={{ color: med.color }}>{med.name}</h3>
                  {med.supply < 20 && <div className="due-dot" style={{background: '#F59E0B', boxShadow: '0 0 8px #F59E0B'}}></div>}
                </div>
                <p>{med.dose} · {med.schedule}</p>
                <div className="supply-bar"><div className="supply-fill" style={{width: `${med.supply}%`, background: med.supply < 20 ? '#F59E0B' : med.color}}></div></div>
                {med.supply < 20 && <div className="refill-alert">⚠ Refill needed soon</div>}
              </div>
            ))}
          </div>
        );
      })}
      <button className="floating-action-btn" onClick={onAddMedClick}>+</button>
    </div>
  );
};

export default MedsScreen;