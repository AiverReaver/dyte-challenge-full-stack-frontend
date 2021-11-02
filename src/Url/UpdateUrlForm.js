import React from "react";
import { useForm } from "../utils/CustomHooks";

export const UpdateUrlForm = ({
  oldShortId,
  oldActualurl,
  onUpdateItem,
  onCancel,
}) => {
  const { formState, onChange } = useForm({
    newShortId: oldShortId,
    newActualUrl: oldActualurl,
  });

  const { newShortId, newActualUrl } = formState;

  return (
    <form
      className="form-inline"
      onSubmit={(event) => {
        event.preventDefault();
        onUpdateItem(formState);
      }}
    >
      <input
        type="text"
        placeholder="Enter Shorten Url"
        name="newShortId"
        value={newShortId}
        onChange={onChange}
      />

      <input
        type="text"
        placeholder="Enter Actual Url"
        name="newActualUrl"
        value={newActualUrl}
        onChange={onChange}
      />
      <input type="submit" value="Save" />
      <input type="button" value="Cancel" onClick={onCancel} />
    </form>
  );
};
