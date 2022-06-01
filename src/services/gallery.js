const getGallery = ()=> {
    return new Promise((resolve, reject)=>{
        resolve([
            {
                img: "images/tenisGirls.png",
                title: "Red Bench",
                category: "People",
                price: 3.89,
                bestSeller: true
            },{
                img: "images/eggGlove.png",
                title: "Egg Baloon",
                category: "Food",
                price: 93.89,
                bestSeller: false
            },{
                img: "images/eggGlove.png",
                title: "Egg Baloon",
                category: "Food",
                price: 93.89,
                bestSeller: false
            },{
                img: "images/manAlone.png",
                title: "Man",
                category: "People",
                price: 100.00,
                bestSeller: false
            },{
                img: "images/orangeBuilding.png",
                title: "Architecture",
                category: "Landmarks",
                price: 101.00,
                bestSeller: false
            },{
                img: "images/orangeBuilding.png",
                title: "Architecture",
                category: "Landmarks",
                price: 101.00,
                bestSeller: false
            }
        ]);
    });
}

export {getGallery}