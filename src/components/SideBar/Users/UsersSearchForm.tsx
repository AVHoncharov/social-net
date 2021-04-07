import React from "react";
import { Field, Form, Formik } from "formik";
import { UsersFilterType } from "../../../redux/users-reducer";
import { formValueSelector } from "redux-form";
import { useSelector } from "react-redux";
import { getUsersFilter } from "../../../redux/users-selectors";

const usersSearchFromValidate = (values: any) => {
  const errors = {};
  return errors;
};

type UsersSearchFormPropsType = {
  onFilterChanged: (filter: UsersFilterType) => void;
};

type FriendFormType = "true" | "false" | "null";

type FormType = {
  term: string;
  friend: FriendFormType;
};

const UsersSearchForm: React.FC<UsersSearchFormPropsType> = React.memo(
  (props) => {
    const filter = useSelector(getUsersFilter);

    const submit = (
      values: FormType,
      { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
    ) => {
      const filter: UsersFilterType = {
        term: values.term,
        friend:
          values.friend === "null"
            ? null
            : values.friend === "true"
            ? true
            : false,
      };

      props.onFilterChanged(filter);
      setSubmitting(false);
    };

    return (
      <div>
        <Formik
          enableReinitialize={true}
          initialValues={{
            term: filter.term,
            friend: String(filter.friend) as FriendFormType,
          }}
          validate={usersSearchFromValidate}
          onSubmit={submit}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="text" name="term" />
              <Field as="select" name="friend">
                <option value="null">All</option>
                <option value="true">Folowed only</option>
                <option value="false">Unfollowed only</option>
              </Field>
              <button type="submit" disabled={isSubmitting}>
                filter
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
);

export default UsersSearchForm;
