export const triggerHaptic = (ms = 10) => {
  try {
    const settings = JSON.parse(localStorage.getItem('medace_settings')) || { haptics: true };
    if (settings.haptics && navigator.vibrate) navigator.vibrate(ms);
  } catch (e) {
    if (navigator.vibrate) navigator.vibrate(ms);
  }
};

export const MOCK_MED_DB = {
  '00378384101': { name: 'Amoxicillin', dose: '250mg', schedule: '3x daily', timeOfDay: 'Afternoon', color: '#06B6D4' },
  '50090305010': { name: 'Metformin', dose: '500mg', schedule: 'Twice daily', timeOfDay: 'Morning', color: '#10B981' },
  '012345678905': { name: 'Ibuprofen', dose: '200mg', schedule: 'Every 6 hours', timeOfDay: 'As Needed', color: '#F59E0B' }
};

export const QUOTES = [
  { text: "The greatest wealth is health.", author: "Virgil" },
  { text: "Take care of your body. It's the only place you have to live.", author: "Jim Rohn" },
  { text: "He who has health has hope; and he who has hope has everything.", author: "Thomas Carlyle" },
  { text: "A good laugh and a long sleep are the best cures in the doctor's book.", author: "Irish Proverb" },
  { text: "Health is not valued till sickness comes.", author: "Thomas Fuller" },
  { text: "The groundwork for all happiness is good health.", author: "Leigh Hunt" },
  { text: "Every dose counts. You're doing great!", author: "Ace 🦍" }
];

export const SHOP_ITEMS = [
  { id: 'shades', name: 'Cool Shades', cost: 50, slot: 'glasses', icon: '🕶️' },
  { id: 'monocle', name: 'Fancy Monocle', cost: 80, slot: 'glasses', icon: '🧐' },
  { id: 'bowtie', name: 'Red Bowtie', cost: 30, slot: 'accessory', icon: '🎀' },
  { id: 'stethoscope', name: 'Doctor', cost: 120, slot: 'accessory', icon: '🩺' },
  { id: 'topHat', name: 'Top Hat', cost: 100, slot: 'hat', icon: '🎩' },
  { id: 'crown', name: 'Golden Crown', cost: 250, slot: 'hat', icon: '👑' },
  { id: 'rainbowStache', name: 'Rainbow Stache', cost: 150, slot: 'mustache', icon: '🌈' }
];