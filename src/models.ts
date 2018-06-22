export interface AppState {
    newTodoTitle: string;
    todos: Todo[];
}

export interface Todo {
    title: string;
    completed: boolean;
}