var firebaseConfig = {
      apiKey: "AIzaSyCwdTGwuHKdAxf_F9XlrhHbdNrcBpZcSmk",
      authDomain: "kwitter-209ce.firebaseapp.com",
      databaseURL: "https://kwitter-209ce-default-rtdb.firebaseio.com",
      projectId: "kwitter-209ce",
      storageBucket: "kwitter-209ce.appspot.com",
      messagingSenderId: "753925777863",
      appId: "1:753925777863:web:86a05ca5302a75e81151e2"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);



    username=localStorage.getItem("username")
//ADD YOUR FIREBASE LINKS HERE
document.getElementById("username").innerHTML="welcome "+username
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='roomname' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div> <hr>"
document.getElementById("output").innerHTML+=row

      //End code
      });});}
getData();
function addroom(){
      roomname=document.getElementById("roomname").value
    localStorage.setItem("roomname",roomname)  
    firebase.database().ref("/").child(roomname).update({
          purpose:"addingroomname"
    })
    window.location="kwitter_page.html"
}
function redirecttoroomname(name){
      localStorage.setItem("roomname",name)
      window.location="kwitter_page.html  "
}
function logout(){
      window.location="index.html"
}