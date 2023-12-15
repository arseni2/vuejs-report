let mockData = [
    {
        id: 1,
        title: "test 1",
        createdAtDate: "21.06.23",
        createdAtTime: "13:52",
        template: "Обычный шаблон"
    },
    {
        id: 2,
        title: "test 2",
        createdAtDate: "21.06.23",
        createdAtTime: "13:52",
        template: "Сетевой шаблон"
    },
    {
        id: 3,
        title: "test 3",
        createdAtDate: "21.06.23",
        createdAtTime: "13:52",
        template: "Обычный шаблон"
    },
]

export default {
    actions: {
        async fetchReports({ commit, getters, dispatch }) {
            try {
                const res = await fetch(
                    'URL EPTA'
                )
                const reports = await res.json()
                commit('getAllReports', reports)
            } catch (e) {
                console.log(e)
            }
            //dispatch('sayHello')

            commit('getAllReports', [])
        },
        async createReport({ commit, getters, dispatch }, data) {
            try {
                const res = await fetch(
                    'URL EPTA', {method: "POST", body: data}
                )
                const reports = await res.json()
                commit('getAllReports', reports)
            } catch (e) {
                console.log(e)
            }
            //dispatch('sayHello')
            console.log(data)
            commit('createReportMut', data)
        },
        sayHello() {console.log('sayHello working')}
    },
    mutations: {
        getAllReports(state, reports) {
            state.reports = reports
        },
        createReportMut(state, newReports) {
            state.reports.unshift(newReports)
        }
    },
    state: {
        reports: []
    },
    getters: {
        allReports(state) {
            return state.reports
        }
    }
}
