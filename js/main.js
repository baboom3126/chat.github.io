
 function getURL() {
     
    
    var url = location.href;
    var decode = decodeURIComponent(url);
    
    var temp = decode.split("?");
	var vars = temp[1].split("&");
	return vars[0];
	}
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
  var msg=document.getElementById("msg1").value;
  var room = document.getElementById("room");
  // room.innerHTML=room.innerHTML+"<p>"+name+"說："+msg+"</p>";
if(msg!=""){
  firebase.database().ref('User00002').set({
  name : getURL(),
  msg : msg,
  count : count
  });

var my_span = document.createElement("p");
var my_div = document.createElement("p");
my_div.style="text-align:right;";
my_span.innerHTML=msg+"<br>";
my_div.appendChild(my_span);
room.appendChild(my_div);



document.getElementById("msg1").value="";

count++;
}
}
var x = 0;


  firebase.database().ref('User00002').on("value", function(snapshot) {

    var lat= snapshot.val().name;
    var lng= snapshot.val().msg;
    if(lat!=getURL()){
    var new_p = document.createElement("p");
    new_p.style="text-align:left; ";
    new_p.innerHTML=lat+" 說: "+lng+"<br>";
    room.appendChild(new_p);

}

var objDiv = document.getElementById("Msg");
objDiv.scrollTop = objDiv.scrollHeight;

  });


  /////////////////不能輸出空白///////////////////////
