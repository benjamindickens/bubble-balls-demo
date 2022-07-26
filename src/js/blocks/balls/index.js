import Balls from "bubble-balls";

const relativeUnit = document.querySelector(".js-relative");
const defaultUnit = document.querySelector(".js-default");
const data2 = [
    {
        id: 1,
        title: "Paris",
        color: "royalblue",
        background: "white",
        borderColor: "royalblue",

    },
    {
        id: 2,
        title: "New York",
        color: "gray",
        background: "black",
        borderColor: "white",
    },
    {
        id: 3,
        title: "London",
        color: "purple",
        background: "white",
        borderColor: "purple",
    },
    {
        id: 4,
        img: "https://picsum.photos/200",
        color: "red",
        background: "black",
        borderColor: "red",
    },
    {
        id: 5,
        img: "https://picsum.photos/200",
        color: "royalblue",
        background: "white",
        borderColor: "royalblue",
    }
];


const data = [
    {
        id: 1,
        title: "Paris",
        region: "ba",
        people: 1000,
        img: "https://picsum.photos/200",
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
        title: "Image",
        people: 800,
        img: "https://picsum.photos/200",
        region: "da",
    },
    {
        id: 5,
        title: "Tokio",
        people: 10000,
        region: "ya",
    },
    {
        id: 6,
        title: "Shenzhen",
        people: 10000,
        region: "ha",
    },
    {
        id: 7,
        title: "Rome",
        people: 10000,
        region: "ha",
    },
    {
        id: 8,
        title: "Madrid",
        people: 10000,
        region: "ha",
    },

];

const relativeApp = new Balls(relativeUnit, data, {
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
    titlePropertyName: "region",
    radiusParam: {
        name: "people",
    },
    forces: {
        collisionMultiplier: 1.1 //space between

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

const defaultApp = new Balls(defaultUnit , data2);
