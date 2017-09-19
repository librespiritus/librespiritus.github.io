$(document).ready(function(){
   
    //intro
    $("#intro, #enter").slideDown(1500)
    
    $("#enter").click(function(){
        $("#intro, #enter").slideToggle("blind");
        $("#l, #s, #rotate").animate({opacity: 1}, 5000);
        $("#up").animate({opacity: 1, top:"50%"}, 2000);
        $("#down").animate({opacity: 1, top:"0%"}, 2000);
        $("#header").animate({opacity: 1, left: "2.5%"}, 2000);
        $("#footer").animate({opacity: 1, right:"2.5%"}, 2000);
        $(".menu_item").slideToggle("blind");
    })
    //click menu items
    
    $("body").on("click", ".menu_item", function(){
       $("h1").fadeOut(1000);
       if($(this).hasClass("calling")){
           //topic
           $(".topic").animate({opacity: 0, left:"100%"}, 'slow')
           $(".topic").animate({left:"0%"}, 'fast')
           $(".topic#calling").animate({opacity: 1, left: "50%" }, 'slow')
           //info
           $(".info").animate({opacity: 0, left:"0%"}, "slow")
           $(".info").animate({left:"100%"}, 'fast')
           $(".info#calling").animate({opacity: 1, left: "50%"}, 'slow')
           //$(this).toggle("blind", {direction:"left"}, 500);
           
       } 
       else if($(this).hasClass("connecting")){
           //topic
           $(".topic").animate({opacity: 0, left:"100%"}, 'slow')
           $(".topic").animate({left:"0%"}, 'fast')
           $(".topic#connecting").animate({opacity: 1, left: "50%" }, 'slow');
           //info
           $(".info").animate({opacity: 0, left:"0%"}, "slow")
           $(".info").animate({left:"100%"}, 'fast')
           $(".info#connecting").animate({opacity: 1, left: "50%"}, 'slow')
           
       }
       else if($(this).hasClass("collaborating")){
           //topic
           $(".topic").animate({opacity: 0, left:"100%"}, 'slow')
           $(".topic").animate({left:"0%"}, 'fast')
           $(".topic#collaborating").animate({opacity: 1, left: "50%" }, 'slow');
           //info
           $(".info").animate({opacity: 0, left:"0%"}, "slow")
           $(".info").animate({left:"100%"}, 'fast')
           $(".info#collaborating").animate({opacity: 1, left: "50%"}, 'slow')
       }
       else if($(this).hasClass("creating")){
           //topic
           $(".topic").animate({opacity: 0, left:"100%"}, 'slow')
           $(".topic").animate({left:"0%"}, 'fast')
           $(".topic#creating").animate({opacity: 1, left: "50%" }, 'slow');
           //info
           $(".info").animate({opacity: 0, left:"0%"}, "slow")
           $(".info").animate({left:"100%"}, 'fast')
           $(".info#creating").animate({opacity: 1, left: "50%"}, 'slow')
       }
       else if($(this).hasClass("compassing")){
           //topic           
           $(".topic").animate({opacity: 0, left:"100%"}, 'slow')
           $(".topic").animate({left:"0%"}, 'fast')
           $(".topic#compassing").animate({opacity: 1, left: "50%" }, 'slow');
           //info
           $(".info").animate({opacity: 0, left:"0%"}, "slow")
           $(".info").animate({left:"100%"}, 'fast')
           $(".info#compassing").animate({opacity: 1, left: "50%"}, 'slow')
       }
       else{
           //something else
       }
     })
});