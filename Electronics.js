
//navbar closing function
const navbarCollapse = document.getElementById("navbarSupportedContent");
document.querySelectorAll(".nav-item").forEach((link) => {
  link.addEventListener("click", () => {
    navbarCollapse.classList.remove("show");
  });
});

//home clicking function
function home() {
  document.getElementById("home-content").style.display = "block";
  document.getElementById("productsDiv").innerHTML = "";
}

//search function
function performSearch(event) {
  event.preventDefault();

  if (localStorage.getItem("isLoggedIn") === "true") {
    let keyword = document.getElementById("search").value.toLowerCase().trim();
    document.getElementById("home-content").style.display = "none";
    const productsDiv = document.getElementById("productsDiv");
    productsDiv.innerHTML = "";

    if (keyword == "") {
      productsDiv.innerHTML = "Please Enter the Keyword to Search";
      return;
    }

    // Filter products
    const filteredProducts = Products.filter(
      (product) =>
        product.title.toLowerCase().includes(keyword) ||
        product.category.toLowerCase().includes(keyword) ||
        product.price <= keyword
    );

    if (filteredProducts.length === 0) {
      productsDiv.innerHTML = `<p>No products found for "${keyword}".</p>`;
      return;
    }

    // Render filtered products
    for (let product of filteredProducts) {
      productsDiv.innerHTML += 
          `<div id="card">
            <img src="${product.image}" style="width:95%; height:70%; display:block; margin:0px auto">
            <h3 style="text-align:center;font-size:0.7rem;height:25%; margin-top:1%">${product.title}</h3>
            <h3 style="text-align:center;font-size:0.9rem;;font-weight:bold;margin-top:1%">Price: $${product.price}</h3>
            <button class="btn btn-success" onclick="addToCart('${product.id}', '${product.title}')">Add to Cart</button>
          </div>`;
    }
  } else {
    alert("Please login to view products.");
    return;
  }
}

// cards Display
function display(product) {
  document.getElementById("productsDiv").innerHTML += `
          <div id="card">
            <img src="${product.Image}" style="width:95%; height:70%; display:block; margin:0px auto">
            <h3 style="text-align:center;font-size:0.7rem;height:25%; margin-top:1%">${product.Brand}</h3>
            <h3 style="text-align:center;font-size:0.9rem;;font-weight:bold;margin-top:1%">Price: ${product.Price}</h3>
            <button class="btn btn-success" onclick="addToCart('${product.Brand}','${product.Image}','${product.Price}')">Add to Cart</button>
          </div>`;
}

// mobiles api
const url1 = "https://ecommerce-api3.p.rapidapi.com/mobiles";
const options1 = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "f8172ac0b0msh50b38d66da7bc9dp1e6f12jsnf38548901b70",
    "x-rapidapi-host": "ecommerce-api3.p.rapidapi.com",
  },
};

async function getMobiles() {
  try {
    const response1 = await fetch(url1, options1);
    const mobiles = await response1.json();
    console.log(mobiles);
    if (localStorage.getItem("isLoggedIn") === "true") {
      document.getElementById("home-content").style.display = "none";
      document.getElementById("productsDiv").innerHTML = "";

      mobiles.forEach((x) => {
        display(x);
      });
    } else {
      alert("Please login to view products.");
      return;
    }
  } catch (error) {
    console.log(error);
  }
}

// Laptops api
const url2 = "https://ecommerce-api3.p.rapidapi.com/laptops";
const options2 = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "f8172ac0b0msh50b38d66da7bc9dp1e6f12jsnf38548901b70",
    "x-rapidapi-host": "ecommerce-api3.p.rapidapi.com",
  },
};

async function getLaptops() {
  try {
    const response2 = await fetch(url2, options2);
    const Laptops = await response2.json();
    console.log(Laptops);
    if (localStorage.getItem("isLoggedIn") === "true") {
      document.getElementById("home-content").style.display = "none";
      document.getElementById("productsDiv").innerHTML = "";
      Laptops.forEach((x) => {
        display(x);
      });
    } else {
      alert("Please login to view products.");
      return;
    }
  } catch (error) {
    console.log(error);
  }
}

