

// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyB2eUCxabjWw5M_2fOXKA5Nim4CIQ5SNnU",
      authDomain: "letschat-db64d.firebaseapp.com",
      databaseURL: "https://letschat-db64d-default-rtdb.firebaseio.com",
      projectId: "letschat-db64d",
      storageBucket: "letschat-db64d.appspot.com",
      messagingSenderId: "12905970686",
      appId: "1:12905970686:web:ec1ba23ad8079a0eb61eaf"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "welcome"+ user_name +"!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name-"+ Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      });});}
getData();

function  addRoom()
     {
           room_name = document.getElementById("room_name").value;

           firebase.database().ref("/").child(room_name).update({
                 purpose : "adding room name"
           });

           localStorage.setItem("room_name", room_name);

           window.location = "kwitter_page.html";
     }

     function redirectToRoomName(name)
     {
           console.log(name);
           localStorage.setItem("room_name", name);
           window.location ="kwitter_page.html";
     }

    function logout()
    {

    } 
