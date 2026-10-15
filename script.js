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
