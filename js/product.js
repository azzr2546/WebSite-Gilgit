let loadMyProducts = () => {
    try {
        const getProductsFromLocalStorage =  JSON.parse(localStorage.getItem('product-data'));
        console.log(getProductsFromLocalStorage);
        const getCardDiv = document.querySelector('.wrappers');
        getCardDiv.innerHTML = `
        <div class="card" style="width: 18rem;">
                <img src="${getProductsFromLocalStorage.imageUrl}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h3 class="card-title">${getProductsFromLocalStorage.heading_1}</h3>
                  <h5 class="card-title">${getProductsFromLocalStorage.heading_2}</h5>
                  <p class="card-text">${getProductsFromLocalStorage.description}</p>
                  <button class="btn btn-outline-info w-100">Check</button>
                </div>
              </div>
        `
    } catch (error) {
        console.log(error.message)
    }
}