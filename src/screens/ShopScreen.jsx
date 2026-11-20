import React, { useState } from 'react';
import Ace from '../components/Ace';
import { triggerHaptic, SHOP_ITEMS } from '../utils/constants';

const ShopScreen = ({ wallet, ownedItems, equippedItems, onBuyItem, onEquipItem }) => {
  const [tryOn, setTryOn] = useState(equippedItems);
  const handleTryOn = (item) => { setTryOn(prev => ({ ...prev, [item.slot]: item.id })); triggerHaptic(8); };
  const handleBuyOrEquip = (item) => {
    const isOwned = ownedItems.includes(item.id);
    if (isOwned) { onEquipItem(item); } else { onBuyItem(item); }
    setTryOn(prev => ({ ...prev, [item.slot]: item.id }));
  };

  return (
    <div className="screen-content">
      <div className="shop-header">
        <h2 className="screen-title">Ace's Wardrobe</h2>
        <div className="wallet-badge">🪙 {wallet} XP</div>
      </div>
      <div className="shop-mannequin">
        <Ace size={140} equipped={tryOn} />
        <div className="speech-bubble">Tap an item to try it on!</div>
      </div>
      <div className="shop-grid">
        {SHOP_ITEMS.map(item => {
          const isOwned = ownedItems.includes(item.id);
          const isEquipped = equippedItems[item.slot] === item.id;
          const canAfford = wallet >= item.cost;
          const isTryOn = tryOn[item.slot] === item.id;
          return (
            <div key={item.id} className={`shop-item-card ${isTryOn ? 'trying-on' : ''}`}>
              <div className="shop-item-icon">{item.icon}</div>
              <h3 className="shop-item-name">{item.name}</h3>
              <p className="shop-item-cost">🪙 {item.cost} XP</p>
              <button className="shop-btn try-on-btn" onClick={() => handleTryOn(item)} style={{ marginBottom: '8px', background: 'var(--surface-light)', color: 'var(--text-sec)', border: '1px solid var(--border-color)', boxShadow: 'none' }}>Try On</button>
              {isEquipped ? (
                <button className="shop-btn equipped" disabled>Equipped</button>
              ) : isOwned ? (
                <button className="shop-btn owned" onClick={() => handleBuyOrEquip(item)}>Equip</button>
              ) : (
                <button className={`shop-btn ${!canAfford ? 'disabled' : ''}`} onClick={() => canAfford && handleBuyOrEquip(item)} disabled={!canAfford}>{canAfford ? 'Buy' : 'Need XP'}</button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShopScreen;