let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let form = document.getElementById("form");
let data = document.querySelector("#table tbody");
let update=document.getElementById('updt');
let edit=-1;
let users = [];
username.focus();
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let obj = {
        username: username.value,
        email: email.value,
        password: password.value,
    }
    if(edit==-1){
        users.push(obj);
    }
    else{
        users[edit] = obj;
        edit = -1; 

        update.innerText = "Submit";
        update.classList.remove('btn-primary');
        update.classList.add('btn-info');
        
    }
    username.value = " ";
    email.value = " ";
    password.value = " ";
    username.focus();
    display();
})
let display = () => {
    data.innerHTML = '';
    users.map((obj, index) => {
        let row = document.createElement('tr');

        row.innerHTML =
        
            `
            <td>${index + 1}</td>
            <td>${obj.username}</td>
            <td>${obj.email}</td>
            <td>${obj.password}</td>
            <td>
            <button class="btn btn-danger" onclick="deleteData(${index})">Delete</button>
            <button class="btn btn-warning" onclick="editData(${index})">Edit</button>
             </td>
            `
        data.append(row);

    })
}

    let deleteData=(index)=>{
        users.splice(index,1);
        display();
    }

    let editData=(index)=>{
        username.focus();
        let user = users.filter((_,idx)=>idx==index)[0];

        username.value=user.username;
        email.value=user.email;
        password.value=user.password;

        update.innerText="Update";
        update.classList.remove('btn-info');
        update.classList.add('btn-primary');
        edit=index;
    }
display();