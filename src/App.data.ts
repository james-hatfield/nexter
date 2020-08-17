import { IHome } from "./App.types";

export const homes: IHome[] = [
  {
    name: "Beautiful Family House",
    location: "USA",
    rooms: "5 rooms",
    size: "325 m",
    price: "$1,200,000",
    image: require("./assets/house-1.jpeg"),
  },
  {
    name: "Modern Glass Villa",
    location: "Canada",
    rooms: "6 rooms",
    size: "450 m",
    price: "$2,750,000",
    image: require("./assets/house-2.jpeg"),
  },
  {
    name: "Cozy Country Home",
    location: "UK",
    rooms: "4 rooms",
    size: "250 m",
    price: "$850,000",
    image: require("./assets/house-3.jpeg"),
  },
  {
    name: "Large Rustical Villa",
    location: "Portugal",
    rooms: "6 rooms",
    size: "489 m",
    price: "$1,950,000",
    image: require("./assets/house-4.jpeg"),
  },
  {
    name: "Majestic Palace House",
    location: "Germany",
    rooms: "18 rooms",
    size: "4230 m",
    price: "$9,500,000",
    image: require("./assets/house-5.jpeg"),
  },
  {
    name: "Modern Family Apartment",
    location: "Italy",
    rooms: "3 rooms",
    size: "180 m",
    price: "$600,000",
    image: require("./assets/house-6.jpeg"),
  },
];
