import React, { ChangeEvent, ChangeEventHandler, FC, useEffect, useState } from "react";

type ProfileStatusType = {
  statusText: string,
  editMode: boolean
  updateStatus: (status: string) => void
}

const ProfileStatus: FC<ProfileStatusType> = ({statusText, ...props}) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState<string>(statusText);

  useEffect(()=>{
    setStatus(status);
  },[status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      {!editMode && (
        <div>
          <span onDoubleClick={activateEditMode}>
            {status || "------"}
          </span>
        </div>
      )}

      {editMode && (
        <div>
          <input
            onChange={onStatusChange}
            onBlur={deactivateEditMode}
            autoFocus={true}
            value={status}
          ></input>
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;
