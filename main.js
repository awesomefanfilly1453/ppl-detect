Webcam.set({
width:350,
height:300,
image_format:"jpeg",
jpeg_quality: 90
});
var camera=document.getElementById("camera");
Webcam.attach("#camera");

function take_pic(){
    Webcam.snap(function(data){
        document.getElementById("picture").innerHTML="<img id='identified_image' src="+data+">";
    });}
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/2atur-Mcg/model.json',modelload);
function modelload(){
    console.log("Model Loaded!");
}

function check(){
    var  img=document.getElementById("identified_image");
    classifier.classify(img , got_result);
}
function got_result(error,results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("the_item").innerHTML=results[0].label;
        document.getElementById("the_accuracy").innerHTML=results[0].confidence.toFixed(3);
        
    }
}