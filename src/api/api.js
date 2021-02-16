import * as axios from "axios";

const instance = axios.create({
  baseURL:'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'api-key': '642dd878-8a02-409c-874f-eb31899a6794'
  }
});

export const authApi = {
  authMe(){
   return instance.get(
      `auth/me`
    ).then(response => response.data)
  }
}

export const usersApi = {
  
  getUsers(currentPage =1 , pageSize = 10) {
    return instance.get(
      `users?page=${currentPage}&count=${pageSize}`)
    .then(response => response.data);
  },
};

export const profileApi = {

  getProfile(userId =2){
    return instance.get(
      `profile/${userId}`)
      .then(response => response.data)
  }
};

export const followApi = {
  follow(userId){
    return instance.post(
      `follow/${userId}`,{ posted_data: '' }
    ).then(response=>response.data)
  },

  unfollow(userId){
    return instance.delete(
      `follow/${userId}`
    ).then(response=>response.data)
  }

};





