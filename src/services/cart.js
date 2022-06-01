
const getCart = ()=>{
    return new Promise((resolve, reject) => resolve([{
        img: "images/samurai_king_resting.png",
        title: "Samurai King Resting",
        category: "Pets",
        description: "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock.",
        price: 10000,
        bestSeller: false
    }]));
}

export { getCart }