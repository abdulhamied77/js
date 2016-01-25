function addtext() {
 var newtext = document.myform.inputtext.value;
if (newtext != '')
 document.myform.outputtext.value = document.myform.outputtext.value = '<audio controls><source src=\"'+ newtext + '\" \/>If you cannot see the audio controls, Your browser does not support HTML5 audio.<audio>';
else alert('Enter URL for your audio file first');
}
