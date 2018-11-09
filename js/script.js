$(document).ready(function(){
    $(".buttonHideOs").click(function(){
        let a = $(this).text();
        console.log(a);
        if (a == "Read More") {
            $(".moreInformationOs").fadeIn(1);
            $(this).text("Read Less");
        }else if (a == "Read Less") {
            $(".moreInformationOs").fadeOut(1);
            $(this).text("Read More");
        }
        event.stopPropagation();
    });
    
    $(".buttonHideOl").click(function(){
        let a = $(this).text();
        console.log(a);
        if (a == "Read More") {
            $(".moreInformationOl").fadeIn(1);
            $(this).text("Read Less");
        }else if (a == "Read Less") {
            $(".moreInformationOl").fadeOut(1);
            $(this).text("Read More");
        }
        event.stopPropagation();
    });
    
    $(".buttonHideEs").click(function(){
        let a = $(this).text();
        console.log(a);
        if (a == "Read More") {
            $(".moreInformationEs").fadeIn(1);
            $(this).text("Read Less");
        }else if (a == "Read Less") {
            $(".moreInformationEs").fadeOut(1);
            $(this).text("Read More");
        }
        event.stopPropagation();
    });
    
     $(".buttonHideNy").click(function(){
        let a = $(this).text();
        console.log(a);
        if (a == "Read More") {
            $(".moreInformationNy").fadeIn(1);
            $(this).text("Read Less");
        }else if (a == "Read Less") {
            $(".moreInformationNy").fadeOut(1);
            $(this).text("Read More");
        }
        event.stopPropagation();
    });
});

