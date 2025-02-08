const card = (id, title, imageSrc, date, description) => {
    return `
    <div class="project__card">
        <img src="/image/${imageSrc}" alt="${title}" class="project__card--image">
        <div class="card__info">
            <h5>${title}</h5>
            <p>${date}</p>
        </div>
        <p class="desc">${description}</p>
        <button class="btn" data-id="${id}">View Live Demo</button>
    </div>
    `
}

const data = [
    {id:1, title: "Lion Template", imageSrc:"lion-template.png", date:"28 Aug 2024", description:"Simple template with HTML, CSS and JavaScript this is my first project as front end developer."},
    {id:2, title: " Inventory Management System", imageSrc:"inventory.png", date:"12 Nov 2024", description:"This project is a simple Inventory Management System built using HTML, CSS, and JavaScript. It allows users to perform CRUD (Create, Read, Update, Delete) operations on inventory items, which are stored locally in the browser using localStorage. The system allows users to manage product data including title, category, count, price, taxes, ads, and discounts, with calculations for the total price."},
    {id:3, title: "Customer Management System", imageSrc:"crm.png", date:"1 Jan 2025", description:"Our Django-based CRM is a powerful web application designed to streamline customer management. Built with Django, Bootstrap, and Crispy Forms, it provides a user-friendly and efficient interface for handling customer data."},
    {id:4, title: "SmartEdu", imageSrc:"edu.png", date:"24 Jun 2024", description:"Education System to manage classes, teachers, libraries and all thing for education organizations."},
]

const cards_1 = document.getElementById('cards-1');
const cards_2 = document.getElementById('cards-2');

data.forEach(({id, title, imageSrc, date, description}) => {
    cards_1.innerHTML += card(id, title, imageSrc, date, description);
    cards_2.innerHTML += card(id, title, imageSrc, date, description);
})