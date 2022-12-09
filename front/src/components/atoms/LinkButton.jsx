// 使い方
// <LinkButton
//   label="チャットへ"
//   color="bg-blue-500 hover:bg-blue-700 text-white"
//   path="/chat"
// />

export const LinkButton = ({ label, color, path, disabled }) => {
  const className = `${color} ${"items-center rounded-md px-4 py-2 w-10"}`;

  return (
    <a href={path} className="w-10">
      <span className={className} tabIndex={-1} aria-disabled={disabled}>
        {label}
      </span>
    </a>
  );
};
