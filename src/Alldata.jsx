const Pcard = [
    {
        key: 0,
        img: "images/category-1.jpg",
        img: "../"
    },
    {
        key: 1,
        img: "images/category-2.jpg"
    },
    {
        key: 2,
        img: "images/category-3.jpg"
    }
]

const Fcard = [
    {
        key: 0,
        img: "images/product-1.jpg",
        title: "Red Printed T-shirt",
        price: "$50",
    },
    {
        key: 1,
        img: "images/product-2.jpg",
        title: "HRX Sports Shoes",
        price: "$100",
    },
    {
        key: 2,
        img: "images/product-3.jpg",
        title: "HRX Gray Trackpant",
        price: "$120",
    },
    {
        key: 3,
        img: "images/product-4.jpg",
        title: "Blue Printed T-shirt",
        price: "$80",
    },

]

const Lcard = [
    {
        key: 0,
        img: "images/product-5.jpg",
        title: "Puma Gray Shoes",
        price: "$95",
    },
    {
        key: 1,
        img: "images/product-6.jpg",
        title: "Black Printed T-shirt",
        price: "$55",
    },
    {
        key: 2,
        img: "images/product-7.jpg",
        title: "HRX Set of 3 Socks",
        price: "$30",
    },
    {
        key: 3,
        img: "images/product-8.jpg",
        title: "Black Fossil Watch",
        price: "$120",
    },
    // {
    //     img: "images/product-9.jpg",
    //     title: "Red Printed T-shirt",
    //     price: "$50",
    // },
    // {
    //     img: "images/product-10.jpg",
    //     title: "Red Printed T-shirt",
    //     price: "$50",
    // },
    // {
    //     img: "images/product-11.jpg",
    //     title: "Red Printed T-shirt",
    //     price: "$50",
    // },
    // {
    //     img: "images/product-12.jpg",
    //     title: "Red Printed T-shirt",
    //     price: "$50",
    // }
]

const Brand = [
    {
        key: 0,
        img: "images/logo-godrej.png"
    },
    {
        key: 1,
        img: "images/logo-coca-cola.png"
    },
    {
        key: 2,
        img: "images/logo-oppo.png"
    },
    {
        key: 3,
        img: "images/logo-paypal.png"
    },
    {
        key: 4,
        img: "images/logo-philips.png"
    },

]


const Pdata = [
    {
        key: 0,
        img: "images/product-5.jpg",
        title: "Puma Gray Shoes",
        price: "$95",
    },
    {
        key: 1,
        img: "images/product-6.jpg",
        title: "Black Printed T-shirt",
        price: "$120",
    },
    {
        key: 2,
        img: "images/product-7.jpg",
        title: "HRX Set of 3 Socks",
        price: "$120",
    },
    {
        key: 3,
        img: "images/product-8.jpg",
        title: "Black Fossil Watch",
        price: "$120",
    },
    {
        key: 4,
        img: "images/product-9.jpg",
        title: "Black Fossil Watch",
        price: "$95",
    },
    {
        key: 5,
        img: "images/product-10.jpg",
        title: "HRX Sports Shoes",
        price: "$120",
    },
    {
        key: 6,
        img: "images/product-11.jpg",
        title: "Puma Gray Shoes",
        price: "$120",
    },
    {
        key: 7,
        img: "images/product-12.jpg",
        title: "Black Trackpant",
        price: "$120",
    },

]
let data = [];
const pictures = Pdata;
localStorage.setItem('Pic', JSON.stringify(pictures));
data = JSON.parse(localStorage.getItem('Pic'));
// console.log(data[0]);
// console.log(pictures);
const gallery = [
    {
        key: 0,
        img: "images/gallery-1.jpg"
    },
    {
        key: 1,
        img: "images/gallery-2.jpg"
    },
    {
        key: 2,
        img: "images/gallery-3.jpg"
    },
    {
        key: 3,
        img: "images/gallery-4.jpg"
    },

]
const Rdata = [
    {
        key: 0,
        img: "images/product-9.jpg",
        title: "Puma Gray Shoes",
        price: "$95",
    },
    {
        key: 1,
        img: "images/product-10.jpg",
        title: "Black Fossil Watch",
        price: "$120",
    },
    {
        key: 2,
        img: "images/product-11.jpg",
        title: "Black Fossil Watch",
        price: "$120",
    },
    {
        key: 3,
        img: "images/product-12.jpg",
        title: "Black Fossil Watch",
        price: "$120",
    },

]
export {
    Pcard,
    Fcard,
    Lcard,
    Brand,
    Pdata,
    gallery,
    Rdata

}  