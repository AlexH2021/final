const image_list = document.querySelectorAll('img');

function showImage() {
    //loop through images get id then add src of images
    for (item of image_list) {
        item.src = `./Images/${item.id}.png`
    }
}

// call function
showImage()