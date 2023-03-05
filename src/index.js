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
    "Blue"
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
    const projectTitle = document.querySelector(".tasks-title");
    const toDoTasks = document.querySelector(".to-do");
    const inProgressTasks = document.querySelector(".in-progress");
    const completedTasks = document.querySelector(".completed");
    projectTitle.innerHTML = project.title;
    toDoTasks.innerHTML = "";
    inProgressTasks.innerHTML = "";
    completedTasks.innerHTML = "";
    for (let i = 0; i < project.length(); i++) {
        const taskToAdd = `<div class="task-card" id="${i}"><p>${project.tasks[i].title}</p>
        <p>${project.tasks[i].description}</p>
        <p>${project.tasks[i].colorCode}</p>
        <div class="task-icons">
        <svg class="edit-task" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Edit Task</title><path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12H20A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4V2M18.78,3C18.61,3 18.43,3.07 18.3,3.2L17.08,4.41L19.58,6.91L20.8,5.7C21.06,5.44 21.06,5 20.8,4.75L19.25,3.2C19.12,3.07 18.95,3 18.78,3M16.37,5.12L9,12.5V15H11.5L18.87,7.62L16.37,5.12Z" /></svg>
        <svg class="delete-task" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Delete Task</title><path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M16,10V17A1,1 0 0,1 15,18H9A1,1 0 0,1 8,17V10H16M13.5,6L14.5,7H17V9H7V7H9.5L10.5,6H13.5Z" /></svg>
        </div>
        </div>`;
        if (project.tasks[i].status === "To Do") {
            toDoTasks.innerHTML += taskToAdd;
        } else if (project.tasks[i].status === "In Progress") {
            inProgressTasks.innerHTML += taskToAdd;
        } else if (project.tasks[i].status === "Completed") {
            completedTasks.innerHTML += taskToAdd;
        }
        const taskCard = document.querySelector(`.task-card`);
        taskCard.addEventListener("click", (e) => {
            e.preventDefault();
            editTask(project.tasks[i]);
            currentTaskIndex = i;
        });
    }
}

function initRender() {
    renderProjectlist(projectList);
    renderTasklist(defaultProject);
}

const projectModal = document.querySelector("#project-modal");
const taskModal = document.querySelector("#task-modal");
const editTaskModal = document.querySelector("#task-modal-edit");

const projectCloseBtn = document.querySelector("#project-close");
projectCloseBtn.addEventListener("click", () => {
    projectModal.style.display = "none";
});

const taskCloseBtn = document.querySelector("#task-close");
taskCloseBtn.addEventListener("click", () => {
    taskModal.style.display = "none";
});

const taskEditCloseBtn = document.querySelector("#task-edit-close");
taskEditCloseBtn.addEventListener("click", () => {
    editTaskModal.style.display = "none";
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
    projectModal.style.display = "none";
    renderTasklist(projectList[projectList.length - 1]);
    currentProject = projectList.length - 1;
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
    taskModal.style.display = "none";
    renderTasklist(projectList[currentProject]);
});

const submitTaskEditBtn = document.querySelector(".task-submit-edit");
submitTaskEditBtn.addEventListener("click", (e) => {
    const title = document.querySelector("#task-title-edit").value;
    const description = document.querySelector("#task-description-edit").value;
    const status = document.querySelector("#task-status-edit").value;
    const colorCode = document.querySelector("#task-color-edit").value;
    e.preventDefault();
    projectList[currentProject].tasks[currentTaskIndex].title = title;
    projectList[currentProject].tasks[currentTaskIndex].description =
        description;
    projectList[currentProject].tasks[currentTaskIndex].status = status;
    projectList[currentProject].tasks[currentTaskIndex].colorCode = colorCode;
    renderTasklist(projectList[currentProject]);
    editTaskModal.style.display = "none";
});

function editTask(task) {
    editTaskModal.style.display = "block";
    document.querySelector("#task-title-edit").value = task.title;
    document.querySelector("#task-description-edit").value = task.description;
    document.querySelector("#task-status-edit").value = task.status;
    document.querySelector("#task-color-edit").selected = task.colorCode;
    currentTask = task;
}

//webapp start
initRender();
let currentProject = 0;
let currentTask = 0;
let currentTaskIndex;
