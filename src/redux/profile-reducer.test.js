import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state = {
  posts: [
    { id: 1, message: "How are you?", likeCount: 5 },
    { id: 2, message: "Follow the whire rabbit", likeCount: 10 },
  ],
  profile: null,
  status: "",
};

test("length of posts should be incremented", () => {
  //1. test data
  let action = addPostActionCreator("it-kamasutra.com");
  //2. action
  let newState = profileReducer(state, action);

  //3. expectation
  expect(newState.posts.length).toBe(3); 
});

test("message of new post should be correct", () => {
  //1. test data
  let action = addPostActionCreator("it-kamasutra.com");
  //2. action
  let newState = profileReducer(state, action);

  //3. expectation
  expect(newState.posts[2].message).toBe("it-kamasutra.com"); 
});

it("after deleting length of messages should be decremented", () => {
  //1. test data
  let action = deletePost(1);
  //2. action
  let newState = profileReducer(state, action);

  //3. expectation
  expect(newState.posts.length).toBe(1); 
});

it(`after deleting length of messages shouldn't be decremented if id was incorrect`, () => {
  //1. test data
  let action = deletePost(1000);
  //2. action
  let newState = profileReducer(state, action);

  //3. expectation
  expect(newState.posts.length).toBe(2); 
});