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

// Travelling Drag and Drop Function

  $(drag);
    function drag(){
      $(".picture").draggable({
        revert: 'invalid',
        stop: function(){
          $(this).draggable('option','revert','invalid');
        }
        });

      $(".rahmen").droppable({
         drop: handleDrop
      });

      function handleDrop(event, ui){
        var vacationSpot = ui.draggable.data().lead;
        if (vacationSpot == "1" ){
          ui.draggable.draggable('option','revert',true);
          $(".travelStory").removeClass("travelStoryHide");
          $(".travelStory").removeClass("travelStoryShow");
          $(".travelStory").addClass("travelStoryHide");
          $("#newZealand").removeClass("travelStoryHide");
          $("#newZealand").addClass("travelStoryShow");
          $("#worldMap").attr("src","images/Weltkarte-blank-newZealand.jpg");
        }else if (vacationSpot == "2" ){
          ui.draggable.draggable('option','revert',true);
          $(".travelStory").removeClass("travelStoryHide");
          $(".travelStory").removeClass("travelStoryShow");
          $(".travelStory").addClass("travelStoryHide");
          $("#morocco").removeClass("travelStoryHide");
          $("#morocco").addClass("travelStoryShow");
          $("#worldMap").attr("src","images/Weltkarte-blank-morocco.jpg");
        }else if (vacationSpot == "3" ){
          ui.draggable.draggable('option','revert',true);
          $(".travelStory").removeClass("travelStoryHide");
          $(".travelStory").removeClass("travelStoryShow");
          $(".travelStory").addClass("travelStoryHide");
          $("#peruAndBolivia").removeClass("travelStoryHide");
          $("#peruAndBolivia").addClass("travelStoryShow");
          $("#worldMap").attr("src","images/Weltkarte-blank-peruAndBolivia.jpg");
        }else if (vacationSpot == "4" ){
          ui.draggable.draggable('option','revert',true);
          $(".travelStory").removeClass("travelStoryHide");
          $(".travelStory").removeClass("travelStoryShow");
          $(".travelStory").addClass("travelStoryHide");
          $("#france").removeClass("travelStoryHide");
          $("#france").addClass("travelStoryShow");
          $("#worldMap").attr("src","images/Weltkarte-blank-france.jpg");
        }else if (vacationSpot == "5" ){
          ui.draggable.draggable('option','revert',true);
          $(".travelStory").removeClass("travelStoryHide");
          $(".travelStory").removeClass("travelStoryShow");
          $(".travelStory").addClass("travelStoryHide");
          $("#usaWestcoast").removeClass("travelStoryHide");
          $("#usaWestcoast").addClass("travelStoryShow");
          $("#worldMap").attr("src","images/Weltkarte-blank-usa.jpg");
        }else if (vacationSpot == "6" ){
          ui.draggable.draggable('option','revert',true);
          $(".travelStory").removeClass("travelStoryHide");
          $(".travelStory").removeClass("travelStoryShow");
          $(".travelStory").addClass("travelStoryHide");
          $("#usaAlaska").removeClass("travelStoryHide");
          $("#usaAlaska").addClass("travelStoryShow");
          $("#worldMap").attr("src","images/Weltkarte-blank-usaAlaska.jpg");
        }
      };
    };
    // END Travelling Drag and Drop Function
});