//initialize variables
const image_list = document.querySelectorAll('img');
const album_section = document.querySelector('#album-section');
const footer_cart = document.querySelector('#footer-cart');

let albums = [
    { name: "Album 1", price: 12.99, addedToCart: false },
    { name: "Album 2", price: 14.99, addedToCart: false },
    { name: "Album 3", price: 9.99, addedToCart: false },
    { name: "Album 4", price: 19.99, addedToCart: false }
];


function showImage() {
    //loop through images get id then add src of images
    for (item of image_list) {
        item.src = `./Images/${item.id}.png`
    }
}

function handleClick(event) {
    // handle click item and add it to cart
    event.stopPropagation();
    let clicked_child_id = event.target.id;

    for (let item of albums) {
        if (item.name === clicked_child_id) {
            if (item.addedToCart === false) {
                addItem(item.name, item.name, item.price);
                item.addedToCart = true;
                break;
            } else {
                alert('Album already added in cart!');
                break;
            }
        }
    }
}

function addItem(src, name, price) {
    //create new item
    let new_img = document.createElement('img');
    new_img.src = `./Images/${src}.png`
    new_img.alt = `${src}`
    footer_cart.appendChild(new_img);

    let new_name = document.createElement('p');
    new_name.textContent = `${name}`;
    footer_cart.appendChild(new_name);

    let new_price = document.createElement('p');
    new_price.textContent = `${price}`;
    footer_cart.appendChild(new_price);
}

// call function
showImage()

//event click
album_section.addEventListener("click", handleClick);