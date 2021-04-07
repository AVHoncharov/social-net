import usersReducer, { actions, InitialStateType } from "./users-reducer";
let state: InitialStateType;

beforeEach(() => {
  state = {
    users: [
      {
        id: 0,
        name: "User 1",
        followed: false,
        photos: { small: null, large: null },
        status: "Status for User 1",
      },
      {
        id: 1,
        name: "User 2",
        followed: false,
        photos: { small: null, large: null },
        status: "Status for User 2",
      },
      {
        id: 2,
        name: "User 3",
        followed: true,
        photos: { small: null, large: null },
        status: "Status for User 3",
      },
      {
        id: 3,
        name: "User 4",
        followed: true,
        photos: { small: null, large: null },
        status: "Status for User 4",
      },
    ],
    pageSize: 25,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
  };
});

test("follow success", () => {
  //user-reducer
  const newState = usersReducer(state, actions.followSuccess(1));
  expect(newState.users[0].followed).toBeFalsy();
  expect(newState.users[1].followed).toBeTruthy();
});

test("unfollow success", () => {
  //user-reducer
  const newState = usersReducer(state, actions.unfollowSuccess(3));
  expect(newState.users[2].followed).toBeTruthy();
  expect(newState.users[3].followed).toBeFalsy();
});
