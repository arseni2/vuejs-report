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
        async createTemplateFetch({ commit, getters, dispatch }, data) {
            try {
                const res = await fetch(
                    'url epta',
                    {method: "POST", body: JSON.stringify(data)}
                )
                const posts = await res.json()
                commit('createReport', posts)
            } catch (e) {
                console.log(e)
            }

            //dispatch('sayHello')

            commit('createReport', data)
        },
        sayHello() {console.log('sayHello working')}
    },
    mutations: {
        getAllTemplateReports(state, reports) {
            state.templateReports = reports
        },
        createReport(state, newTemplate) {
            state.templateReports.unshift(newTemplate)
        }
    },
    state: {
        templateReports: []
    },
    getters: {
        allTemplateReports(state) {
            return state.templateReports
        },
        // postsCount(state, getters) {
        //     return getters.validPosts.length
        // }
    }
}
