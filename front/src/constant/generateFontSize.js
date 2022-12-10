export const generateFontSize = ({ score }) => {
  if (score < 0.3) {
    return "text-md text-red-400";
  } else if (score < 0.7) {
    return "text-xl";
  } else if (score < 0.85) {
    return "text-2xl";
  } else {
    return "text-4xl";
  }
};
