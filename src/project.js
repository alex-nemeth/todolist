class Project {
    constructor() {
        this.tasks = [];
    }

    addTask(title, description, colorCode) {
        this.tasks.push(new Task(title, description, colorCode));
    }

    deleteTask(index) {
        this.tasks.splice(index, 1);
    }
}
