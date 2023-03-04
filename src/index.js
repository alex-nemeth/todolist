class Task {
    constructor(title, description, colorCode) {
        this.title = title;
        this.description = description;
        this.colorCode = colorCode;
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

let defaultTask = new Task("Default Task", "This is a default task", "red");
defaultProject.tasks.push(defaultTask);

function renderProjectlist(projectList) {
    const listOfProjects = document.querySelector(".project-list");
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");
    listOfProjects.appendChild(projectCard);
    for (let i = 0; i < projectList.length; i++) {
        projectCard.innerHTML = `
        <div class="project-card">
        <p class="project-title" onclick="">${projectList[i].title}</p>
    </div>`;
    }
}

function renderTasklist(projectList) {
    const toDoList = document.querySelector(".to-do");
    for (let i = 0; i < defaultProject.tasks.length; i++) {
        toDoList.innerHTML = `<p>${defaultProject.tasks[i].title}</p>
        <p>${defaultProject.tasks[i].description}</p>
        <p>${defaultProject.tasks[i].colorCode}</p>`;
    }
}

function initRender() {
    renderProjectlist(projectList);
    renderTasklist(projectList);
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
    console.log(projectList.length);
    renderProjectlist(projectList);
});

initRender();
