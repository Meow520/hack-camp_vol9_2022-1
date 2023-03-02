import "../../styles/App.css"

export const TriangleContainer = ({ children }) => {
  return (
    <div
    id="triangle"
      className="w-screen h-screen justify-center flex text-center bg-no-repeat bg-cover"
    >
      {children}
    </div>
  );
};
