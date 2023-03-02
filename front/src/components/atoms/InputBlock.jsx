import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";

export const InputBlock = ({
  // ラベル
  text,
  subText,
  isRequired,
  //フィールド
  type,
  name,
  options,
  placeholder,
  defaultValue,
  unit,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const colorStyle = errors[name]
    ? "bg-red-100 focus:outline-red-200"
    : "border-gray-600 focus:bg-pink-100 focus:outline-pink-200 dark:focus:bg-indigo-100 dark:focus:outline-indigo-200 dark:bg-gray-600";

  return (
    <div className="mb-5">
      <label htmlFor={name} className="mb-2">
        <span className="text-sm dark:text-gray-100">
          {text}
          {isRequired && <span className="text-red-600">*</span>}
        </span>
        {subText && <div className="text-xs text-gray-400">{subText}</div>}
      </label>
      <div className="text-xs text-red-600 my-2">
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => <p>{message}</p>}
        />
      </div>
      {unit ? (
        <div className="flex items-center">
          <input
            className={`${colorStyle} ${"border rounded px-3 py-2 text-sm mr-4 w-30"}`}
            id={name}
            type={type}
            {...register(name, options)}
            placeholder={placeholder}
            defaultValue={defaultValue}
          />
          {unit && <span className="text-sm dark:text-gray-100">{unit}</span>}
        </div>
      ) : (
        <input
          className={`${colorStyle} ${"border rounded px-3 py-2 text-sm mr-4 w-full"}`}
          id={name}
          type={type}
          {...register(name, options)}
          placeholder={placeholder}
          defaultValue={defaultValue}
        />
      )}
    </div>
  );
};
