document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("product-container");

    fetch("https://pratik0o.github.io/js-assignment/data.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not OK");
            }
            return response.json();
        })
        .then(data => {
            data.forEach(item => {
                const productDiv = document.createElement("div");
                productDiv.classList.add("product");

                productDiv.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <h3>${item.name}</h3>
                    <p>Category: ${item.category}</p>
                    <p>Price: $${item.price}</p>
                `;

                container.appendChild(productDiv);
            });
        })
        .catch(error => console.error("Error fetching JSON:", error));
});
