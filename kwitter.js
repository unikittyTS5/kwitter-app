//function addUser() {
    //user_name = document.getElementById("user_name")
    //localStorage.setItem("user_name",user_name);
    //console.log("user_name");
    //window.location = "kwitter_room.html";
//}

function addUser()
 { 
     user_name = document.getElementById("user_name").value;
      localStorage.setItem("user_name", user_name); 
      window.location = "kwitter_room.html"; 
 }
