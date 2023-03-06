class Task {
    constructor(title, description, status, colorCode) {
        this.title = title;
        this.description = description;
        this.status = status;
        this.colorCode = colorCode;
    }

    getTitle() {
        return this.title;
    }
    getDescription() {
        return this.description;
    }

    getColorCode() {
        return this.colorCode;
    }
}

export default Task;
