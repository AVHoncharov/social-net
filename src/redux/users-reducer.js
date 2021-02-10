const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
   users: [
//     {
//       id: 1,
//       photoUrl: 'https://img.pngio.com/avatar-icon-of-flat-style-available-in-svg-png-eps-ai-icon-png-avatar-256_256.png',
//       followed: true,
//       fullName: "Dmitriy",
//       status: "I am the Boss",
//       location: { city: "Minsk", country: "Belarus" },
//     },
//     {
//       id: 2,
//       photoUrl: 'https://img.pngio.com/avatar-icon-of-flat-style-available-in-svg-png-eps-ai-icon-png-avatar-256_256.png',
//       followed: false,
//       fullName: "Alex",
//       status: "Bu bu kaka",
//       location: { city: "Moskow", country: "Russia" },
//     },
//     {
//       id: 3,
//       photoUrl: 'https://img.pngio.com/avatar-icon-of-flat-style-available-in-svg-png-eps-ai-icon-png-avatar-256_256.png',
//       followed: true,
//       fullName: "Andrew",
//       status: "I am the status",
//       location: { city: "Pinsk", country: "Belarus" },
//     },
//     {
//       id: 4,
//       photoUrl: 'https://img.pngio.com/avatar-icon-of-flat-style-available-in-svg-png-eps-ai-icon-png-avatar-256_256.png',
//       followed: true,
//       fullName: "Petr",
//       status: "The best status in the World",
//       location: { city: "New York", country: "USA" },
//     },
   ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    }

    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    }

    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] };
    }

    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
