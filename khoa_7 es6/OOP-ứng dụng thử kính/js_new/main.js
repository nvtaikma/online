import { Glasses } from "./glasses.js";
import {GlassesList } from "./glassesList.js";

let dataGlasses = [
    {id:"G1",src:"./img/g1.jpg",virtualImg:"./img/v1.png",brand:"Armani Exchange",name:"Bamboo wood",color:"Brown",price:150,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? "},
    {id:"G2",src:"./img/g2.jpg",virtualImg:"./img/v2.png",brand:"Arnette",name:"American flag",color:"American flag",price:150,description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio."},
    {id:"G3",src:"./img/g3.jpg",virtualImg:"./img/v3.png",brand:"Burberry",name:"Belt of Hippolyte",color:"Blue",price:100,description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit."},
    {id:"G4",src:"./img/g4.jpg",virtualImg:"./img/v4.png",brand:"Coarch",name:"Cretan Bull",color:"Red",price:100,description:"In assumenda earum eaque doloremque, tempore distinctio."},
    {id:"G5",src:"./img/g5.jpg",virtualImg:"./img/v5.png",brand:"D&G",name:"JOYRIDE",color:"Gold",price:180,description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?"},
    {id:"G6",src:"./img/g6.jpg",virtualImg:"./img/v6.png",brand:"Polo",name:"NATTY ICE",color:"Blue, White",price:120,description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit."},
    {id:"G7",src:"./img/g7.jpg",virtualImg:"./img/v7.png",brand:"Ralph",name:"TORTOISE",color:"Black, Yellow",price:120,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam."},
    {id:"G8",src:"./img/g8.jpg",virtualImg:"./img/v8.png",brand:"Polo",name:"NATTY ICE",color:"Red, Black",price:120,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim."},
    {id:"G9",src:"./img/g9.jpg",virtualImg:"./img/v9.png",brand:"Coarch",name:"MIDNIGHT VIXEN REMIX",color:"Blue, Black",price:120,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet."}
]; 
//import


// hàm rút gọt getElementByID
const getEle = (id) =>{
    return document.getElementById(id);
}
let glassesList = new GlassesList();

// haàm hiển thị list kính
const showListGlasse = () =>{
    let divvglassesList = getEle('vglassesList');

// tạo đối tượng kính và thêm kính
// duyệt mảng data
dataGlasses.map((item, index) =>{
    let gl = new Glasses(item.id, item.src, item.virtualImg, item.brand, item.name, item.color, item.price, item.description);
    // console.log(gl);
    glassesList.addGlasses(gl);

});
// console.log(glassesList.glist);
    divvglassesList.innerHTML = glassesList.renderGlasses();
}
// goi ham
showListGlasse();
const tryOnGlasses = (e) => {
    // console.log(e);
    let gId = e.target.getAttribute("data-id");
    let gObject = {};
    // value là một đói tượng kính trong danh sách kính
    for (let value of glassesList.glist){
        if (value.id == gId){
            gObject = value;
        }
    }
    // console.log(gObject);
    showInfo(gObject);
}
window.tryOnGlasses = tryOnGlasses;

const showInfo = (gObject) =>{
    let divAvatar = getEle('avatar');
    let divInfo = getEle('glassesInfo');

    divAvatar.innerHTML =`
        <img id="glasses" src="${gObject.virtualImg}">
    `;
    let status = "";
    if (gObject.status){
        status = "Stocking";
    }else{
        status = "sold out";
    }
    divInfo.innerHTML =`
        <h5>${gObject.name} - ${gObject.brand} (${gObject.color}) </h5>
        <p class="card-text">
            <span class="btn btn-danger btn-sm mr-2">
                ${gObject.price}
            </span>
            <span class="text-success">${status}</span>
        </p>
        <p class="card-text">
        ${gObject.desc}
        </p>
    
    `;
    divInfo.style.display = 'block';
}

// before and after

const removeGlasses = (isDislay) => {
    let glasses = getEle('glasses');
    if(glasses != null){
        if (isDislay){
            glasses.style.display = 'block';
    
        }else{
            glasses.style.display = 'none';
        }
    }
   
}
window.removeGlasses = removeGlasses;

    





