import {
    loginState
} from "../../api/api_login"
export default {
    namespaced: true,
    state() {
        return {
            loginType: '',
            account: {
                id: ''
            },
            token: '',
            profile: '',
        }
    },
    mutations: {
        setLoginType(state, loginType) {
            state.loginType = loginType
        },
        setAccount(state, account) {
            state.account = account
        },
        setToken(state, token) {
            state.token = token
        },
        setProfile(state, profile) {
            state.profile = profile
        },
    },
    actions: {
        async getLoginState({
            commit
        }, nowTime, cookie) {
            const res = await loginState(nowTime, cookie)
            commit("setAccount", res.data.account)
            commit("setProfile", res.data.profile)
        }
    }
}