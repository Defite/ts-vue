<template>
    <div>
        <input type="text" v-model="newTodoTitle" v-on:keyup.enter="createTodo()" />
        <ul class="todo-list">
            <li v-for="item in todosList" :key="item.id">
                <todo-item :item="item" />
            </li>
        </ul>
    </div>    
</template>

<script lang="ts">
import TodoItem from '../TodoItem/TodoItem.vue';

import Vue from 'vue';
import  { AppState, Todo } from '../../models';

export default Vue.extend({
    components: {
        TodoItem
    },
    data() {
        const initialState: AppState = {
            newTodoTitle: '',

            todos: [
                {
                    completed: false,
                    title: 'Finish Vue app'
                }
            ]
        }

        return initialState;
    },
    methods: {
        createTodo() {
            const title = this.newTodoTitle.trim();

            if (!title) {
                return;
            }

            this.todos.push({
                completed: false,
                title,
            });

            this.newTodoTitle = '';
        }
    },
    computed: {
        todosList(): Todo[] {
            return this.todos;
        }
    }
})
</script>

