import { useState } from "react";

export const MemberList = ({ member }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="relative inline-block text-left pl-10">
        <div>
          <button
            type="button"
            className=" border border-gray-300 opacity-100 bg-white dark:bg-gray-600 shadow-sm flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-400 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
            id="options-menu"
            onClick={handleClick}
          >
            Member
            <svg
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"></path>
            </svg>
          </button>
        </div>
        {open && (
          <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-600 ring-1 ring-black ring-opacity-5 opacity-100">
            <div
              className="py-1 "
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {member.map((member) => {
                return (
                  <div
                    className="block px-4 py-2 text-md text-gray-400 hover:bg-gray-100 hover:text-gray-600
                     dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-400 dark:bg-gray-700 opacity-70"
                  >
                    <span className="flex flex-col">
                      <span>{member.name}</span>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
