

// Initialize Firebase
var count = 0;

var config = {
  apiKey: "AIzaSyDPmuMSFbdkJj3UGC-IQXPnSrXoh-7PXPM",
  authDomain: "chatroom-1ca4f.firebaseapp.com",
  databaseURL: "https://chatroom-1ca4f.firebaseio.com",
  projectId: "chatroom-1ca4f",
  storageBucket: "chatroom-1ca4f.appspot.com",
  messagingSenderId: "562311433974"
};
firebase.initializeApp(config);


function send(){
  var name=document.getElementById("name1").value;
  var msg=document.getElementById("msg1").value;
  var room = document.getElementById("room");
  // room.innerHTML=room.innerHTML+"<p>"+name+"說："+msg+"</p>";

  firebase.database().ref('User00002').set({
  name : name,
  msg : msg,
  count : count
  });

var my_span = document.createElement("span");
var my_div = document.createElement("div");
my_div.className="right";
my_div.style="text-align:right; width:80%;";
my_span.innerHTML=msg+"<br>";
my_div.appendChild(my_span);
room.appendChild(my_div);



document.getElementById("msg1").value="";

count++;

}
var x = 0;


  firebase.database().ref('User00002').on("value", function(snapshot) {

    var lat= snapshot.val().name;
    var lng= snapshot.val().msg;
    var name = document.getElementById("name1").value;
    if(lat!=name){
    var new_p = document.createElement("p");
    new_p.style="text-align:left; ";
    new_p.innerHTML=lat+" 說: "+lng;
    room.appendChild(new_p);

}

var objDiv = document.getElementById("Msg");
objDiv.scrollTop = objDiv.scrollHeight;

  });




/////////////////////////字太多要換行////////////////
/////////////////不能輸出空白///////////////////////
