window.onload =function(){
lkup_btn=document.getElementById("lookup");
rDiv = document.getElementById("result");
lkup_btn.addEventListener("click",lkup);


function res(){
    if(httpRequest.readyState === XMLHttpRequest.DONE) {
        if(httpRequest.status === 200) {
          var text = httpRequest.responseText;
          console.log("text");
          rDiv.innerHTML = text;
        } else {
          alert("Problem with request!");
        }
      }
    }

function lkup(){
    httpRequest = new XMLHttpRequest();
    var lkup_val = document.getElementById("country").value;
    var url = "world.php" + "?country=" + lkup_val;
    httpRequest.onreadystatechange=res;
    httpRequest.open('GET',url);
    httpRequest.send();

    

    // console.log("SIGH");
    // $.ajax({
    //     method: "GET",
    //     url: world.php,
    // }).done (function(data){
    //     var result=$.parseJSON(data);
    //     console.log("test");
    
    // })

    // document.getElementById("result").innerHTML=result;
    } 
}
