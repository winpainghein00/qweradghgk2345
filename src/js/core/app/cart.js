import Swal from "sweetalert2";
import { cardItemTemplate, cartTotal, productGroup } from "../selectors";

export const createCart = (product, quantity) => {
    const template = cardItemTemplate.content.cloneNode(true);
    template
        .querySelector(".cart-item")
        .setAttribute("cart-product-id", product.id);
    template.querySelector(".cart-item-img").src = product.image;
    template.querySelector(".cart-title").innerText = product.title;
    template.querySelector(".cart-price").innerText = product.price;
    template.querySelector(".cart-cost").innerText = product.price * quantity;
    template.querySelector(".cart-quantity ").innerText = quantity;
    return template;
};

export const cartItemTotal = () => {
    const total = document.querySelectorAll(".cart-item");
    // console.log(total.length);
    return total.length;
};

export const updateCartCount = () => {
    const currentTotal = cartItemTotal()
    cartItemCount.innerText = currentTotal;
    cartCount.innerText = currentTotal;
};

export const cartCostTotal = () => {
    const total = [...document.querySelectorAll(".cart-cost")].reduce(
        (pv, cv) => pv + parseFloat(cv.innerText),
        0
    );
    return total;
};

export const updateCartCostTotal = () => {
    const total = cartCostTotal().toFixed(2);
    cartTotal.innerText = total;
};

export const handleCartItemGroup = (event) => {
    if (event.target.classList.contains("cart-del-btn")) {
        const currentCart = event.target.closest(".cart-item");
        const currentProductId = currentCart.getAttribute("cart-product-id");

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                currentCart.remove();
                updateCartCostTotal();
                updateCartCount();
                const currentProduct = productGroup.querySelector(`[product-id = '${currentProductId}']`);
                if (currentProduct) {
                    const currentProductAddCartBtn = currentProduct.querySelector(
                        ".product-add-cart-btn");
                    currentProductAddCartBtn.removeAttribute("disabled");
                    currentProductAddCartBtn.innerText = "Add to Cart";
                }
            }
        });
    } else if (event.target.classList.contains("cart-q-add")) {
        const cart = event.target.closest(".cart-item");
        const currentPrice = cart.querySelector(".cart-price");
        const currentCost = cart.querySelector(".cart-cost");
        const currentQuantity = cart.querySelector(".cart-quantity");
        currentQuantity.innerText = parseInt(currentQuantity.innerText) + 1;
        currentCost.innerText = (
            currentPrice.innerText * currentQuantity.innerText
        ).toFixed(2);
        updateCartCostTotal();
    } else if (event.target.classList.contains("cart-q-sub")) {
        const cart = event.target.closest(".cart-item");
        const currentPrice = cart.querySelector(".cart-price");
        const currentCost = cart.querySelector(".cart-cost");
        const currentQuantity = cart.querySelector(".cart-quantity");
        if (currentQuantity.innerText > 1) {
            currentQuantity.innerText = parseInt(currentQuantity.innerText) - 1;
            currentCost.innerText = (
                currentPrice.innerText * currentQuantity.innerText
            ).toFixed(2);
            updateCartCostTotal();
        }
    }
};

// export const deleteCart = (event) => {
//     const cart = event.target.closest(".cart-item");
//     cart.remove();
//     updateCartCount();
//     updateCartCostTotal();
// };
