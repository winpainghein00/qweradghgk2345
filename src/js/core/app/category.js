import { categories, products } from "../data";
import { categoryGroup, categoryTemplate } from "../selectors";
import { renderProduct } from "./product";

export const createCategory = (categoryName) => {
    const template = categoryTemplate.content.cloneNode(true);
    template.querySelector(".cat-btn").innerText = categoryName;
    return template;
};

export const renderCategory = (categories) => {
    categories.forEach(cat => categoryGroup.append(createCategory(cat)));
};

export const handleCategoryGroup = (event) => {
    if(event.target.classList.contains("cat-btn")){
        // console.log(event.target);

        const currentCategoryBtn = event.target;
        document.querySelector(".cat-btn.active")?.classList.remove("active");
        currentCategoryBtn.classList.add("active");

       const currentCategory = event.target.innerText;
       
    //    console.log(currentCategory);
        renderProduct(products.filter(product => product.category === currentCategory || currentCategory === "All"));

    }
    
};