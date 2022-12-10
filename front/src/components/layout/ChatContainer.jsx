import background from "../../images/chatbackground.png";

export const ChatContainer = ({ children }) => {
  return (
    <div
      className="w-screen h-screen justify-center flex text-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${background})` }}
    >
      {children}
    </div>
  );
};
