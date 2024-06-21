const foodItems = [
    {
        name: "Sago Fritters",
        image: "sago fritters.jpg",
        recipeLink: "sago fritters.html"
    },
    {
        name: "Creamy Tomato Pasta with Avocado and Cheese",
        image: "cremy potato.jpg",
        recipeLink: "Tomato avacado pasta.html"
    },
    {
        name: "Apple and Goat Cheese Salad",
        image: "apple cheese.jpg",
        recipeLink: ".html"
    },
    {
        name: "Sago Pudding with Mango Cream",
        image: "mangosago.jpg",
        recipeLink: ".html"
    },    
    {
        name: "Cucumber Kimchi",
        image: "cucumber kimchi.jpg",
        recipeLink: ".html"
    },
    {
        name: "Avocado Yogurt Dip",
        image: "yoghurt cake apple filling.jpg",
        recipeLink: ".html"
    },
    {
        name: "Samosas with Sago Filling",
        image: "sago samosas.jpg",
        recipeLink: ".html"
    },    
    {
        name: "Avocado Toast with Poached Egg and Cheese",
        image: "avocado toast poached egg cheese.jpg",
        recipeLink: ".html"
    },
    {
        name: "Sago and Shrimp Fritters",
        image: "sago fritters.jpg",
        recipeLink: ".html"
    },
    {
        name: "Yogurt Popsicles with Fruit",
        image: "fruit yoghurt with fruit.jpg",
        recipeLink: ".html"
    },
    {
        name: "Tropical Yogurt Parfait",
        image: "tropical yoghurt parfait.jpg",
        recipeLink: ".html"
    },
    {
        name: "Pesto Pasta with Cherry Tomatoes, Avocado, and Mozzarella",
        image: "spaghetti.jpg",
        recipeLink: ".html"
    },
];

const foodGrid = document.querySelector(".food-grid");

foodItems.forEach(foodItem => {
    const item = document.createElement("div");
    item.classList.add("food-item");

    const image = document.createElement("img");
    image.src = foodItem.image;
    image.alt = foodItem.name;
    item.appendChild(image);

    const title = document.createElement("h3");
    title.textContent = foodItem.name;
    item.appendChild(title);

    const button = document.createElement("button");
    button.textContent = "Check Out Recipe";
    button.addEventListener("click", () => {
        window.location.href = foodItem.recipeLink;
    });
    item.appendChild(button);

    foodGrid.appendChild(item);
});
