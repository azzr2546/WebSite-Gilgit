
let createCard = (rawData) => {

    try {
        const formValue = new FormData(rawData.target);
        const imageUrl = formValue.get('image');
        const heading_1 = formValue.get('heading_1');
        const heading_2 = formValue.get('heading_2');
        const description = formValue.get('description');
        const productArray = [];
        const productObject = {};
        productObject.imageUrl = imageUrl;
        productObject.heading_1 = heading_1;
        productObject.heading_2 = heading_2;
        productObject.description = description;
        productArray.push(productObject);
        localStorage.setItem('product-data',JSON.stringify(productObject))

    }
    catch (error) {
        console.log(error.message)
    }

}