import { useId, useState } from "react";
import Select from "react-select";

export const InputNormal = ({
  label,
  classLabel = "form-label",
  parentClass = "",
  className = "",
  onChange,
  ...props
}) => {
  const id = useId();
  const [timeoutId, setTimeoutId] = useState(null);
  const debouncerHandle = (event) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const newTimeoutId = setTimeout(() => {
      onChange(event);
    }, 500);

    setTimeoutId(newTimeoutId);
  };

  return (
    <div className={`${parentClass}`}>
      {label && (
        <label htmlFor={id} className={`block capitalize ${classLabel}`}>
          {label}
        </label>
      )}
      <div className={`relative`}>
        <input
          className={`form-control py-2 ${className}  `}
          id={id}
          onChange={debouncerHandle}
          {...props}
        />
      </div>
    </div>
  );
};

export const DropDown = ({ label, parentClass = "", ...props }) => {
  const id = useId();
  const styles = {
    multiValue: (base, state) => {
      return state.data.isFixed ? { ...base, opacity: "0.5" } : base;
    },
    multiValueLabel: (base, state) => {
      return state.data.isFixed
        ? { ...base, color: "#626262", paddingRight: 6 }
        : base;
    },
    multiValueRemove: (base, state) => {
      return state.data.isFixed ? { ...base, display: "none" } : base;
    },
    option: (provided, state) => ({
      ...provided,
      fontSize: "14px",
    }),
  };
  return (
    <div className={parentClass}>
      {label && (
        <label htmlFor={id} className="form-label ">
          {label}
        </label>
      )}
      <Select
        styles={styles}
        className="react-select"
        classNamePrefix="select"
        id={id}
        {...props}
      />
    </div>
  );
};
