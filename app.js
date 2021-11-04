//task 1

const mybutton=document.querySelector('#enter');
function handlebuttonclick (event) {
    console.log(event);
    const mybutton=document.querySelector('#enter');
    mybutton.remove
}
mybutton.querySelector('enter', handlemybuttonanter)

//task 2

let img=document.recreaElement('img');
Myimg.src="https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg";

//task 3
const user =[
    {
        first_name: "anny",
        last_name: "tsotskhalashvili",
        avatar:  "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg",
        email: "annytsotskhalashvili@gmail.com"
    }
    {
        first_name: "anny",
        last_name: "tsotskhalashvili",
        avatar:  "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg",
        email: "annytsotskhalashvili@gmail.com"
    }
    {
        first_name: "anny",
        last_name: "tsotskhalashvili",
        avatar:  "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg",
        email: "annytsotskhalashvili@gmail.com"
    }
];
function renderUserCards() {
    const userTableContainer = document.querySelector("#list");
    const userTableBody = userTableContainer.querySelector("tbody");
    const userItems = users.map(users => {
         return `<tr>
                    <td><img alt ="${users.first_name}" src="${users.avatar}"></td>
                    <td>${users.first_name} ${users.last_name}</td>
                    <td><button onclick="deleteuser()" id = "deleteuser">delete</button></td>
                    <td><button id = "extrainfo">info</button></td>
                </tr>
    `})