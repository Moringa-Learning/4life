
window.onload = (event) => {
    
  

function User(id, age, gender, password ) {
    this.id = id;
    this.age = age;
    this.gender = gender;
    this.password = password;

}

const id = document.querySelector('#id');
const age1 = document.querySelector('#age');
const gender = document.querySelector('#gender');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
var question = document.querySelector('#question');
var randomNum = document.querySelector('.randomNum');
var regbtn = document.querySelector('#register');



regbtn.addEventListener('submit', register);


// randomNum.addEventListener('click', randomNumber)
function randomNumber(length) {
    var randomNumber;
    var number = '';

    for(var count = 0; count < length; count++) {
        randomNumber = Math.floor(Math.random() * 10);
        number += randomNumber.toString();
    }
    return number;
}

id.value = randomNumber(5);

function register(e){
var newUser = new User(id.value, age1.value, gender.value, password.value);
    
    if(age1.value===''|| gender.value===''||password.value===""){
    alert('All fields are required')
    return false;
}

    else if(password.value!=confirmPassword.value){
        alert('password do not match')
        return false;
    }
  localStorage.setItem('user', JSON.stringify(newUser))

  
//   e.preventDefault();
}

// let saveObjects = function(userkey,newUser){
//     let str = JSON.stringify(newUser);
//     return localStorage.setItem(userkey, str)
//   }

//   let def = 0
  
//     if (localStorage.length === 0){
//       saveObjects('user', def);
//       location.reload();
//     }else{
//       def = localStorage.length
    
//         def += 1
//         saveObjects('user', def)
//         console.log('saved')
      
//     }
//     if (conditon){
//         var newUser = new User(id.value, age1.value, gender.value, password.value);
//         saveObjects('user'+def, newUser);
//       }
//}
  
}

