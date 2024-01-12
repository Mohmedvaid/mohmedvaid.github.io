const fingerCombinations = {
  // Individual fingers
  thumb: "https://giphy.com/embed/9Ai5dIk8xvBm0",
  indexFinger: "https://giphy.com/embed/U1ZG5CxukCD8nbLBdB",
  middleFinger: "https://giphy.com/embed/g4ODNTnpEBrmsghYtD",
  ringFinger: "https://giphy.com/embed/n7dICavAOkXxHreDb3",
  littleFinger: "https://giphy.com/embed/yxO7pd4zpTz2",

  // Combinations of two fingers
  thumb_indexFinger: "https://giphy.com/embed/88iYsvbegSUn9bSTF8",
  thumb_middleFinger: "https://giphy.com/embed/g4ODNTnpEBrmsghYtD",
  thumb_ringFinger: "https://giphy.com/embed/n7dICavAOkXxHreDb3",
  thumb_littleFinger: "https://giphy.com/embed/KH884zrbUlIqHWKLzE",
  indexFinger_middleFinger: "https://giphy.com/embed/cQNRp4QA8z7B6",
  indexFinger_ringFinger: "https://giphy.com/embed/vKHKDIdvxvN7vTAEOM",
  indexFinger_littleFinger: "https://giphy.com/embed/1qErVv5GVUac8uqBJU",
  middleFinger_ringFinger: "https://giphy.com/embed/nTfdeBvfgzV26zjoFP",
  middleFinger_littleFinger: "https://giphy.com/embed/nTfdeBvfgzV26zjoFP",
  ringFinger_littleFinger: "https://giphy.com/embed/JuX2sNywfh0McD0pLm",

  // Combinations of three or more fingers
  thumb_indexFinger_middleFinger: "https://giphy.com/embed/cHjEtESnmSim3w0CNq",
  thumb_indexFinger_ringFinger: "https://giphy.com/embed/vKHKDIdvxvN7vTAEOM",
  thumb_indexFinger_littleFinger: "https://giphy.com/embed/1qErVv5GVUac8uqBJU",
  indexFinger_middleFinger_ringFinger:
    "https://giphy.com/embed/UvychT0pHq2VjhHNSF",
  indexFinger_middleFinger_littleFinger:
    "https://giphy.com/embed/X9XPEqfgU8YSiOMpM6",
  middleFinger_ringFinger_littleFinger:
    "https://giphy.com/embed/EsFI67hfi6B4hmdeCL",
  thumb_middleFinger_ringFinger: "https://giphy.com/embed/X9XPEqfgU8YSiOMpM6",
  thumb_middleFinger_littleFinger: "https://giphy.com/embed/X9XPEqfgU8YSiOMpM6",
  thumb_ringFinger_littleFinger: "https://giphy.com/embed/X9XPEqfgU8YSiOMpM6",

  // Combinations of four fingers
  thumb_indexFinger_middleFinger_ringFinger:
    "https://giphy.com/embed/TDMZWt69CBjfMYvZHG",
  indexFinger_middleFinger_ringFinger_littleFinger:
    "https://giphy.com/embed/09HAftvLeRDew2HWEM",

  // All fingers
  all: "https://giphy.com/embed/3oKIPbOaTdyWc8iUWA",
  four: "https://giphy.com/embed/3oKIPbOaTdyWc8iUWA",

  // Default case
  default: "https://giphy.com/embed/r0q8JfQLzevKR24Anc",
};

const getFingerGestureGif = (detectedFingers) => {
  // Convert the array of fingers to a Set for efficient lookup
  if (detectedFingers.length === 5) return fingerCombinations["all"];

  const fingerSet = new Set(detectedFingers);

  // Find a matching key in fingerCombinations
  for (const key in fingerCombinations) {
    const keyFingers = key.split("_");
    if (
      keyFingers.every((kf) => fingerSet.has(kf)) &&
      keyFingers.length === fingerSet.size
    ) {
      return fingerCombinations[key];
    }
  }

  if (detectedFingers.length === 4) return fingerCombinations["four"];

  return fingerCombinations["default"];
};

export default getFingerGestureGif;
