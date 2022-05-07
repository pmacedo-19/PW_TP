let suggestions = ["Ratatui", "Casa do Sushi"];

let clients = [cl0, cl1, cl2, cl3];
let cl0 = {
  name: "Unidentified",
};
let cl1 = {
  username: "jonhybd",
  email: "a11553@alunos.ipca.pt",
  pwd: "pwd123",
  name: "João Dias",
  dateOfBirth: "11/07/1995",
  gender: "M",
  userType: "admin",
  activeSubscription: true,
};
let cl2 = {
  username: "wardian",
  email: "",
  pwd: "",
  name: "",
  dateOfBirth: "",
  gender: "M",
  userType: "admin",
  activeSubscription: true,
};
let cl3 = {
  username: "M4nu3l4",
  email: "M4nu3l4@gmail.com",
  pwd: "manuela123",
  name: "Manuela Pires",
  dateOfBirth: "02/04/1999",
  gender: "F",
  userType: "client",
  activeSubscription: false,
};

let establishments = [est1, est2, est3];
let est1 = {
  owner: cl1,
  name: "Ratatui",
  address: "",
  category: cat2,
  employees: [cl1, cl3, cl0],
};
let est2 = {
  owner: cl1,
  name: "Casa do Sushi",
  address: "",
  category: cat1,
  employees: [cl3, cl0, cl0],
};
let est3 = {
  owner: cl2,
  name: "Farmácia Local",
  address: "",
  category: cat2,
  employees: [cl2, cl0],
};

let categories = [cat0, cat1, cat2];
let cat0 = {
  name: "Other",
  estRatItems: [],
  empRatItems: [],
};
let cat1 = {
  name: "Restaurant",
  estRatItems: ["Food quality", "Drinks quality", "Atmosphere", "Pricerange"],
  empRatItems: ["Attentiveness", "Manners"],
};
let cat2 = {
  name: "Pharmacy",
  estRatItems: ["Stock", "Waiting line"],
  empRatItems: ["Product knowledge", "Usefulness"],
};
