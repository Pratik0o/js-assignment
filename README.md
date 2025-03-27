# JavaScript Assignment 4 - JSON with API Request

## 📌 Project Overview
This project is a simple demonstration of fetching and displaying JSON data using JavaScript. It involves:
- Fetching a JSON file from GitHub Pages using the `fetch()` API.
- Parsing and displaying JSON data dynamically on a webpage.
- Styling the page using external CSS.

## 🚀 Live Demo
[Click here to view the live demo](https://pratik0o.github.io/js-assignment/)

## 📂 Project Structure
```
js-assignment/
│-- index.html
│-- data.json  
│-- js/
│   ├── script.js
│-- css/
│   ├── styles.css
```

## 🔧 How It Works
1. **Fetches JSON Data**: The `script.js` file uses `fetch()` to retrieve data from `data.json` hosted on GitHub Pages.
2. **Displays JSON Content**: JavaScript dynamically creates elements to display the fetched data.
3. **Styled Output**: The content is formatted using `styles.css` for a clean UI.

## 📜 JSON Data Structure
```json
[
    {
        "name": "Laptop",
        "category": "Electronics",
        "price": 899.99,
        "image": "https://via.placeholder.com/150"
    },
    {
        "name": "Coffee Mug",
        "category": "Kitchen",
        "price": 14.99,
        "image": "https://via.placeholder.com/150"
    }
]
```

## 📥 How to Run Locally
1. Clone the repository:
   ```sh
   git clone https://github.com/pratik0o/js-assignment.git
   ```
2. Open `index.html` in a browser.
3. Ensure that `data.json` is accessible from GitHub Pages.

## 📌 Technologies Used
- HTML5
- CSS3
- JavaScript (ES6+)
- GitHub Pages
