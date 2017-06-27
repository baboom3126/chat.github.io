// Initialize Firebase

var config = {

  databaseURL: "https://chatroom-1ca4f.firebaseio.com"

};
firebase.initializeApp(config);

function send(){
  var name=document.getElementById("name1").value;
  var msg=document.getElementById("msg1").value;
  var room = document.getElementById("room");
  // room.innerHTML=room.innerHTML+"<p>"+name+"說："+msg+"</p>";


  firebase.database().ref('User00001').set({
  name : name,
  msg : msg
  });

document.getElementById("msg1").value="";


}




  firebase.database().ref('User00001').on("value", function(snapshot) {

    var lat= snapshot.val().name;
    var lng= snapshot.val().msg;

    room.innerHTML=room.innerHTML+"<p>"+lat+" 說: "+lng+"</p>";

    var objDiv = document.getElementById("Msg");
    objDiv.scrollTop = objDiv.scrollHeight;

  });
