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
  roomname=localStorage.getItem("roomname")
  function send(){
    Message=document.getElementById("message").value
firebase.database().ref(roomname).push({
  name:username,message:Message,Like:0
})
document.getElementById("message").value=""
  }
  function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") { 
    firebase_message_id = childKey; message_data = childData; //Start code
console.log(firebase_message_id)
console.log(message_data)
var name=message_data['name']
var message=message_data['message']
var Like=message_data['Like']
namewithtag="<h4>"+name+"<img src='tick.png'class='user_tick'></h4>"
messagewithtag="<h4 class='message_h4'>"+message+"</h4>"
Likebutton="<button class='btn btn-warning'id="+firebase_message_id+"value="+Like+" onclick='updatelike(this.id)'>Like:"+Like+"</button>"
spanwithtag="<span class='glyphicon glyphicon-thumbs-up'> like:+Like+</span> <hr>"
row=namewithtag+messagewithtag+Likebutton+spanwithtag
document.getElementById("output").innerHTML+=row   
//End code
   } }); }); }
   getData()
  function updatelike(){
    button_id=firebase_message_id
    likes=document.getElementById(button_id).value
    update_likes=Number(likes)+1
    console.log(update_likes)
    firebase.database().ref(roomname).child(message_id).update({
      like:update_likes
    })
  }
  function logout(){
    window.location="index.html"
}