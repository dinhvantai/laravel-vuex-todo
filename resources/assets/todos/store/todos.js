import { apiFetchTodos, apiAddTodo, apiEditTodo, apiDeleteTodo} from '../api/todos'

const TODO_FETCH = 'todo_fetch'
const TODO_ADD = 'todo_add'
const TODO_TOGGLE_STATUS = 'todo_toggle_status'
const TODO_DELETE = 'todo_delete'

const state = {
    todos: []
}

const mutations = {
    [TODO_FETCH](state, todos) {
        return state.todos = todos
    },

    [TODO_ADD](state, todo) {
        return state.todos = [todo, ...state.todos]
    },

    [TODO_TOGGLE_STATUS](state, id) {
        return state.todos = state.todos.map((todo) => todo.id === id ? { ...todo, status: !todo.status } : todo)
    },

    [TODO_DELETE](state, id) {
        return state.todos = state.todos.filter((todo) => todo.id !== id)
    }
}

const actions = {
    async actionTodoFetch({ commit }) {
        let response = await apiFetchTodos()

        if (response.status == 200 ) {
            return commit(TODO_FETCH, response.data)
        }
    },

    async actionTodoAdd({ commit }, todo) {
        let response = await apiAddTodo(todo)

        if (response.status == 200) {
            return commit(TODO_ADD, response.data)
        }
    },

    async actionTodoChangeStatus({ commit }, { id, status }) {
        let response = await apiEditTodo(id, { status })

        if (response.status == 200) {
            return commit(TODO_TOGGLE_STATUS, id)
        }
    },

    async actionTodoDelete({ commit }, id) {
        let response = await apiDeleteTodo(id)

        if (response.status == 200) {
            return commit(TODO_DELETE, id)
        }
    }
}

export default {
    state,
    actions,
    mutations
}
