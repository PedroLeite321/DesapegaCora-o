const apiRequestMain = () => {
    let myQuery = "furniture";
    let myCurrentItem = 0;// Initialize lastNumber outside the function
    let i = 0;

    const states = {
        pageUserInteract: {
            userRButtons: document.querySelector(".right_button"),
            userLButtons: document.querySelector(".left_button"),
        },
        pageViewElements: {
            myImage: document.getElementById("my__furniture__img"),
            mySellingItems: document.querySelector(".selling__items"),
        },
    };

     

  

    const myFetch = (key, url) => {
        fetch(url, {
            headers: {
                Authorization: key,
            }
        })
        .then(response => response.json())
        .then(data => {
            for(let j = 0; j <= 9; j++) {
                let myImages = document.createElement("img");
                let buttonContainer = document.createElement("div");
                let firstButton = document.createElement("button");
                let secondButton = document.createElement("button");

                buttonContainer.setAttribute("class", "button__container");
                firstButton.setAttribute("class", "first__button");
                secondButton.setAttribute("class", "second__button");
                myImages.setAttribute("class", "my__image__list");

                myImages.src = data.photos[j].src.medium;
                states.pageViewElements.mySellingItems.appendChild(myImages);
            }


        })
        .catch(error => {
            console.error("Generic error: fetching images", error);
        });
    };
    
    const myApiConnector = () => {
        const myApiKey = "xAqNDHxiSkL41H9pIIcBwiTmbEFAf5iAROwre8KzXPBR4Cknj0lpYTr2";
        const myApiUrl = `https://api.pexels.com/v1/search?query=${myQuery}&per_page=10`;
        myFetch(myApiKey, myApiUrl);
    };

    const checkNextNumber = () => {
        i++;
        myApiConnector();
        
    }
    const checkPrevNumber = () => {
        i--;
        myApiConnector();
    }

    myApiConnector();
    console.log("Test");
};

apiRequestMain();
