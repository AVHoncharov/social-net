import { APIResponseType, ResultCodeEnum } from "../api/api";
import { usersApi } from "../api/users-api";
import { actions, follow, unfollow } from "./users-reducer";
jest.mock("../api/users-api");

const userApiMock = usersApi as jest.Mocked<typeof usersApi>;

const result: APIResponseType = {
  resultCode: ResultCodeEnum.Success,
  messages: [],
  data: {},
}

userApiMock.follow.mockReturnValue(Promise.resolve(result))
userApiMock.unfollow.mockReturnValue(Promise.resolve(result))

const dispatchMock = jest.fn();
const getStateMock = jest.fn();

beforeEach(()=> {
  dispatchMock.mockClear();
  getStateMock.mockClear();
  userApiMock.follow.mockClear();
  userApiMock.unfollow.mockClear();
})

test("success follow thunk", async () => {
  const thunk = follow(1);
  userApiMock.follow.mockResolvedValue(Promise.resolve(result))

  await thunk(dispatchMock, getStateMock,{});
  expect(dispatchMock).toBeCalledTimes(3);
  expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toogleIsFollowingProgress(true,1));
  expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.followSuccess(1))
  expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toogleIsFollowingProgress(false, 1))

})

test("success unfollow thunk", async () => {
  const thunk = unfollow(1);
  userApiMock.unfollow.mockResolvedValue(Promise.resolve(result))

  await thunk(dispatchMock, getStateMock,{});

  expect(dispatchMock).toBeCalledTimes(3);
  expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toogleIsFollowingProgress(true,1));
  expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.unfollowSuccess(1))
  expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toogleIsFollowingProgress(false, 1))

})
