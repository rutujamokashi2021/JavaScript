function innerHTMLfunc()
{
//using innerHTML property defines the content of 
document.getElementById('click').innerHTML = 'The innerHTML property defines the HTML content';

}
function writeFunc() 
{
//For testing purposes, it is convenient to use document.write()
document.write('document.write() after an HTML document is loaded, will delete all existing HTML');
}
function windowsAlertFunc()
{
    //You can use an alert box to display data:
 window.alert('You can use an alert box to display data:');   
}
function consolelogFunc()
{
    //For debugging purposes, you can call the console.log() method in the browser to display data.
    console.log('1+4');
}
function printFunc()
{
    //JavaScript does not have any print object or print methods.
    //You cannot access output devices from JavaScript.
    //The only exception is that you can call the window.print() method in the browser to print the content of the current window.
    window.print('print the content of the current window.');
}

