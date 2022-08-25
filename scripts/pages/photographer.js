// let myRequest = new Request("./data/photographers.json");
// fetch(myRequest)
//1ER then sert a convertir nos donnée qui ne sont toujours pas comprisent par le navigateur
// .then(res => res.json())
// .then(data => {
//     console.log(data.photographers == )
// } );

// console.log(data.photographers[0].name)
// data.photographers[0]


const idPhotographer = window.location.search.slice(4);
// console.log(idPhotographer);

const fetchPhotographer = async () => {
    await fetch(`data/photographers.json`)
        .then((res) => res.json())
        .then((data) => {
            data.photographers.forEach(element => {
                if (element.id == idPhotographer) {
                    const photographersDiv = document.querySelector("#photographer");
                    const imgDiv = document.querySelector('#div-img');
                    // const article = document.createElement('article');
                    const img = document.createElement('img');




                    let path = `./assets/photographers/${element.portrait}`;
                    img.setAttribute("src", path);



                    const nom = document.createElement('h2');

                    nom.innerHTML += element.name;
                    const location = document.createElement('h3');

                    let country = element.country;

                    let city = element.city;
                    location.innerHTML += city + ", " + country;

                    const quotes = document.createElement('p');
                    quotes.innerHTML += element.tagline;

                    const price = document.createElement('p');
                    price.innerHTML += element.price + "/jour";


                    const divPrice = document.querySelector('#sticky-price')
                    // photographersDiv.appendChild(article);
                    divPrice.appendChild(price);
                    imgDiv.appendChild(img);
                    photographersDiv.appendChild(nom);
                    photographersDiv.appendChild(location);
                    photographersDiv.appendChild(quotes);
                    // article.appendChild(price);



                    data.media.forEach(media => {

                        if (media.photographerId == idPhotographer) {
                            const figure = document.createElement('figure');
                            const figcation = document.createElement('figcaption');
                            const h3 = document.createElement('h3');

                            h3.innerHTML += media.title;

                            // const divH4 = document.querySelector("#heart-container");
                            let h4 = document.createElement('h4');
                            // rajouter les coeurs 
                            h4.innerHTML += media.likes;
                            h4.className = "singleLike";



                            const container = document.querySelector('#container-gallery');


                            // console.log(totalylike);
                            // const arrayLike = data.media.map(obj => obj.likes);



                            let totalLike = 0;

                            function displayLikes() {
                                /** ---------- Elements du DOM ---------- */
                                const nbrLikes = document.querySelectorAll(".singleLike");
                                const displayLikeCounter = document.querySelector("#total-likes");

                                /** ---------- Variables ---------- */
                                let likesText = 0;
                                var totalLike = 0;
                                let arrayLikes = [];

                                nbrLikes.forEach((like) => {
                                    likesText = parseInt(
                                        like.textContent
                                    ); /** Transforme en nombre le texte à côté de l'input (label = nombre de like) */
                                    arrayLikes.push(
                                        likesText
                                    ); /** Alimente le tableau "arrayLikes" du nombre de like de chaque média du photographe */
                                    totalLike = arrayLikes.reduce((accumulator, currentValue) => {
                                        return accumulator + currentValue;
                                    }, 0); /** Calcule la somme du tableau */
                                    return (displayLikeCounter.innerHTML =
                                        totalLike); /** Met à jour le total des likes du photographe */
                                });
                                console.log(arrayLikes);



                            }
                            displayLikes();


                            // let img = document.createElement('img');


                            // const galleryWrap = document.querySelector(".gallery-wrap");
                            // let path = `./assets/SamplePhotos/${element.name}/${media.image}`;
                            // img.setAttribute("src", path);
                            // img.setAttribute("class", "img-gallery");
                            // container.appendChild(img);

                            let img = document.createElement('img');

                            if (media.image) {

                                let path = `./assets/SamplePhotos/${element.name}/${media.image}`;
                                img.setAttribute("src", path);
                                img.setAttribute("class", "img-gallery");
                                figure.appendChild(img);
                            }
                            else {
                                const video = document.createElement("video");
                                let pathVideo = `./assets/SamplePhotos/${element.name}/${media.video}`;
                                video.setAttribute("src", pathVideo);
                                video.setAttribute("class", "video-gallery");
                                figure.appendChild(video);

                            }









                            let close = document.querySelector('.close');
                            let bodyGallery = document.querySelector('.body-gallery');



                            // faire apparaître et disparaitre la pop up gallery 
                            img.onclick = function () {
                                if (bodyGallery.style.display === "none") {
                                    bodyGallery.style.display = "block";
                                    // pour faire apparaître la photo sur laquelle on a cliqué 
                                    let imageAlone = document.querySelector("#img-alone");
                                    let path = `./assets/SamplePhotos/${element.name}/${media.image}`;

                                    // creer un tableau 
                                    imageAlone.setAttribute('src', path);
                                    console.log(path);
                                    let middle = document.querySelector('.middle');
                                    imageAlone.middle;
                                    // middle.appendChild(imageAlone);
                                }
                                else {
                                    bodyGallery.style.display = "none";
                                }
                            }
                            // fermer la popup 
                            close.onclick = function () {
                                if (bodyGallery.style.display === "none") {
                                    bodyGallery.style.display = "block";
                                }
                                else {
                                    bodyGallery.style.display = "none";
                                }

                            }

                            // let tab = ["Travel _Adventure_Door.jpg", "Architecture_Dome.jpg", "Travel_OpenMountain.jpg", "Travel_Tower.jpg"];


                            // pour ne pas avoir à taper à la main tous les titres il faut faire ça 
                            // transformer mon objet en tableau grace a map


















                            // const arr = data.media.map(photographes => {
                            //     return {

                            //         element.filter(photo => photo.photographerId === photographes.id)
                            //     }
                            // });
                            // console.log(arr);








                            // let arr = ["Sport_2000_with_8.jpg", "Fashion_Wings.jpg", "Fashion_Melody_Red_on_Stripes.jpg", "Event_VentureConference.jpg", "Event_ProductPitch.jpg", "Event_KeyboardCheck.jpg", "Event_Emcee.jpg", "Animals_Majesty.jpg",]















                            // let totalSingleLikes = document.querySelectorAll('.singleLike');


                            const imgOverflow = document.querySelector('#div-img-overflow')
                            // condition video or photo 





                            const divHeart = document.createElement('div');









                            let coeur = document.createElement('i');
                            coeur.setAttribute("class", 'fa-solid fa-heart');

                            // incrémentation coeur 
                            coeur.onclick = function () {
                                h4.innerHTML = ++media.likes;
                                displayLikes(++totalLike);
                                // h4.textContent = h4;
                            }

                            container.appendChild(figure);


                            // condition pour afficher image ou video 
                            // if (media.image) {
                            //     const img = document.createElement('img');
                            //     let path = `./assets/SamplePhotos/${element.name}/${media.image}`;
                            //     img.setAttribute("src", path);
                            //     img.setAttribute("class", "img-gallery");
                            //     figure.appendChild(img);
                            // }
                            // else {
                            //     const video = document.createElement("video");
                            //     let pathVideo = `./assets/SamplePhotos/${element.name}/${media.video}`;
                            //     video.setAttribute("src", pathVideo);

                            //     figure.appendChild(video);

                            // }

                            figure.appendChild(figcation);

                            figcation.appendChild(h3);
                            figcation.appendChild(divHeart)

                            divHeart.appendChild(h4);
                            divHeart.appendChild(coeur);






                        }


                    })



                }

            });
            // if (media == idPhotographer) {
            //     const h3Div = document.querySelector(".div-h3");
            //     const h3 = document.createElement('h3');

            //     h3.innerHTML += data.media[0].title;


            //     let path = `./assets/SamplePhotos/${data.media[0]}`;
            //  img.setAttribute("src", path);
            //     h3Div.appendChild(h3);
            // }
            // mixer les deux pour pouvvoir avoir acces au deux tableau 

        });

}

fetchPhotographer();




async function main() {

    const data = fetch(`data/photographers.json`)
        .then((res) => res.json())
        .then((data) => {
            const photos = data.media;

            const photographes = data.photographers;



            const arr = photographes.map(photographe => {
                return (
                    photos.filter(photo => photographe.id === photo.photographerId)
                )












            });



            let leftArrow = document.querySelector('.left-arrow');
            let rightArrow = document.querySelector('.right-arrow');

            var i = 0;

            leftArrow.onclick = function () {
                if (i <= 0) i = arr.length;
                i--

                return setImg();

            };

            rightArrow.onclick = function () {

                if (i >= arr.length - 1) i = -1;
                i++
                return setImg();

            };



            function setImg() {
                let image = document.querySelector('#img-alone');
                let path = `./assets/SamplePhotos/${photographes[i].name}/${arr[i].photos}`;
                image.setAttribute("src", path);
                console.log(arr[i]);
            }




        });









}

main();
