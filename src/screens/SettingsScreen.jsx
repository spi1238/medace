import React from 'react';
import Ace from '../components/Ace';
import { triggerHaptic } from '../utils/constants';

const SettingsScreen = ({ equipped, settings, setSettings, profile, setProfile, onResetData, onShowSOS }) => {
  const handleToggle = (key) => { setSettings(prev => ({ ...prev, [key]: !prev[key] })); if (key === 'haptics' && !settings.haptics) triggerHaptic(10); };
  const handleProfileChange = (key, value) => { setProfile(prev => ({ ...prev, [key]: value })); };
  
  return (
    <div className="screen-content">
      <div className="screen-header-ace">
        <Ace size={60} equipped={equipped} float={false} />
        <div>
          <h2 className="screen-title">Settings</h2>
          <p className="screen-subtitle">Manage your app & profile</p>
        </div>
      </div>
      <div className="smart-card">
        <h3 className="settings-section-title">Emergency Info</h3>
        <button className="pop-btn secondary danger" style={{ width: '100%', marginBottom: '16px' }} onClick={onShowSOS}>View Emergency SOS Card</button>
        <div className="form-group"><label>Patient Name</label><input className="pop-input" value={profile.name} onChange={(e) => handleProfileChange('name', e.target.value)} /></div>
        <div className="form-group"><label>Date of Birth</label><input className="pop-input" value={profile.dob} onChange={(e) => handleProfileChange('dob', e.target.value)} /></div>
        <div className="form-group"><label>Blood Type</label><input className="pop-input" value={profile.bloodType} onChange={(e) => handleProfileChange('bloodType', e.target.value)} /></div>
        <div className="form-group"><label>Allergies</label><input className="pop-input" value={profile.allergies} onChange={(e) => handleProfileChange('allergies', e.target.value)} /></div>
        <div className="form-group"><label>Emergency Contact</label><input className="pop-input" value={profile.emergencyContact} onChange={(e) => handleProfileChange('emergencyContact', e.target.value)} /></div>
      </div>
      <div className="smart-card">
        <h3 className="settings-section-title">Preferences</h3>
        <div className="toggle-row"><div><strong>Haptic Feedback</strong><p>Vibrate on button presses</p></div><div className="toggle-switch" onClick={() => handleToggle('haptics')}><div className={`toggle-knob ${settings.haptics ? 'on' : ''}`}></div></div></div>
        <div className="toggle-row" style={{ marginTop: '12px' }}><div><strong>Caregiver Sharing</strong><p>Allow family to view status</p></div><div className="toggle-switch" onClick={() => handleToggle('caregiverShare')}><div className={`toggle-knob ${settings.caregiverShare ? 'on' : ''}`}></div></div></div>
      </div>
      <div className="smart-card">
        <h3 className="settings-section-title">Data Management</h3>
        <button className="pop-btn danger" onClick={onResetData}>Reset All App Data</button>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '12px', textAlign: 'center' }}>Warning: This will clear your XP, medications, and cosmetics.</p>
      </div>
    </div>
  );
};

export default SettingsScreen;