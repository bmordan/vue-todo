class Todo {
    constructor(task, status = 0) {
        this.task = task
        this.status = status
        this.ts = new Date().toISOString()
    }
}

const app = new Vue({
    el: '#todo-list',
    data: {
        task: "",
        todos: [
            new Todo("make a task"),
            new Todo("ask Caine for a todo")
        ]
    },
    methods: {
        add: function () {
            if (!this.task.length) return
            this.todos.push(new Todo(this.task))
            this.task = ""
        },
        update: function (i) {
            this.todos[i].status = 1
        },
        remove: function (i) {
            this.todos.splice(i, 1)
        }
    }
})