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
        changeSetSearchList({
            commit
        }, data) {
            commit('setSearchList', data)
        }
    }
}