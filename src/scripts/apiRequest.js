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
        },
    };

    states.pageUserInteract.userLButtons.addEventListener("click", () => {
        checkPrevNumber();
    });

    states.pageUserInteract.userRButtons.addEventListener("click", () => {
        console.log("Teste");
         checkNextNumber();
    })

  

    const myFetch = (key, url) => {
        fetch(url, {
            headers: {
                Authorization: key,
            }
        })
        .then(response => response.json())
        .then(data => {
            
            const firstImg = data.photos[i].src.medium;
            states.pageViewElements.myImage.src = firstImg;
        })
        .catch(error => {
            if(i < 0) {
                i = 0;
                alert("Não há nada para ser mostrado.");
            }
            i = 0;
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
