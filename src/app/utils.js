// FUNCTION THAT GETS THE COMPLETE URL AND EXTRACTS THE STARSHIP ID, SENT BACK TO THE INDIVIDUAL SHIP CARD COMPONENT

export const cutUrl = (urlComplete) => {
  const regEx = /(?<=\/)\d+(?=\/)/gm;
  const id = parseInt(urlComplete.match(regEx));
  return id;
};

export const cutActualPage = (url) => {
  const regEx = /(?<=page=)\d+/gm;
  const pageNum = parseInt(url.match(regEx));
  return pageNum;
};