// Read more about Me
const button = document.querySelector("#btn-readme");
const container = document.querySelector("#readme-container");

button.addEventListener('click', (event)=>{
    event.preventDefault();
    if (container.classList.contains("hidden")){
        container.classList.remove("hidden");
        button.textContent = 'Read Less';
    } else {
        container.classList.add("hidden");
        button.textContent = 'Read more about Me';
    }
});

// Contact Form
const form = document.querySelector("#contact-form");
const submissionMessage = document.querySelector("#result-message");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const nameForm = document.querySelector("#name").value.trim();
    const emailForm = document.querySelector("#email").value.trim();
    const messageForm = document.querySelector("#message").value.trim();
    if((!nameForm) || (!emailForm) || (!messageForm)){
        submissionMessage.textContent = "Please fill in all required fields";
        return;
    }
    submissionMessage.textContent = "Submission Completed";
});

// Skills

const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Java",
    "Git",
    "Github",
    "LaTeX",
    "HDL",
    "VM"
]

const skillContainer = document.querySelector("#skills-container");
for (const skill of skills){
    const skillElement = document.createElement("div");
    skillElement.classList.add("btn");
    skillElement.textContent = skill;
    skillContainer.appendChild(skillElement);
}