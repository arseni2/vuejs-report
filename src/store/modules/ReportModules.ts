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
            // const res = await fetch(
            //     'https://jsonplaceholder.typicode.com/posts?_limit=' + limit
            // )
            // const posts = await res.json()

            dispatch('sayHello')

            commit('getAllReports', mockData)
        },
        sayHello() {console.log('sayHello working')}
    },
    mutations: {
        getAllReports(state, reports) {
            state.reports = reports
        },
        createReport(state, newReports) {
            state.reports.unshift(newReports)
        }
    },
    state: {
        reports: []
    },
    getters: {
        allPosts(state) {
            return state.reports
        },
        // postsCount(state, getters) {
        //     return getters.validPosts.length
        // }
    }
}
