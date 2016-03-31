$(document).ready(function(){
  $("#aurora").hide();
  $("#skjorte").hide();


//funksjon for å vise at ting blir lagt til i produktlista
  $("#detskjer1").hide();
  $("#før1").click(function () {
    $("#før1").hide();
    $("#detskjer1").fadeIn();
  });


//funksjon for å vise at ting blir lagt til i produktlista
//Fikser animasjonting

  $("#detskjer2").hide();
  $("#før2").click(function () {
    $("#før2").hide();
    $("#detskjer2").fadeIn();
  });


//meny fiksing
  $(".container").hide();
  $("#hamburger-nav").click(function () {
    $(".container").toggle();
  });


//Fikser aktiv pause
  $("#innhald").hide();
  $("#protovideo").on('pause', function() {
    $("#innhald").fadeIn(100);
  });
  $("#protovideo").on('play', function() {
    $("#innhald").fadeOut(100);

  });

});
//fikser å legge inn tekst tima i videoen.
document.addEventListener( "DOMContentLoaded", function() {


           var popcorn = Popcorn( "#protovideo" );

           popcorn.footnote({
             start: 2,
             end: 10,
             target: "#pop",
             text: "Gjennom denne simuleringen vil du se et klipp som illustrerer vår nye løsning med second screen"
           });

           popcorn.footnote({
             start: 15,
             end: 25,
             target: "#pop",
             text: "Produkt blir lagt inn i din produktliste i Sumo appen mens du ser i sanntid."
           });

           popcorn.footnote({
             start: 30,
             end: 40,
             target: "#pop",
             text: "Ser du noe du liker? Hva med å sjekke ut skjorten som Harald Rønneberg bruker?"
           });

           popcorn.footnote({
             start: 42,
             end: 48,
             target: "#pop",
             text: "Prøv å legge skjorten til i huskelisten ved å klikke på stjernen!"

           });

           popcorn.footnote({
             start: 50,
             end: 60,
             target: "#pop",
             text: "Nå ser du at det nye albumet til Aurora er lagt til i produktlisten."
           });


           //Legger til skjorte med id 1
           popcorn.code({
             start: 5, //5 sekund så kjem den fram
             end: 263, //blir vis heile tida til videoen sluttar
             onStart: function( options ) {
               var skjorte = $("#vanskelig").contents().find("#skjorte");
               localStorage.setItem("produkt", "1"); //setter produktid
               var v = localStorage.getItem("produkt"); //henter produktid
               if (v == "1") { // Check if it's equal to the string true
                  $(skjorte).show();
                  console.log("No er produktet vist");
               }
             },
             onEnd: function( options ) {
                  var skjorte = $("#vanskelig").contents().find("#skjorte");
                  localStorage.removeItem("1");
                  $(skjorte).hide(); // vi vil slette localStorage når vi går tilbake til tidslinja
                  console.log("sletta produktet");

             }
           });

        //Legger til Aurora med id 2
          popcorn.code({
            start: 50, //30 sekund så kjem den fram.
            end: 263, //blir vis heile tida til videoen sluttar
            onStart: function( options ) {

              localStorage.setItem("produkt", "2");
              var aur =  $("#vanskelig").contents().find("#aurora"); //for å finne aurora i iframe
              var v = localStorage.getItem("produkt"); //henter produktid
              if (v == "2") { // Check if it's equal to the string true
                 $(aur).show();
                 console.log("No er produktet vist");
               }
              },
              onEnd: function( options ) {
                   var aur = $("#vanskelig").contents().find("#aurora");
                   localStorage.removeItem("2");
                   $(aur).hide(); // vi vil slette localStorage når vi går tilbake til tidslinja
                   console.log("sletta produktet");

              }

          });

});
