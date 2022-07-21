import Balls from "bubble-balls";

const staticUnit = document.querySelector(".js-static");
const relativeUnit = document.querySelector(".js-relative");
const hover = document.querySelector(".js-hover");

const data = [
    {
        id: 1,
        title: "Paris",
        region: "ba",
        people: 40,
        color: "royalblue",
        background: "white",
        borderColor: "royalblue",

    },
    {
        id: 2,
        title: "New York",
        region: "ba",
        people: 700,
        color: "gray",
        background: "black",
        borderColor: "white",
    },
    {
        id: 3,
        title: "London",
        people: 500,
        region: "ga",
        color: "purple",
        background: "white",
        borderColor: "purple",
    },
    {
        id: 4,
        people: 1000,
        img: "/images/pages/home/values/common/bg-big.svg",
        region: "da",
        color: "yellow",
        background: "gray",
        borderColor: "yellow",
    },
    {
        id: 5,
        people: 1000,
        img: "https://picsum.photos/200",
        region: "da",
        color: "red",
        background: "black",
        borderColor: "red",
    },
    {
        id: 6,
        people: 300,
        img: "/images/pages/home/values/common/bg-big.svg",
        region: "da",
        color: "royalblue",
        background: "white",
        borderColor: "royalblue",
    },
    {
        id: 7,
        people: 800,
        img: "https://picsum.photos/200",
        region: "da",
        color: "royalblue",
        background: "white",
        borderColor: "royalblue",
    }
];


const data2 = [
    {
        id: 1,
        title: "Paris",
        region: "ba",
        people: 1000,
    },
    {
        id: 2,
        title: "New York",
        region: "ba",
        people: 700,
    },
    {
        id: 3,
        title: "London",
        people: 500,
        region: "ga",
    },
    {
        id: 4,
        people: 800,
        img: "https://picsum.photos/200",
        region: "da",
    },
    {
        id: 6,
        title: "Shanghai",
        people: 10000,
        region: "ya",
    },
];


const data3 = [
    {
        id: 1,
        title: "Paris",
    },
    {
        id: 4,
        people: 800,
        img: "https://picsum.photos/200",
        region: "da",
    }
];

const staticApp = new Balls(staticUnit, data);

const relativeApp = new Balls(relativeUnit, data2, {
    measurementUnit: {
        name: "rem"
    },
    dimensions: {
        cols: 2,
    },

    groupsStyles: [
        {
            color: "royalblue",
            background: "white",
            borderColor: "royalblue",
        },
        {
            color: "white",
            background: "royalblue",
            borderColor: "darkblue",
        },
        {
            color: "#bada55",
            background: "indigo",
            borderColor: "indigo",
        },
        {
            color: "#bada55",
            background: "indigo",
            borderColor: "#bada55",
        },
    ],
    groupParam: {
        name: "region",
    },
    radiusParam: {
        name: "people",
    }

});


const hoverApp = new Balls(hover, data3, {
    forces: {
        collisionMultiplier: 2.5 //space between

    },
    on: {
        mouseover() {
            // do something on mouseover... "this" represent hovered el
            this.attr("opacity", "0.3")
        }, mouseout() {
            // do something on mouseout... "this" represent hovered el
            // usually it is needed to reverse the effect of "mouseover"
            this.attr("opacity", "1")
        },
    },
});
