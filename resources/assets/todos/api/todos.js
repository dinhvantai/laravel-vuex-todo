export function apiFetchTodos() {
    return axios.get('/todos')
        .then(response => response)
        .catch(error => error)
}

export function apiAddTodo(params) {
    return axios.post('/todos', params)
        .then(response => response)
        .catch(error => error)
}

export function apiEditTodo(id, params) {
    return axios.put(`/todos/${id}`, params)
        .then(response => response)
        .catch(error => error)
}

export function apiDeleteTodo(id) {
    return axios.delete(`/todos/${id}`)
        .then(response => response)
        .catch(error => error)
}
