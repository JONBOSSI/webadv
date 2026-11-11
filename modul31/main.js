var cars=["volsvagen","bmw","mercides"]
var i;
var text="";
for(var i=0;i< cars.length;i++){
    text+= cars[i] +"  ";
}



console.log(text)

var j;
var text2="vlera e j eshte ";
for(var j=1;j<=6;j++){
    text2+= [j] +"  ";
}

console.log(text2)


var person ={
    Name: "jon" ,
    lastName: "Reci" ,
    age:  12
}






var text3="";
var x;
for(x in person){
    text3 +=person[x]+""
}
console.log(text3)