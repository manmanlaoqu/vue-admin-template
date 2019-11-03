import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        menu: [],
        pages: [
            // {
            //     page:'/workflow',
            //     title:'workflow'
            // }
        ],
        tabIndex: "0",
        tabMap: {},
        currentPage: ''
    },
    mutations: {
        setMenu(state, menu) {
            state.menu = menu
        },
        addTab(state, page) {
            if (!state.tabMap[page.name]) {
                state.pages.push(page)
                state.tabMap[page.name] = true
                state.tabIndex = page.name
            } else {
                state.tabIndex = page.name
            }
            state.currentPage = page.name
        },
        removeTab(state, pageName) {
            let index = state.pages.findIndex(page => {
                return page.name == pageName
            })
            let islastOne = index == state.pages.length - 1
            state.pages.splice(index, 1)
            delete state.tabMap[pageName]
            if (state.currentPage == pageName && state.pages.length > 0) {
                state.tabIndex = ((page) => {
                    return page.name
                })(state.pages[islastOne ? index - 1 : index])
                state.currentPage = state.tabIndex
            }else{
                state.tabIndex = state.currentPage
            }
        }
    },
    actions: {
        setMenu(context, menu) {
            context.commit('setMenu', menu)
        },
        addTab(context, page) {
            context.commit('addTab', page)
        },
        removeTab(context, pageName) {
            context.commit('removeTab', pageName)
        }
    }
})
window.appStore = store
export default store