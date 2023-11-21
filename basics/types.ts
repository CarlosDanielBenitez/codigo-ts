let age: string = "10";
let months: number = 11;
let isSenior: boolean = true;
let person: Object = {};

let fruits: Array<string> = ["grapes", "apple", "orange"]
let food: string[] = ["noodles", "rice", "pizza"]

let animals: Object[] = [
    { name: "tota", color: "black" },
    { name: "ringo", color: "gray" }
]


//combinacion de tipos
type ResponseTypeService = number | undefined;

let responseProducts:  ResponseTypeService;
let responsePartners:  ResponseTypeService;
responsePartners?.toString().concat("");

//type Assertion 
