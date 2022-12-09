import background from "../../images/triangle.png";

export const TriangleContainer = ({ children }) => {
  return (
    <div
      className="w-screen h-screen justify-center flex text-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${background})` }}>
      {children}
    </div>
  );
};
