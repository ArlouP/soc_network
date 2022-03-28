import * as axios from 'axios';

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: { 'API-KEY': 'b4231545-34ed-44fa-a91e-ecaf22644a17' }
});

export const api = {

	getUsers(rcarentPage, pageSize) {
		return instance.get(`users?page=${rcarentPage}&count=${pageSize}`).then(response => response.data)
	},

	follow(id) {
		return instance.post(`follow/${id}`).then(response => response.data)
	},

	unfollow(id) {
		return instance.delete(`follow/${id}`).then(response => response.data)
	},

}