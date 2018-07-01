  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBiPEsbVeOpppIEYFUeZYlBXzNinARr09w",
    authDomain: "cac2018-648ca.firebaseapp.com",
    databaseURL: "https://cac2018-648ca.firebaseio.com",
    projectId: "cac2018-648ca",
    storageBucket: "cac2018-648ca.appspot.com",
    messagingSenderId: "275374546726"
  };
  firebase.initializeApp(config);
let FIREBASE_DATABASE = firebase.database();
let FIREBASE_AUTH = firebase.auth();


let btnSignUp = document.getElementById("SignUp");

btnSignUp.addEventListener('click', e => {
    let pws = document.querySelectorAll(".passwordForm");
    if(pws[0].value != pws[1].value){
        alert("passwords don't match");
    }
    else{
        let firstName = document.getElementById("txtFirstName");
        let lastName = document.getElementById("txtLastName");
        let email = document.getElementById("emailForm").value;
        let password = document.getElementById("password").value;
        let userObj ={
            firstName: firstName.value,
            lastName: lastName.value
        };
        let promise = FIREBASE_AUTH.createUserWithEmailAndPassword(email, password).then(function(user){
            FIREBASE_DATABASE.ref('users/' + user.uid).set(userObj).then(
                function() {
                    console.log('User data successfully stored')
                }).catch(function(error) {
                    console.log(error);
             });
        });
    }
});