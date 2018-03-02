<template>
    <div class="app">
        <form class="form" v-on:submit="handleAddTodo">
            <input class="input form__input" v-model="inputVal"/>
            <button class="btn form__submit-btn" type="submit">Add</button>
        </form>
        <transition-group tag="ol" name="list" class="todo-list">
            <li
                class="todo-list__item"
                v-bind:class="{ complete: todo.status }"
                v-bind:key="todo.id"
                v-for="(todo, index) in filteredTodos"
            >
                <button
                    @click="handleChangeStatus(todo)"
                    class="todo-list__item-content"
                >
                    {{ `${index + 1}. ${todo.name}` }}
                </button>
                <button
                    @click="handleDelete(todo)"
                    class="btn todo-list__item-remove"
                >
                    <i class="fa" v-bind:class="[todo.status ? 'fa-check' : 'fa-times']"></i>
                </button>
            </li>
        </transition-group>
        <div class="filters">
            <button class="btn filters__btn filters__btn--all" 
                @click="valueFilter = 'all'"
            >
                All
            </button>
            <button class="btn filters__btn filters__btn--complete"
                @click="valueFilter = 'complete'"
            >
                Complete
            </button>
            <button class="btn filters__btn filters__btn--incomplete" 
                @click="valueFilter = 'incomplete'"
            >
                Incomplete
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Todos',

    beforeMount() {
        this.$store.dispatch('actionTodoFetch')
    },

    data() {
        return {
            inputVal: '',
            valueFilter: 'all'
        }
    },

    computed: {
        todos() {
            return this.$store.state.storeTodo.todos
        },

        filteredTodos() {
            if (this.valueFilter === 'complete') {
                return this.todos.filter((todo) => todo.status)
            }

            if (this.valueFilter === 'incomplete') {
                return this.todos.filter((todo) => !todo.status)
            }

            return this.todos
        }
    },

    methods: {
        handleAddTodo(event) {
            event.preventDefault()

            let name = this.inputVal.trim()
            if (name) {
                this.inputVal = ''                
                this.$store.dispatch('actionTodoAdd', { name, status: 1 })
            }
        },

        handleChangeStatus(todo) {
            this.$store.dispatch('actionTodoChangeStatus', {id: todo.id, status: !todo.status })
        },

        handleDelete(todo) {
            this.$store.dispatch('actionTodoDelete', todo.id)
        }
    }
}
</script>

<style lang="scss">
    /* $fa-font-path: '~font-awesome/fonts/'; */
    @import '~font-awesome/css/font-awesome.min.css';

    // Import Main styles for this application
    @import '../scss/todos';
</style>
