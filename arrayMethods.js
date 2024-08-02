let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(companies);

//Remove the first company from array-
companies.shift();
console.log(companies);

//Add Amazon at the end-
companies.push("Amazon");
console.log(companies);

//Remove Uber and add Ola in it's place-
companies.splice(2,1,"Ola");
console.log(companies);