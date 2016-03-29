//FOR INTERAKTIV.HTML

//funksjon for å vise at ting blir lagt til i produktlista
$(document).ready(function () {
  $("#detskjer1").hide();

  $("#før1").click(function () {
    $("#før1").hide();
    $("#detskjer1").fadeIn();
  });
});

//funksjon for å vise at ting blir lagt til i produktlista
//Fikser animasjonting
$(document).ready(function () {
  $("#detskjer2").hide();

  $("#før2").click(function () {
    $("#før2").hide();
    $("#detskjer2").fadeIn();
  });
});


//meny fiksing
$(document).ready(function () {
  $(".container").hide();

  $("#hamburger-nav").click(function () {
    $(".container").toggle();
  });
});

//FOR INTERAKTIV.HTML

//For index.HTML

//henter inn webside frå veronicas domene fra uib
//$(document).ready(function(){

      //  $("#interaktiv")
        //    .html('<object data="http://folk.uib.no/vha004/vimond/"/>');

        //$('object').css("width", "186px");
        //$('object').css("height", "327px");

//});
//aktiv pause
$(document).ready(function(){
  $("#innhald").hide();
  $("#aurora").hide();
});



//Fikser aktiv pause
$(document).ready(function () {
  $("#innhald").hide();

  $("#protovideo").on('pause', function() {
    $("#innhald").fadeIn(100);
  });
  $("#protovideo").on('play', function() {
    $("#innhald").fadeOut(100);
  });
  $("#protovideo").on('play', function() {
    $("#aurora").show(2000);
  });
});



//fikser å legge inn tekst tima i videoen.
document.addEventListener( "DOMContentLoaded", function() {

           var popcorn = Popcorn( "#protovideo" );

           popcorn.footnote({
             start: 2,
             end: 10,
             target: "#pop",
             text: "Produktet blir lagt inn i din produktliste i Sumo appen."
           });

           popcorn.footnote({
             start: 11,
             end: 15,
             target: "#pop",
             text: "Mens du ser vil produktene bli lagt til i produktlisten."
           });

           popcorn.footnote({
             start: 20,
             end: 28,
             target: "#pop",
             text: "Nå ser du at det nye albumet til Aurora er lagt til i produktlisten."
           });

           popcorn.footnote({
             start: 29,
             end: 35,
             target: "#pop",
             text: "Prøv å legge albumet til i huskelisten ved å klikke på stjernen!"
           });
});

//For index.HTML
