export const capitalize = (text: string) => {
  if (!text || !text.length) return;
  const len = text.length;
  return text[0].toUpperCase() + text.slice(1, len);
};
