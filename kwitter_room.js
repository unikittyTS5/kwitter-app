
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyC-n-LjmDBnnaUhYgG9DjeR90-I2aKcJ9o",
      authDomain: "medical-chat-app-4b2f5.firebaseapp.com",
      databaseURL: "https://medical-chat-app-4b2f5.firebaseio.com",
      projectId: "medical-chat-app-4b2f5",
      storageBucket: "medical-chat-app-4b2f5.appspot.com",
      messagingSenderId: "859263911159",
      appId: "1:859263911159:web:743a0fd75f8d8b6f233ff2"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig); 
    user_name = localStorage.getItem("user_name"); 
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!🙂🙃🐬💻";

    //user_name = localStorage.getItem("user_name");
    //document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"

   // function addRoom()
    //{
          //room_name = document.getElementById("room_name").value;
      //firebase.database().ref("/").child(room_name).update({
            //purpose : "adding room name"
      //});

      //localStorage.setItem("room_name", room_name);

      //window.location = "kwitter_page.html";
    //}

    function addRoom() 
    { room_name = document.getElementById("room_name").value; firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" }); localStorage.setItem("room_name", room_name); window.location = "kwitter_page.html"; }


//function getData() 
//{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = ""; 
      //snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       //Room_names = childKey;
      //Start code
//console.log("Room Name - " + Room_names);
//row = "<div class='room_name' id="+ Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names +"</div><hr>";
//document.getElementById("output").innerHTML += row;
      //End code
      //});});}

      function getData()
       { 
             firebase.database().ref("/").on('value', function(snapshot)
       { 
            document.getElementById("output").innerHTML = "";
             snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; 
                  Room_names = childKey; console.log("Room Name - " + Room_names); row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; document.getElementById("output").innerHTML += row; }); }); }


getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
            window.location = "kwitter_page.html";
}

function logout()
 {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
            window.location = "index.html";
}

