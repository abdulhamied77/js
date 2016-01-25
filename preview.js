function changeText2(){
 var userInput = document.myform.outputtext.value;
if (userInput != '')
 document.getElementById('previewsec').innerHTML = userInput;
else alert('Enter URL for your file and generate code first');
}
