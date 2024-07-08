import { ImCross } from "react-icons/im";

const Fileinput = ({
  name,
  label = "Browse",
  placeholder = "Choose a file or drop it here...",
  multiple,
  preview,
  className = "custom-class",
  id,
  selectedFile,
  badge,
  setSelectedFile,
  error,
  description = null,
}) => {
  function closeImageHandler() {
    setSelectedFile(null);
  }
  const onChange = (e) => {
    if (multiple) {
      const files = e.target.files;
      const filesArray = Array.from(files).map((file) => file);
      setSelectedFile(filesArray);
    } else {
      setSelectedFile(e.target.files[0]);
    }
  };
  return (
    <div className="filegroup">
      <label>
        <input
          type="file"
          onChange={onChange}
          className="bg-red-400 w-full hidden"
          name={name}
          id={id}
          multiple={multiple}
          placeholder={placeholder}
        />
        <div
          className={`w-full h-[40px] file-control flex items-center ${className}`}
        >
          {!multiple && (
            <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
              {selectedFile && (
                <div
                  className={
                    badge ? " badge-title" : "text-slate-900 dark:text-white"
                  }
                  onClick={closeImageHandler}
                >
                  <div className="flex flex-col-2 gap-44">
                    {selectedFile.name}
                  </div>
                </div>
              )}
              {!selectedFile && (
                <span className="text-slate-400">{placeholder}</span>
              )}
            </span>
          )}

          {multiple && (
            <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
              {selectedFile.length > 0 && (
                <span
                  className={
                    badge ? " badge-title" : "text-slate-900 dark:text-white"
                  }
                >
                  {selectedFile.length > 0
                    ? selectedFile.length + " files selected"
                    : ""}
                </span>
              )}
              {selectedFile.length === 0 && (
                <span className="text-slate-400">{placeholder}</span>
              )}
            </span>
          )}

          <span className="file-name flex-none cursor-pointer border-l px-4 border-slate-200 dark:border-slate-700 h-full inline-flex items-center bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 text-base rounded-tr rounded-br font-normal">
            {label}
          </span>
        </div>
      </label>

      {!multiple && preview && selectedFile && (
        <div>
          <div>
            <div className="w-full justify-content mt-4">
              <ImCross onClick={closeImageHandler} />
            </div>
            <div className="w-[200px] h-[200px] mx-auto mt-2">
              <img
                src={selectedFile ? URL.createObjectURL(selectedFile) : ""}
                className="w-full h-full block rounded object-contain border p-2  border-slate-200"
                alt={selectedFile?.name}
              />
            </div>
          </div>
        </div>
      )}

      {multiple && preview && selectedFile.length > 0 && (
        <div className="flex flex-wrap space-x-5 rtl:space-x-reverse">
          {selectedFile.map((file, index) => (
            <div
              className="xl:w-1/5 md:w-1/3 w-1/2 rounded mt-6 border p-2  border-slate-200"
              key={index}
            >
              <img
                src={file ? URL.createObjectURL(file) : ""}
                className="object-cover w-full h-full rounded"
                alt={file?.name}
              />
            </div>
          ))}
        </div>
      )}

      {description && (
        <div className={`text-gray-400 block text-[11px]`}>{description}</div>
      )}
      {error && (
        <div className={` mt-2 text-danger-500 block text-sm`}>
          {error.message}
        </div>
      )}
    </div>
  );
};

export default Fileinput;
