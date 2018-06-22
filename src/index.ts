import Vue from "vue";
import TodoComponent from './components/Todo/Todo.vue';

let v = new Vue({
    el: "#app",
    template: `
    <div>
        <todo-component />
    </div>`,
    components: {
        TodoComponent
    }
});