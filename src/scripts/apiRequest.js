const apiRequestMain = () =>    {
    const states = {
        pageInteractiveElements: {
            userSeacher: document.querySelector("."),
            nextImage_Right: document.querySelector("."),
            nextImage_Left: document.querySelector("."),
            submitButton: document.querySelector("")

        },

        pageViewElements: {
            myModal: document.querySelector("."),
            
        }
    };
    state
    const myApiConnector = () => {

        const myApiKey = "xAqNDHxiSkL41H9pIIcBwiTmbEFAf5iAROwre8KzXPBR4Cknj0lpYTr2";
        const myQuery = "";
        const myApiUrl = `https://api.pexels.com/v1/search?query=${myQuery}&per_page=10`;

        
    }

    const myFetch = (key, url, query) => {
        fetch(url, {
            headers: {
                Authorization: key,
            }
        })
        .then(response => response.json) 
        .then(data => {
            data.photos.forEach(photo => {
                //I should probably base this on monitor screen.
                const imgUrl = photo.src.medium;
                alert(imgUrl);
            });
        })
        .catch(error => console.error("Generic error: fetching images", error));
    }
}