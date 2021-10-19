console.log("merhaba kodlama.io");
//JS type safe degildir.
let dolarBugun = 9.3;

let dolarDun = 9.2;
dolarDun = "9.20";
{
  let dolarDun = 9.1;
}

console.log(dolarDun);

const euroDun = 11.3;
//euroDun = 11;

console.log(euroDun);

//array
//camelCasing
//PascalCasing
let konutkredileri = [
  "konut kredisi",
  "emlak konut kredisi",
  "kamu konut kredisi",
  "ozel konut kredisi",
];
//i= index
console.log("<ul>");
for (let i = 0; i < konutkredileri.length; i++) {
  console.log("<li>" + konutkredileri[i] + "</li>");
}
console.log("</ul>");

{
  /* <ul>
    <li>konut kredisi</li> 
    <li>emlak konut kredisi</li> 
    <li>kamu konut kredisi</li> 
</ul> */
}

console.log(konutkredileri);
