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

// Check browser support
if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("produkt", "1");

} else {
    document.getElementById("pop").innerHTML = "Sorry, your browser does not support Web Storage...";
}
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
             start: 30,
             end: 38,
             target: "#pop",
             text: "Nå ser du at det nye albumet til Aurora er lagt til i produktlisten."
           });

           var pop = Popcorn( "#protovideo" );

           //Legger til skjorte med id 1
           pop.code({
             start: 5, //5 sekund så kjem den fram
             onStart: function( options ) {
               //document.getElementById("pop").innerHTML = localStorage.getItem("produkt");
               var skjorte = $("#vanskelig").contents().find("#skjorte");
               $(skjorte).show();
             }
           });

        //Legger til Aurora med id 2
          pop.code({
            start: 30, //30 sekund så kjem den fram.
            onStart: function( options ) {
              //document.getElementById("pop").innerHTML = localStorage.getItem("produkt");
              var aur =  $("#vanskelig").contents().find("#aurora"); //for å finne aurora i iframe
              $(aur).show();
            }
          });



           popcorn.footnote({
             start: 40,
             end: 48,
             target: "#pop",
             text: "Prøv å legge albumet til i huskelisten ved å klikke på stjernen!"

           });
});

//For index.HTML
