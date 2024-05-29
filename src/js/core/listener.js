import { handleCartItemGroup, orderBtnHandler } from "./app/cart";
import { handleCategoryGroup } from "./app/category";
import { handleProductGroup, handleSearchBtn } from "./app/product";
import { cartItemGroup, categoryGroup, orderBtn, productGroup, searchBtn } from "./selectors";

const listener = () => {
    categoryGroup.addEventListener("click",handleCategoryGroup);
    productGroup.addEventListener("click",handleProductGroup);
    cartItemGroup.addEventListener("click",handleCartItemGroup);
    searchBtn.addEventListener("click",handleSearchBtn);
    orderBtn.addEventListener("click",orderBtnHandler);
}; 

export default listener;
