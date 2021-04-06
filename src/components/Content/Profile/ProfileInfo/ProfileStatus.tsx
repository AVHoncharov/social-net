import React, {
  ChangeEvent,
  ChangeEventHandler,
  FC,
  useEffect,
  useState,
} from "react";

type ProfileStatusType = {
  statusText: string;
  isOwner: boolean;
  updateStatus: (status: string) => void;
};

const ProfileStatus: FC<ProfileStatusType> = ({
  statusText,
  isOwner,
  ...props
}) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState<string>(statusText);

  useEffect(() => {
    setStatus(statusText);
  }, [statusText]);

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
      {isOwner ? (
        <div>
          {!editMode && (
            <div>
              <span onDoubleClick={activateEditMode}>{status || "------"}</span>
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
      ) : (
        status || "no status"
      )}
    </div>
  );
};

export default ProfileStatus;
