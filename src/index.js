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
    listOfProjects.innerHTML = "";
    for (let i = 0; i < projectList.length; i++) {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");
        listOfProjects.appendChild(projectCard);
        projectCard.innerHTML = `
        <div class="project-card" value="${i}">
        <p class="project-title">${projectList[i].title}</p>
    </div>`;
        projectCard.addEventListener("click", (e) => {
            renderTasklist(projectList[i]);
            currentProject = i;
        });
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
        const taskToAdd = `<div class="task-card" id="${i}"><p>${project.tasks[i].title}</p>
        <p>${project.tasks[i].description}</p>
        <p>${project.tasks[i].colorCode}</p></div>`;

        if (project.tasks[i].status === "To Do") {
            toDoTasks.innerHTML += taskToAdd;
        } else if (project.tasks[i].status === "In Progress") {
            inProgressTasks.innerHTML += taskToAdd;
        } else if (project.tasks[i].status === "Completed") {
            completedTasks.innerHTML += taskToAdd;
        }
    }
}

function initRender() {
    renderProjectlist(projectList);
    renderTasklist(defaultProject);
}

const projectModal = document.querySelector("#project-modal");
const taskModal = document.querySelector("#task-modal");

const projectCloseBtn = document.querySelector("#project-close");
projectCloseBtn.addEventListener("click", () => {
    projectModal.style.display = "none";
});

const taskCloseBtn = document.querySelector("#task-close");
taskCloseBtn.addEventListener("click", () => {
    taskModal.style.display = "none";
});

const addProjectBtn = document.querySelector(".add-project");
addProjectBtn.addEventListener("click", () => {
    projectModal.style.display = "block";
});

const addTaskBtn = document.querySelector(".add-task");
addTaskBtn.addEventListener("click", () => {
    taskModal.style.display = "block";
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

const submitTaskBtn = document.querySelector(".task-submit");
submitTaskBtn.addEventListener("click", (e) => {
    const title = document.querySelector("#task-title").value;
    const description = document.querySelector("#task-description").value;
    const status = document.querySelector("#task-status").value;
    const colorCode = document.querySelector("#task-color").value;
    e.preventDefault();
    projectList[currentProject].tasks.push(
        new Task(title, description, status, colorCode)
    );
    renderTasklist(projectList[currentProject]);
});

//webapp start
initRender();
let currentProject = 0;
