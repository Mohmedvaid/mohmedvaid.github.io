const analyzeFingers = (landmarks) => {
  const fingerJoints = {
    thumb: [0, 1, 2, 3, 4],
    indexFinger: [0, 5, 6, 7, 8],
    middleFinger: [0, 9, 10, 11, 12],
    ringFinger: [0, 13, 14, 15, 16],
    littleFinger: [0, 17, 18, 19, 20],
  };

  let extendedFingers = [];

  for (const finger in fingerJoints) {
    const joints = fingerJoints[finger];
    const isExtended = isFingerExtended(joints, landmarks, finger);
    if (isExtended) {
      extendedFingers.push(finger);
    }
  }

  return extendedFingers;
};

const isFingerExtended = (joints, landmarks, fingerName) => {
  if (fingerName === "thumb") {
    // Special logic for thumb
    const thumbTip = landmarks[joints[joints.length - 1]];
    const indexBase = landmarks[5]; // Base of the index finger
    return thumbTip[0] > indexBase[0]; // Check if thumb tip is to the left of the index base (for right hand)
  } else {
    // For other fingers
    const tip = landmarks[joints[joints.length - 1]];
    const bottom = landmarks[joints[joints.length - 2]];
    return tip[1] < bottom[1]; // Y-coordinate comparison for other fingers
  }
};

export default analyzeFingers;
