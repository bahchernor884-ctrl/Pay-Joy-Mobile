const searchBox = document.getElementById("search");
const productCards = document.querySelectorAll("#product-list .product-card");
const cartItemsList = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartCount = document.getElementById("cart-count");
const cartEmptyMessage = document.getElementById("cart-empty");
const whatsappOrderButton = document.getElementById("whatsapp-order");
const cart = [];

// Keep the product search working.
if (searchBox) {
    searchBox.addEventListener("input", function () {
        const searchText = searchBox.value.toLowerCase();

        productCards.forEach(function (card) {
            const productDetails = card.textContent.toLowerCase();
            card.style.display = productDetails.includes(searchText) ? "" : "none";
        });
    });
}

// Add one product or increase its quantity in the cart.
productCards.forEach(function (card) {
    const addButton = card.querySelector(".add-btn");

    addButton.addEventListener("click", function () {
        const productName = card.dataset.name;
        const productPrice = Number(card.dataset.price);
        const existingItem = cart.find(function (cartItem) {
            return cartItem.name === productName;
        });

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ name: productName, price: productPrice, quantity: 1 });
        }

        showCart();
    });
});

// Draw the current cart and update its total and item count.
function showCart() {
    cartItemsList.replaceChildren();

    const itemCount = cart.reduce(function (count, cartItem) {
        return count + cartItem.quantity;
    }, 0);
    const total = cart.reduce(function (sum, cartItem) {
        return sum + cartItem.price * cartItem.quantity;
    }, 0);

    cartCount.textContent = itemCount;
    cartTotal.textContent = "Le " + total;
    cartEmptyMessage.hidden = cart.length > 0;
    whatsappOrderButton.disabled = cart.length === 0;

    cart.forEach(function (cartItem) {
        const line = document.createElement("li");
        const description = document.createElement("span");
        const removeButton = document.createElement("button");

        line.className = "cart-line";
        description.textContent =
            cartItem.name + " × " + cartItem.quantity +
            " — Le " + cartItem.price + " each";
        removeButton.type = "button";
        removeButton.className = "cart-remove";
        removeButton.textContent = "Remove";
        removeButton.setAttribute("aria-label", "Remove one " + cartItem.name);
        removeButton.addEventListener("click", function () {
            cartItem.quantity -= 1;

            if (cartItem.quantity === 0) {
                const itemIndex = cart.indexOf(cartItem);
                cart.splice(itemIndex, 1);
            }

            showCart();
        });

        line.append(description, removeButton);
        cartItemsList.append(line);
    });
}

// Send an itemized order message to the pharmacy on WhatsApp.
whatsappOrderButton.addEventListener("click", function () {
    const orderLines = cart.map(function (cartItem) {
        const lineTotal = cartItem.price * cartItem.quantity;
        return cartItem.name + " x " + cartItem.quantity +
            " — Le " + cartItem.price + " each (Le " + lineTotal + ")";
    });
    const total = cart.reduce(function (sum, cartItem) {
        return sum + cartItem.price * cartItem.quantity;
    }, 0);
    const message = "Hello, I would like to order:\n" +
        orderLines.join("\n") +
        "\nTotal: Le " + total;
    const whatsappUrl = "https://wa.me/23274449532?text=" +
        encodeURIComponent(message);

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
});

showCart();
