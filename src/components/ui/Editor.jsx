import { Controller } from "react-hook-form";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import classNames from "classnames";
import { randNum } from "../../utils/helper";

const Editor = ({ name, control, label, error, setValue, getValues }) => {
  return (
    <div
      className={classNames({
        hasError: error,
      })}
    >
      {label && (
        <label className="form-label" htmlFor="date-time-picker">
          {label}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field: { ref, value, ...field } }) => {
          return (
            <div tabIndex={randNum(0, 8)} ref={ref}>
              <CKEditor
                {...field}
                editor={ClassicEditor}
                error={error}
                value={value}
                // innerRef={ref}
                defaultValue={value}
                name={name}
                data={getValues[name]}
                onReady={(editor) => {
                  editor.editing.view.change((writer) => {
                    writer.setStyle(
                      "height",
                      "150px",
                      editor.editing.view.document.getRoot()
                    );
                  });
                  editor.setData(value);
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setValue(name, data);
                }}
              />
            </div>
          );
        }}
      />

      {error && <span className="text-red-500">{error.message}</span>}
    </div>
  );
};

export default Editor;
