function addtext() {
 var lebar = document.myform.lebar.value;
 var tinggi = document.myform.tinggi.value;
 var urlvideo = document.myform.urlvideo.value;
if (lebar != '',
	tinggi != '',
	urlvideo != '')
 document.myform.outputtext.value = document.myform.outputtext.value = '<video width=\"'+ lebar + '\" height=\"'+ tinggi + '\" controls="controls"><source src=\"'+ urlvideo + '\" \/>If you cannot see the video controls, Your browser does not support HTML5 video.</video>';
else alert('Enter URL for your Video file first');
}
