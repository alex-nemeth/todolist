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

    getStatus() {
        return this.status;
    }

    getColorCode() {
        return this.colorCode;
    }
}

class Project {
    constructor(title, description, colorCode) {
        this.title = title;
        this.description = description;
        this.tasks = [];
        this.colorCode = colorCode;
    }

    addTask(title, description, colorCode) {
        this.tasks.push(new Task(title, description, colorCode));
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
}

let projectList = [];
let defaultProject = new Project(
    "Default Project",
    "This is a default project",
    "red"
);
projectList.push(defaultProject);

let defaultTask = new Task(
    "Default Task",
    "This is a default task",
    "In Progress",
    "red"
);
defaultProject.addTask(defaultTask);

function renderProjectlist() {
    const listOfProjects = document.querySelector(".project-list");
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");
    listOfProjects.appendChild(projectCard);
    for (let i = 0; i < projectList.length; i++) {
        projectCard.innerHTML = `
        <div class="project-card">
        <p class="project-title">${projectList[i].title}</p>
    </div>`;
    }
}

function renderTasklist(project) {
    const toDoTasks = document.querySelector(".to-do");
    const inProgressTasks = document.querySelector(".in-progress");
    const completedTasks = document.querySelector(".completed");
    toDoTasks.innerHTML = "";
    inProgressTasks.innerHTML = "";
    completedTasks.innerHTML = "";
    for (let i = 0; i < project.length(); i++) {
        const taskToAdd = `<div class="task-card"><p>${project.tasks[i].title}</p>
        <p>${project.tasks[i].description}</p>
        <p>${project.tasks[i].colorCode}</p></div>`;

        if (project.tasks[i].getStatus() === "To Do") {
            toDoTasks.innerHTML += taskToAdd;
        } else if (project.tasks[i].getStatus() === "In Progress") {
            inProgressTasks.innerHTML += taskToAdd;
        } else if (project.tasks[i].getStatus() === "Completed") {
            completedTasks.innerHTML += taskToAdd;
        }
    }
}

function initRender() {
    renderProjectlist(projectList);
    renderTasklist(defaultProject);
}

const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});
const addProjectBtn = document.querySelector(".add-project");
addProjectBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

const submitProjectBtn = document.querySelector(".project-submit");
submitProjectBtn.addEventListener("click", (e) => {
    const title = document.querySelector("#project-title").value;
    const description = document.querySelector("#project-description").value;
    const colorCode = document.querySelector("#project-color").value;
    e.preventDefault();
    projectList.push(new Project(title, description, colorCode));
    renderProjectlist();
    renderTasklist(projectList[projectList.length - 1]);
});

//webapp start
initRender();
