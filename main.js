var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function Start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event)
{
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").value = content;
    if (content == "take my selfie")
    {
        Speak();
    }
    console.log(content);
}
function Speak()
    {
        var synth = window.speechSynthesis;
        speak_data= "Taking your selfie in 5 seconds"
        var utterthis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterthis);
        Webcam.attach(camera);
        setTimeout(function(){
            take_snapshot();
            save();
        }, 5000
        );
    }

camera = document.getElementById("camera");

Webcam.set({
    width: 360,
    height: 250,
    image_format: "jpeg",
    jpeg_quality: 90
} );

function take_snapshot()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML = '<img id ="picture" src='+data_uri+'>';
    })
}

function save()
{
    var link = document.getElementById("link");
    var img = document.getElementById("picture").src;
    link.href = img;
    link.click();
}