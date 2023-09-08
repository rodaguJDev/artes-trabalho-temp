$(() => {
    $(".img").on("click", (e) => {
        const background = e.currentTarget.style.backgroundImage;
        const pattern = /(?<=image_)\d/g;
        const id = `image-${pattern.exec(background)}`;

        showImage(id);
    })

    $('#close-image').on("click", (e) => {
        showParallax();
    })

    function showImage(imgId) {
        hideParallax();
        hideAllImages();
        $(`#${imgId}`).show();
    }

    function showParallax() {
        hideAllImages();
        $(".stage").show();
    }

    function hideAllImages() {
        $(".image-container").hide();
    }

    function hideParallax() {
        $(".stage").hide();
    }
})
