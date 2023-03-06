/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes/project.js":
/*!********************************!*\
  !*** ./src/classes/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Project {\r\n    constructor(title, description, colorCode) {\r\n        this.title = title;\r\n        this.description = description;\r\n        this.tasks = [];\r\n        this.colorCode = colorCode;\r\n    }\r\n\r\n    addTask(title, description, status, colorCode) {\r\n        this.tasks.push(new Task(title, description, status, colorCode));\r\n    }\r\n\r\n    addTask(task) {\r\n        this.tasks.push(task);\r\n    }\r\n\r\n    length() {\r\n        return this.tasks.length;\r\n    }\r\n\r\n    deleteTask(index) {\r\n        this.tasks.splice(index, 1);\r\n    }\r\n\r\n    getTasks() {\r\n        return this.tasks;\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\r\n\n\n//# sourceURL=webpack://todolist/./src/classes/project.js?");

/***/ }),

/***/ "./src/classes/task.js":
/*!*****************************!*\
  !*** ./src/classes/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Task {\r\n    constructor(title, description, status, colorCode) {\r\n        this.title = title;\r\n        this.description = description;\r\n        this.status = status;\r\n        this.colorCode = colorCode;\r\n    }\r\n\r\n    getTitle() {\r\n        return this.title;\r\n    }\r\n    getDescription() {\r\n        return this.description;\r\n    }\r\n\r\n    getColorCode() {\r\n        return this.colorCode;\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\r\n\n\n//# sourceURL=webpack://todolist/./src/classes/task.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/project */ \"./src/classes/project.js\");\n/* harmony import */ var _classes_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/task */ \"./src/classes/task.js\");\n//Class Imports\r\n\r\n\r\n\r\n//Event Listeners\r\nconst projectModal = document.querySelector(\"#project-modal\");\r\nconst editProjectModal = document.querySelector(\"#project-modal-edit\");\r\nconst taskModal = document.querySelector(\"#task-modal\");\r\nconst editTaskModal = document.querySelector(\"#task-modal-edit\");\r\n\r\nconst projectCloseBtn = document.querySelector(\"#project-close\");\r\nprojectCloseBtn.addEventListener(\"click\", () => {\r\n    projectModal.style.display = \"none\";\r\n});\r\n\r\nconst projectEditCloseBtn = document.querySelector(\"#project-edit-close\");\r\nprojectEditCloseBtn.addEventListener(\"click\", () => {\r\n    editProjectModal.style.display = \"none\";\r\n});\r\n\r\nconst taskCloseBtn = document.querySelector(\"#task-close\");\r\ntaskCloseBtn.addEventListener(\"click\", () => {\r\n    taskModal.style.display = \"none\";\r\n});\r\n\r\nconst taskEditCloseBtn = document.querySelector(\"#task-edit-close\");\r\ntaskEditCloseBtn.addEventListener(\"click\", () => {\r\n    editTaskModal.style.display = \"none\";\r\n});\r\n\r\nconst addProjectBtn = document.querySelector(\".add-project\");\r\naddProjectBtn.addEventListener(\"click\", () => {\r\n    projectModal.style.display = \"block\";\r\n});\r\n\r\nconst addTaskBtn = document.querySelector(\".add-task\");\r\naddTaskBtn.addEventListener(\"click\", () => {\r\n    taskModal.style.display = \"block\";\r\n});\r\n\r\nconst submitProjectBtn = document.querySelector(\".project-submit\");\r\nsubmitProjectBtn.addEventListener(\"click\", (e) => {\r\n    const title = document.querySelector(\"#project-title\").value;\r\n    const description = document.querySelector(\"#project-description\").value;\r\n    const colorCode = document.querySelector(\"#project-color\").value;\r\n    e.preventDefault();\r\n    projectList.push(new _classes_project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](title, description, colorCode));\r\n    renderProjectlist();\r\n    projectModal.style.display = \"none\";\r\n    renderTasklist(projectList[projectList.length - 1]);\r\n    projectIndex = projectList.length - 1;\r\n    saveLocalStorage();\r\n});\r\n\r\nconst submitTaskBtn = document.querySelector(\".task-submit\");\r\nsubmitTaskBtn.addEventListener(\"click\", (e) => {\r\n    const title = document.querySelector(\"#task-title\").value;\r\n    const description = document.querySelector(\"#task-description\").value;\r\n    const status = document.querySelector(\"#task-status\").value;\r\n    const colorCode = document.querySelector(\"#task-color\").value;\r\n    e.preventDefault();\r\n    projectList[projectIndex].tasks.push(\r\n        new _classes_task__WEBPACK_IMPORTED_MODULE_1__[\"default\"](title, description, status, colorCode)\r\n    );\r\n    taskModal.style.display = \"none\";\r\n    renderTasklist(projectList[projectIndex]);\r\n    saveLocalStorage();\r\n});\r\n\r\nconst submitProjectEditBtn = document.querySelector(\".project-submit-edit\");\r\nsubmitProjectEditBtn.addEventListener(\"click\", (e) => {\r\n    const title = document.querySelector(\"#project-title-edit\").value;\r\n    const description = document.querySelector(\r\n        \"#project-description-edit\"\r\n    ).value;\r\n    const colorCode = document.querySelector(\"#project-color-edit\").value;\r\n    e.preventDefault();\r\n    projectList[projectIndex].title = title;\r\n    projectList[projectIndex].description = description;\r\n    projectList[projectIndex].colorCode = colorCode;\r\n    renderProjectlist();\r\n    renderTasklist(projectList[projectIndex]);\r\n    editProjectModal.style.display = \"none\";\r\n    saveLocalStorage();\r\n});\r\n\r\nconst submitTaskEditBtn = document.querySelector(\".task-submit-edit\");\r\nsubmitTaskEditBtn.addEventListener(\"click\", (e) => {\r\n    const title = document.querySelector(\"#task-title-edit\").value;\r\n    const description = document.querySelector(\"#task-description-edit\").value;\r\n    const status = document.querySelector(\"#task-status-edit\").value;\r\n    const colorCode = document.querySelector(\"#task-color-edit\").value;\r\n    e.preventDefault();\r\n    projectList[projectIndex].tasks[taskIndex].title = title;\r\n    projectList[projectIndex].tasks[taskIndex].description = description;\r\n    projectList[projectIndex].tasks[taskIndex].status = status;\r\n    projectList[projectIndex].tasks[taskIndex].colorCode = colorCode;\r\n    renderTasklist(projectList[projectIndex]);\r\n    saveLocalStorage();\r\n    editTaskModal.style.display = \"none\";\r\n});\r\n\r\nconst deleteProjectBtn = document.querySelector(\".project-delete\");\r\ndeleteProjectBtn.addEventListener(\"click\", (e) => {\r\n    e.preventDefault();\r\n    projectList.splice(projectIndex, 1);\r\n    renderProjectlist();\r\n    editProjectModal.style.display = \"none\";\r\n    if (projectList.length > 0) {\r\n        renderTasklist(projectList[projectList.length - 1]);\r\n    } else {\r\n        projectModal.style.display = \"block\";\r\n    }\r\n});\r\n\r\nconst deleteTaskBtn = document.querySelector(\".task-delete\");\r\ndeleteTaskBtn.addEventListener(\"click\", (e) => {\r\n    e.preventDefault();\r\n    projectList[projectIndex].tasks.splice(taskIndex, 1);\r\n    renderTasklist(projectList[projectIndex]);\r\n    editTaskModal.style.display = \"none\";\r\n});\r\n\r\n//Functions\r\nfunction renderProjectlist() {\r\n    const listOfProjects = document.querySelector(\".project-list\");\r\n    listOfProjects.innerHTML = \"\";\r\n    for (let i = 0; i < projectList.length; i++) {\r\n        const projectCard = document.createElement(\"div\");\r\n        projectCard.classList.add(\"project-card\");\r\n        projectCard.classList.add(projectList[i].colorCode);\r\n        listOfProjects.appendChild(projectCard);\r\n        projectCard.value = i;\r\n\r\n        const projectTitle = document.createElement(\"p\");\r\n        projectTitle.classList.add(\"project-title-sidebar\");\r\n        projectTitle.innerHTML = projectList[i].title;\r\n        projectTitle.value = i;\r\n        projectCard.appendChild(projectTitle);\r\n\r\n        const projectEditBtn = document.createElement(\"button\");\r\n        projectEditBtn.classList.add(\"project-edit-btn\");\r\n        projectEditBtn.innerHTML = `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><title>circle-edit-outline</title><path d=\"M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12H20A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4V2M18.78,3C18.61,3 18.43,3.07 18.3,3.2L17.08,4.41L19.58,6.91L20.8,5.7C21.06,5.44 21.06,5 20.8,4.75L19.25,3.2C19.12,3.07 18.95,3 18.78,3M16.37,5.12L9,12.5V15H11.5L18.87,7.62L16.37,5.12Z\" /></svg>`;\r\n        projectEditBtn.value = i;\r\n        projectCard.appendChild(projectEditBtn);\r\n\r\n        projectCard.addEventListener(\"click\", (e) => {\r\n            renderTasklist(projectList[i]);\r\n            projectIndex = i;\r\n        });\r\n        projectEditBtn.addEventListener(\"click\", (e) => {\r\n            e.preventDefault();\r\n            editProject(projectList[i]);\r\n            projectIndex = i;\r\n        });\r\n    }\r\n}\r\n\r\nfunction renderTasklist(project) {\r\n    const projectTitle = document.querySelector(\".tasks-title\");\r\n    const projectDescription = document.querySelector(\".tasks-description\");\r\n    const toDoTasks = document.querySelector(\".to-do\");\r\n    const inProgressTasks = document.querySelector(\".in-progress\");\r\n    const completedTasks = document.querySelector(\".completed\");\r\n    clearColors(projectTitle);\r\n    projectTitle.classList.add(`color-${project.colorCode}`);\r\n    projectTitle.innerHTML = project.title;\r\n    projectDescription.innerHTML = project.description;\r\n    toDoTasks.innerHTML = \"\";\r\n    inProgressTasks.innerHTML = \"\";\r\n    completedTasks.innerHTML = \"\";\r\n    for (let i = 0; i < project.tasks.length; i++) {\r\n        const taskToAdd = `<div class=\"task-card ${project.tasks[i].colorCode}\" id=\"${i}\"><p class=\"task-title\">${project.tasks[i].title}</p>\r\n        <p class=\"task-description\">${project.tasks[i].description}</p>\r\n        </div>\r\n        </div>`;\r\n        if (project.tasks[i].status === \"To Do\") {\r\n            toDoTasks.innerHTML += taskToAdd;\r\n        } else if (project.tasks[i].status === \"In Progress\") {\r\n            inProgressTasks.innerHTML += taskToAdd;\r\n        } else if (project.tasks[i].status === \"Completed\") {\r\n            completedTasks.innerHTML += taskToAdd;\r\n        }\r\n    }\r\n    document.querySelectorAll(\".task-card\").forEach((taskCard) => {\r\n        taskCard.addEventListener(\"click\", (e) => {\r\n            taskIndex = taskCard.id;\r\n            e.preventDefault();\r\n            editTask(projectList[projectIndex].tasks[taskIndex]);\r\n        });\r\n    });\r\n}\r\n\r\nfunction editProject(project) {\r\n    editProjectModal.style.display = \"block\";\r\n    document.querySelector(\"#project-title-edit\").value = project.title;\r\n    document.querySelector(\"#project-description-edit\").value =\r\n        project.description;\r\n    document.querySelector(\"#project-color-edit\").selected = project.colorCode;\r\n}\r\n\r\nfunction editTask(task) {\r\n    editTaskModal.style.display = \"block\";\r\n    document.querySelector(\"#task-title-edit\").value = task.title;\r\n    document.querySelector(\"#task-description-edit\").value = task.description;\r\n    document.querySelector(\"#task-status-edit\").value = task.status;\r\n    document.querySelector(\"#task-color-edit\").selected = task.colorCode;\r\n}\r\n\r\nfunction clearColors(element) {\r\n    if (element.classList.contains(\"color-red\"))\r\n        element.classList.remove(\"color-red\");\r\n    if (element.classList.contains(\"color-green\"))\r\n        element.classList.remove(\"color-green\");\r\n    if (element.classList.contains(\"color-blue\"))\r\n        element.classList.remove(\"color-blue\");\r\n    if (element.classList.contains(\"color-yellow\"))\r\n        element.classList.remove(\"color-yellow\");\r\n    if (element.classList.contains(\"color-orange\"))\r\n        element.classList.remove(\"color-orange\");\r\n    if (element.classList.contains(\"color-purple\"))\r\n        element.classList.remove(\"color-purple\");\r\n}\r\n\r\nfunction init() {\r\n    renderProjectlist(projectList);\r\n    renderTasklist(defaultProject);\r\n}\r\n\r\n//Global & Default Variables\r\nlet projectIndex = 0;\r\nlet taskIndex = 0;\r\nlet projectList = [];\r\n\r\n//Webapp Initialization\r\n// Init Default Variables if localStorage is empty\r\nif (localStorage.getItem(\"projectList\") === null) {\r\n    let defaultProject = new _classes_project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\r\n        \"Default Project\",\r\n        \"This is the default project description\",\r\n        \"blue\"\r\n    );\r\n    let defaultTask = new _classes_task__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\r\n        \"Default Task\",\r\n        \"This is a default task\",\r\n        \"To Do\",\r\n        \"red\"\r\n    );\r\n\r\n    defaultProject.addTask(defaultTask);\r\n    projectList.push(defaultProject);\r\n    init();\r\n}\r\n//Else if localStorage isn't empty, load the projectList from localStorage\r\nelse {\r\n    loadLocalStorage();\r\n    renderProjectlist();\r\n    renderTasklist(projectList[projectList.length - 1]);\r\n}\r\n\r\nfunction saveLocalStorage() {\r\n    localStorage.setItem(\"projectList\", JSON.stringify(projectList));\r\n}\r\n\r\nfunction loadLocalStorage() {\r\n    projectList = JSON.parse(localStorage.getItem(\"projectList\"));\r\n}\r\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;