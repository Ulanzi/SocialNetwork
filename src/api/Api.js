import * as axios from "axios";

/*instance это базовая настройка запроса*/
const instance = axios.create({

    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { "api-key" : "237de4a2-60b4-4d3d-a09d-4c3e2f0c5c52"}

});

export const usersAPI = {

    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },

    follow(userId) {
        return instance.post(`follow/${userId}`)
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please profileApi object.') /*раньше тут сидел getProfile и мы сделали пометку что вынесли его */
        return profileAPI.getProfile(userId);
    },
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status}); /*отправляем на сервак объект status он так называется исходя из документации и он будет содержать наш новый статус*/
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`);      /*для get и delete запроса нельза отправлять данные*/
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});    /*для post и put можно отпр данные например email, password*/
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}


