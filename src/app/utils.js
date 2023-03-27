// AQUÍ CREO FUNCIÓN QUE OBTIENE EL ID DE LA NAVE A PARTIR DE LA URL QUE LE PASARÉ

export const cutUrl = (urlComplete) => {
  const id = urlComplete.slice(-2, -1);
  return id;
};
