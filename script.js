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

// Projects

const projects = [
    {
        name: "Chess Games Analyzing System",
        description: "Analysis of lichess.org dataset using graph models and K-means clustering.",
        technology: "JavaScript",
        details: "Implemented interactive charts to visualize PageRank and Louvain algorithm results on chess matches. Data structured into nodes and edges."
    },
    {
        name: "My Personal Portfolio",
        description: "A responsive portfolio website to showcase my resume and academic interests.",
        technology: "HTML/CSS",
        details: "Built with pure HTML and CSS using Flexbox for responsive design, completely styled from scratch."
    },
    {
        name: "Nand2Tetris Web Interface",
        description: "A web-based interactive tool for writing and testing Hack assembly programs.",
        technology: "JavaScript",
        details: "Created a DOM-based editor that interacts with simulated hardware logic gates."
    },
    {
        name: "CSS Grid Landing Page",
        description: "A modern, accessible landing page with complex layouts.",
        technology: "HTML/CSS",
        details: "Focuses on modern UI/UX principles, semantic HTML, and advanced CSS Grid structures."
    }
];

const projectsContainer = document.querySelector("#projects-container");

function renderProjects(filterType) {
    // Delete all the previous information from the container.
    projectsContainer.innerHTML = "";
    // Filter projects by filterType
    const filteredProjects = projects.filter((project) => {
        if (filterType === "All"){
            return true;
        } 
        return project.technology === filterType;
    });
    filteredProjects.forEach(project => {
        const card = document.createElement("div");
        card.classList.add("project-card");
        card.innerHTML = `
            <h2>${project.name}</h2>
            <p><strong>Technology:</strong> ${project.technology}</p>
            <p>${project.description}</p>
            <div class="project-details hidden">
                <p>${project.details}</p>
            </div>
            <button class="btn btn-small btn-toggle">View details</button>
        `;

        const toggleBtn = card.querySelector(".btn-toggle");
        const detailsDiv = card.querySelector(".project-details");

        toggleBtn.addEventListener("click", () => {
            detailsDiv.classList.toggle("hidden");
            
            if (detailsDiv.classList.contains("hidden")) {
                toggleBtn.textContent = "View details";
            } else {
                toggleBtn.textContent = "Hide details";
            }
        });

        projectsContainer.appendChild(card);
    });
}

renderProjects("All");

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        const selectedFilter = event.target.textContent;
        renderProjects(selectedFilter);
    });
});

