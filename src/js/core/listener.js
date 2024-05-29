import { handleCartItemGroup } from "./app/cart";
import { handleCategoryGroup } from "./app/category";
import { handleProductGroup, handleSearchBtn } from "./app/product";
import { cartItemGroup, categoryGroup, productGroup, searchBtn } from "./selectors";

const listener = () => {
    categoryGroup.addEventListener("click",handleCategoryGroup);
    productGroup.addEventListener("click",handleProductGroup);
    cartItemGroup.addEventListener("click",handleCartItemGroup);
    searchBtn.addEventListener("click",handleSearchBtn)
}; 

export default listener;
