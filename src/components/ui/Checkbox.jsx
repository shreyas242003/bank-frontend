import CheckImage from "@/assets/images/icon/ck-white.svg";
import React, { useId } from "react";

const Checkbox = React.forwardRef(
  (
    {
      disabled,
      label,
      activeClass = "ring-black-500  bg-slate-900 dark:bg-slate-700 dark:ring-slate-700 ",
      ...props
    },
    ref
  ) => {
    const id = useId();
    return (
      <label
        className={`flex items-center ${
          disabled ? " cursor-not-allowed opacity-50" : "cursor-pointer"
        }`}
        id={id}
      >
        <input
          type="checkbox"
          className="hidden"
          checked={props.value}
          htmlFor={id}
          disabled={disabled}
          {...props}
        />
        <span
          className={`h-4 w-4 border flex-none border-slate-100 dark:border-slate-800 rounded 
        inline-flex ltr:mr-3 rtl:ml-3 relative transition-all duration-150
        ${
          props.value
            ? activeClass + " ring-2 ring-offset-2 dark:ring-offset-slate-800 "
            : "bg-slate-100 dark:bg-slate-600 dark:border-slate-600"
        }
        `}
        >
          {props.value && (
            <img
              src={CheckImage}
              alt=""
              className="h-[10px] w-[10px] block m-auto"
            />
          )}
        </span>
        <span className="text-slate-500 dark:text-slate-400 text-sm leading-6 capitalize">
          {label}
        </span>
      </label>
    );
  }
);

Checkbox.displayName = "CheckBox";

export default Checkbox;
