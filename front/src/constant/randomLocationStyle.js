export const randomLocationStyle = () => {
  const random = Math.floor(Math.random() * 30) + 1;

  switch (random) {
    case 1:
      return "absolute top-96 left-96";
    case 2:
      return "absolute top-32 right-96";
    case 3:
      return "absolute bottom-96 left-96";
    case 4:
      return "absolute bottom-80 right-12";
    case 5:
      return "absolute top-52 left-52";
    case 6:
      return "absolute top-80 left-20";
    case 7:
      return "absolute top-24 right-32";
    case 8:
      return "absolute bottom-96 left-24";
    case 9:
      return "absolute bottom-96 right-40";
    case 10:
      return "absolute top-20 left-36";
    case 11:
      return "absolute top-20 right-48";
    case 12:
      return "absolute bottom-96 left-52";
    case 13:
      return "absolute bottom-32 right-96";
    case 14:
      return "absolute top-40 left-96";
    case 15:
      return "absolute top-40 right-96";
    case 16:
      return "absolute bottom-36 left-96";
    case 17:
      return "absolute bottom-80 right-12";
    case 18:
      return "absolute top-56 left-48";
    case 19:
      return "absolute top-24 left-12";
    case 20:
      return "absolute top-24 right-8";
    case 21:
      return "absolute bottom-32 left-12";
    case 22:
      return "absolute bottom-32 right-12";
    case 23:
      return "absolute top-96 left-52";
    case 24:
      return "absolute top-40 right-52";
    case 25:
      return "absolute bottom-96 left-52";
    case 26:
      return "absolute bottom-96 right-52";
    case 27:
      return "absolute top-52 left-96";
    case 28:
      return "absolute top-32 right-96";
    case 29:
      return "absolute bottom-40 left-96";
    case 30:
      return "absolute bottom-80 right-12";
    default:
      return "absolute top-96 left-96";
  }
};
