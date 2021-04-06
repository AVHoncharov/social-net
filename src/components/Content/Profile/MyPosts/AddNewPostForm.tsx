import React from 'react'
import { InjectedFormProps, reduxForm } from 'redux-form';
import { maxLengthCreator } from '../../../../utils/validators/validators';
import { createField, Element, GetStringKeys } from "./../../../common/FormsControls/FormsControls";

const maxLength50 = maxLengthCreator(50);
const Textarea = Element("textarea");

type AddNewPostFormType = {

}

export type AddPostFromValueType = {
  newPostText: string
}

type AddPostFromValuesKeysType = GetStringKeys<AddPostFromValueType>;

const AddNewPostForm: React.FC<InjectedFormProps<AddPostFromValueType, AddNewPostFormType> & AddNewPostFormType> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      {createField<AddPostFromValuesKeysType>("Enter your new post text", "newPostText",[maxLength50],Textarea)}
      <div>
        <button>New Post</button>
      </div>
    </form>
  );
};

export const ReduxAddNewPostForm = reduxForm<AddPostFromValueType, AddNewPostFormType>({ form: "newPostTextForm" })(
  AddNewPostForm
);