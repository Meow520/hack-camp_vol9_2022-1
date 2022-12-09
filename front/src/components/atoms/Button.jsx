// 使い方
// <Button 
//   label="Submit"
//   color="bg-blue-500 hover:bg-blue-700 text-white"
//   type="submit"
//   onClick={() => {console.log('hi')}}
//   size="w-10"
// />

export const Button = ({
  label,
  color,
  type,
  form,
  onClick,
  disabled,
  size,
}) => {
  const className = `${size} ${color} ${"items-center rounded-md px-4 py-2"}`;
  return (
    <button
      type={type}
      className={className}
      disabled={disabled}
      onClick={onClick}
      form={form}>
      {label}
    </button>
  );
};

