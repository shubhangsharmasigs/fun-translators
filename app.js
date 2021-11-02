
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output-div");
var txtInput = document.querySelector("#txt-input");

var serverURL = "https://api.funtranslations.com/translate/dothraki.json";

function translationURL(input){
    return serverURL + "?" + "text=" + input

}

function errorHandler(error){
    console.log("error occured",error);
    alert("Something went wrong..Please try again after sometime");

}

function clickhandler(){
    var inputText = txtInput.value; //taking input

    fetch(translationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
         })
        .catch(errorHandler);
};

btnTranslate.addEventListener('click', clickhandler);
