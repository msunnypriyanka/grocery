function myfun(){
var xhhtp=new XMLHttpRequest();
xhhtp.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200){
    // document.getElementById("demo").innerHTML=JSON.parse(this.responseText);
    var response=JSON.parse(this.responseText);
    // console.log(response);
    var res=response.groceary;
    // console.log(res);
    var output="";
    for(var i=0;i<res.length;i++){
    output += "<table><strong><center>"+res[i].srno+" "+res[i].name+" "+res[i].quantity+" "+res[i].unit+" "+res[i].department+" "+res[i].notes+"</center></strong></table>";
    // output += "<li>"+res[i].srno+" "+res[i].name+" "+res[i].quantity+" "+res[i].unit+" "+res[i].department+" "+res[i].notes+"</li>";
    }
    document.getElementById("table").innerHTML=output;
}
}
xhhtp.open("GET","ajax.json",true);
xhhtp.send();
}
