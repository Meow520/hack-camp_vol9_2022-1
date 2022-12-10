import "../../styles/App.css"

export const RandomMessage = ({ messageHistory }) => {
  return (
    <div className="h-5/6 my-5">
      {messageHistory.map((data, idx) => (
        <span className={`${data.randomLocation} ${"bg-white rounded-2xl px-3 text-xl"}`} key={idx}>
          {data ? data.message : null}
        </span>
      ))}
    </div>
  );
};
