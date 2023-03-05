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

let projectIndex = 0;
let taskIndex = 0;

function renderProjectlist() {
    const listOfProjects = document.querySelector(".project-list");
    listOfProjects.innerHTML = "";
    for (let i = 0; i < projectList.length; i++) {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");
        listOfProjects.appendChild(projectCard);
        projectCard.value = i;

        const projectTitle = document.createElement("p");
        projectTitle.classList.add("project-title-sidebar");
        projectTitle.innerHTML = projectList[i].title;
        projectTitle.value = i;
        projectCard.appendChild(projectTitle);

        const projectEditBtn = document.createElement("button");
        projectEditBtn.classList.add("project-edit-btn");
        projectEditBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>circle-edit-outline</title><path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12H20A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4V2M18.78,3C18.61,3 18.43,3.07 18.3,3.2L17.08,4.41L19.58,6.91L20.8,5.7C21.06,5.44 21.06,5 20.8,4.75L19.25,3.2C19.12,3.07 18.95,3 18.78,3M16.37,5.12L9,12.5V15H11.5L18.87,7.62L16.37,5.12Z" /></svg>`;
        projectEditBtn.value = i;
        projectCard.appendChild(projectEditBtn);

        projectCard.addEventListener("click", (e) => {
            renderTasklist(projectList[i]);
            projectIndex = i;
        });
        projectEditBtn.addEventListener("click", (e) => {
            e.preventDefault();
            editProject(projectList[i]);
            projectIndex = i;
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
        const taskToAdd = `<div class="task-card ${project.tasks[i].colorCode}" id="${i}"><p>${project.tasks[i].title}</p>
        <p>${project.tasks[i].description}</p>
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
            taskIndex = taskCard.id;
            e.preventDefault();
            editTask(project.tasks[taskIndex]);
        });
    }
}

function initRender() {
    renderProjectlist(projectList);
    renderTasklist(defaultProject);
}

const projectModal = document.querySelector("#project-modal");
const editProjectModal = document.querySelector("#project-modal-edit");
const taskModal = document.querySelector("#task-modal");
const editTaskModal = document.querySelector("#task-modal-edit");

const projectCloseBtn = document.querySelector("#project-close");
projectCloseBtn.addEventListener("click", () => {
    projectModal.style.display = "none";
});

const projectEditCloseBtn = document.querySelector("#project-edit-close");
projectEditCloseBtn.addEventListener("click", () => {
    editProjectModal.style.display = "none";
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
    projectIndex = projectList.length - 1;
});

const submitTaskBtn = document.querySelector(".task-submit");
submitTaskBtn.addEventListener("click", (e) => {
    const title = document.querySelector("#task-title").value;
    const description = document.querySelector("#task-description").value;
    const status = document.querySelector("#task-status").value;
    const colorCode = document.querySelector("#task-color").value;
    e.preventDefault();
    projectList[projectIndex].tasks.push(
        new Task(title, description, status, colorCode)
    );
    taskModal.style.display = "none";
    renderTasklist(projectList[projectIndex]);
});

const submitProjectEditBtn = document.querySelector(".project-submit-edit");
submitProjectEditBtn.addEventListener("click", (e) => {
    const title = document.querySelector("#project-title-edit").value;
    const description = document.querySelector(
        "#project-description-edit"
    ).value;
    const colorCode = document.querySelector("#project-color-edit").value;
    e.preventDefault();
    projectList[projectIndex].title = title;
    projectList[projectIndex].description = description;
    projectList[projectIndex].colorCode = colorCode;
    renderProjectlist();
    editProjectModal.style.display = "none";
});

const submitTaskEditBtn = document.querySelector(".task-submit-edit");
submitTaskEditBtn.addEventListener("click", (e) => {
    const title = document.querySelector("#task-title-edit").value;
    const description = document.querySelector("#task-description-edit").value;
    const status = document.querySelector("#task-status-edit").value;
    const colorCode = document.querySelector("#task-color-edit").value;
    e.preventDefault();
    projectList[projectIndex].tasks[taskIndex].title = title;
    projectList[projectIndex].tasks[taskIndex].description = description;
    projectList[projectIndex].tasks[taskIndex].status = status;
    projectList[projectIndex].tasks[taskIndex].colorCode = colorCode;
    renderTasklist(projectList[projectIndex]);
    editTaskModal.style.display = "none";
});

const deleteTaskBtn = document.querySelector(".task-delete");
deleteTaskBtn.addEventListener("click", (e) => {
    e.preventDefault();
    projectList[projectIndex].tasks.splice(taskIndex, 1);
    renderTasklist(projectList[projectIndex]);
    editTaskModal.style.display = "none";
});

function editProject(project) {
    editProjectModal.style.display = "block";
    document.querySelector("#project-title-edit").value = project.title;
    document.querySelector("#project-description-edit").value =
        project.description;
    document.querySelector("#project-color-edit").selected = project.colorCode;
    //currentProject = project;
}

function editTask(task) {
    editTaskModal.style.display = "block";
    document.querySelector("#task-title-edit").value = task.title;
    document.querySelector("#task-description-edit").value = task.description;
    document.querySelector("#task-status-edit").value = task.status;
    document.querySelector("#task-color-edit").selected = task.colorCode;
}

//webapp start
initRender();
