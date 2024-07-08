import Icon from "@/components/ui/Icon";

const Badge = ({
  className = "bg-danger-500 text-white",
  label,
  icon,
  onClick = null,
  children,
}) => {
  return (
    <span className={`badge ${className}`} onClick={onClick}>
      {!children && (
        <span className="inline-flex items-center">
          {icon && (
            <span className="inline-block ltr:mr-1 rtl:ml-1">
              <Icon icon={icon} />
            </span>
          )}
          {label}
        </span>
      )}
      {children && <span className="inline-flex items-center">{children}</span>}
    </span>
  );
};

export default Badge;
