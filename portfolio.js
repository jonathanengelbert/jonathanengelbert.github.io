/* 
    File name: portfolio.js
    Original local path: C:\Users\jonat\Desktop\html\portfolio
    By: Jonathan Engelbert
    Last Modified: 04/14/2017

    * This is JavaScript code for the website portfolio.
    It is to be used with portfolio.html pages  ONLY. Other
    JS files are to be used individually for projects that 
    this website contains.
   
    * The master stylesheet is "portfolio.css"


    *********************CONTENTS**********************************

    1 ** NAV-BAR CONTROLS



    ***********************************************************/



/* 1 - NAV BAR CONTROLS  */

$(document).ready(function(){
    $("p").hover(function(){
        $(this).addClass("highlight");
    }, function(){
        $(this).removeClass("highlight");
    });
});