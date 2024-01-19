const readTimer = 300; // 0.3 seconds
const readTimerInSec = readTimer / 1000;
const videoPermissionDeniedMessage = `Video camera access needed.`;
const detectionNotice = `Detection runs every ${readTimerInSec} second for CPU efficiency. Please be patient.`;
const funActiviyPrivacyNotice = `Explore the fun of AI with this Hand Gesture Detection! Just wave your hand in front of the camera to interact with the screen. Experience real-time AI recognition with full privacy – no data is saved or tracked. Enjoy!`;

module.exports = {
  readTimer,
  videoPermissionDeniedMessage,
  detectionNotice,
  funActiviyPrivacyNotice,
};
