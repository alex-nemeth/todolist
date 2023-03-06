class Project {
    constructor(title, description, colorCode) {
        this.title = title;
        this.description = description;
        this.tasks = [];
        this.colorCode = colorCode;
    }

    addTask(title, description, status, colorCode) {
        this.tasks.push(new Task(title, description, status, colorCode));
    }

    addTask(task) {
        this.tasks.push(task);
    }

    length() {
        return this.tasks.length;
    }

    deleteTask(index) {
        this.tasks.splice(index, 1);
    }

    getTasks() {
        return this.tasks;
    }
}

export default Project;
