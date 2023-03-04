class Task {
    constructor(title, description, colorCode) {
        this.title = title;
        this.description = description;
        this.colorCode = colorCode;
    }
}

class Project {
    constructor(name, description, colorCode) {
        this.name = name;
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

class ProjectList {
    constructor() {
        this.projects = [];
    }

    addProject() {
        const projectName = document.querySelector("#project-name").value;
        const projectDescription = document.querySelector(
            "#project-description"
        ).value;
        const projectColor = document.querySelector("#project-color").value;

        this.projects.push(
            new Project(projectName, projectDescription, projectColor)
        );
        render();
    }

    render() {
        const projectList = document.querySelector(".project-list");
        projectList.innerHTML = "";
        this.projects.forEach((project) => {
            const projectCard = document.createElement("div");
            projectCard.classList.add("project-card");
            projectCard.innerHTML = `
            <div class="project-card-header">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <title>circle-medium</title>
            <pathd="M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z"/>           
            <p class="project">${project.name}</p>
            </div>`;
        });
    }
}

let projectList = new ProjectList();

const modal = document.getElementById("myModal");
const closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

const addProjectBtn = document.querySelector(".add-project");
addProjectBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

const submitProjectBtn = document.querySelector(".submit-project");
submitProjectBtn.addEventListener("click", (e) => {
    e.preventDefault();
    projectList.addProject();
});