// Watches api
const url3 = "https://ecommerce-api3.p.rapidapi.com/watches";
const options3 = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "f8172ac0b0msh50b38d66da7bc9dp1e6f12jsnf38548901b70",
    "x-rapidapi-host": "ecommerce-api3.p.rapidapi.com",
  },
};

async function getWatches() {
  try {
    const response3 = await fetch(url3, options3);
    const Watches = await response3.json();
    console.log(Watches);
    if (localStorage.getItem("isLoggedIn") === "true") {
      document.getElementById("home-content").style.display = "none";
      document.getElementById("productsDiv").innerHTML = "";
      Watches.forEach((x) => {
        display(x);
      });
    } else {
      alert("Please login to view products.");
      return;
    }
  } catch (error) {
    console.log(error);
  }
}

// Footwear api
const url4 = "https://ecommerce-api3.p.rapidapi.com/malefootwear";
const options4 = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "f8172ac0b0msh50b38d66da7bc9dp1e6f12jsnf38548901b70",
    "x-rapidapi-host": "ecommerce-api3.p.rapidapi.com",
  },
};

async function getFootwear() {
  try {
    const response4 = await fetch(url4, options4);
    const  Footwear= await response4.json();
    console.log(Footwear);
    if (localStorage.getItem("isLoggedIn") === "true") {
      document.getElementById("home-content").style.display = "none";
      document.getElementById("productsDiv").innerHTML = "";
      Footwear.forEach((x) => {
        display(x);
      });
    } else {
      alert("Please login to view products.");
      return;
    }
  } catch (error) {
    console.log(error);
  }
}

// MensWear api
const url5 = "https://ecommerce-api3.p.rapidapi.com/menswear";
const options5 = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "f8172ac0b0msh50b38d66da7bc9dp1e6f12jsnf38548901b70",
    "x-rapidapi-host": "ecommerce-api3.p.rapidapi.com",
  },
};

async function getMensWear() {
  try {
    const response5 = await fetch(url5, options5);
    const mensWear = await response5.json();
    console.log(mensWear);
    if (localStorage.getItem("isLoggedIn") === "true") {
      document.getElementById("home-content").style.display = "none";
      document.getElementById("productsDiv").innerHTML = "";
      mensWear.forEach((x) => {
        display(x);
      });
    } else {
      alert("Please login to view products.");
      return;
    }
  } catch (error) {
    console.log(error);
  }
}

//add to cart process
let cart = JSON.parse(localStorage.getItem("cart")) || []; // Load cart from localStorage
const cartItems = document.getElementById("cart");

function addToCart(Brand,Image,Price) {
    if (!cart.find(x=>x.Image)) {
      cart.push({image:Image,Brand:Brand,Price:Price});
      localStorage.setItem("cart", JSON.stringify(cart)); // Save to localStorage
      alert(`${Brand} has been added to your cart!`);
    }
    else {
     alert(`${Brand} is already in your cart!`);
   }
}


//remove cart process
function removeFromCart(image) {
  cart = cart.filter((itemId) => itemId.image== image); // Update cart array
  localStorage.setItem("cart", JSON.stringify(cart)); // Save updated cart
  const itemCard = document.getElementById(`card`);
  if (itemCard) {
    itemCard.remove();
  }
  alert("Item has been removed from your cart.");
}

// View cart process
function viewCart() {
  if (localStorage.getItem("isLoggedIn") === "true") {
    window.location.href = "cart.html"; // Redirect to cart page
    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }
  } else {
    alert("Please login to view your cart.");
    return;
  }
}

//buy Now process
function buyNow(Title, price, id) {
  const cartContainer = document.getElementById("cart");
  cartContainer.style.display = "none";
  alert("Payment is in progress...");
  setTimeout(() => {
    alert(
      `You have Successfully Buyed the product of ${Title} worth of ${price}`
    );
    removeFromCart(id);
    cartContainer.style.display = "flex";
  }, 3000);
}
