import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import { useSelector } from "react-redux";
import {
  getIsFetching
} from "../../../redux/users-selectors";
import { UsersList } from "./UsersList";

export const UsersPage: React.FC = (props) => {
  const isFetching = useSelector(getIsFetching);
  return (
    <>
     {isFetching ? <Preloader /> : null}
        <UsersList />
    </>
  )
}
