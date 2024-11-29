import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

const vuexPersist = new VuexPersist({
    key: 'vuex',
    storage: window.localStorage,
    reducer: state => ({
        user: state.user,
        completion: state.completion,
        address: state.address,
        inspection: state.inspection,
        offlineInspections: state.offlineInspections,
        darkTheme: state.darkTheme
    })
})

// Initialize dark theme from localStorage or default to false
const initialDarkTheme = localStorage.getItem('dark-theme') === 'true'

export default new Vuex.Store({
    state: {
        user: {},
        completion: false,
        address: 0,
        inspection: 0,
        offlineInspections: [],
        darkTheme: initialDarkTheme
    },
    getters: {
        darkTheme: state => {
            return state.darkTheme
        },
        user: state => state.user,
        userID: state => (state.user != undefined && state.user != null && state.user.id != undefined && state.user.id != null) ? state.user.id : false,
        userNotifications: state => (state.user.settings != undefined && state.user.settings.notifications != undefined) ? state.user.settings.notifications : false,
        userSounds: state => (state.user.settings != undefined && state.user.settings.sounds != undefined) ? state.user.settings.sounds : false,
        completion: state => (state.completion != undefined && state.completion != null) ? state.completion : false,
        address: state => (state.address != undefined && state.address != null) ? state.address : false,
        inspection: state => (state.inspection != undefined && state.inspection != null) ? state.inspection : false,
        offlineInspections: state => (state.offlineInspections != undefined && state.offlineInspections != null) ? state.offlineInspections : false,
    },
    mutations: {
        toggleDarkTheme(state) {
            state.darkTheme = !state.darkTheme
            localStorage.setItem('dark-theme', state.darkTheme)

            // Update body class
            if (state.darkTheme) {
                document.body.classList.add('dark-theme')
            } else {
                document.body.classList.remove('dark-theme')
            }
        },
        setUser(state, newUser) {
            state.user = newUser
        },
        toggleNotifications(state) {
            if (!state.user.settings) {
                state.user.settings = {}
            }
            if (!state.user.settings.notifications) {
                state.user.settings.notifications = false
            }
            state.user.settings.notifications = !state.user.settings.notifications
        },
        toggleSounds(state) {
            if (!state.user.settings) {
                state.user.settings = {}
            }
            if (!state.user.settings.sounds) {
                state.user.settings.sounds = false
            }
            state.user.settings.sounds = !state.user.settings.sounds
        },
        toggleCompletion(state, value) {
            state.completion = value
        },
        changeAddress(state, newAddress) {
            state.address = newAddress
        },
        changeInspection(state, newInspection) {
            state.inspection = newInspection
        },
        setOfflineInspections(state, newOfflineInspections) {
            state.offlineInspections = newOfflineInspections
        }
    },
    plugins: [vuexPersist.plugin]
})
