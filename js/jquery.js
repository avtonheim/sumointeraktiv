$(document).ready(function(){
  $("#aurora").hide(); // aurora i huskelista
  $("#skjorte").hide(); //skjorte i huskelista
  $("#skjorteprodukt").hide();  //sjølve produktsida for skjorta
  $("#auroraprodukt").hide(); //sjølve produktsida for aurora
  $(".container").hide();
  $("#2").hide(); //skjortebilde i produktsida
  $("#4").hide(); //albumbilete i produktsida
  $("#detskjer1").hide(); //skjuler skjorte fav-knapp
  $("#detskjer2").hide(); //skjuler aurora fav-knapp

//funksjon for å vise at ting blir lagt til i produktlista
  $("#før1").click(function () {
    $("#før1").hide();
    $("#detskjer1").show();
  });
 //for å ta vekk stjerna frå lista
  $("#detskjer1").click(function () {
    $("#før1").show();
    $("#detskjer1").hide();
  });

  //funksjon for å vise at ting blir lagt til i produktlista
    $("#før2").click(function () {
      $("#før2").hide();
      $("#detskjer2").show();
    });
    
    //funksjon for å vise at ting blir lagt til i produktlista
      $("#detskjer2").click(function () {
        $("#før2").show();
        $("#detskjer2").hide();
      });

//fikser kjøp nå i skjorte med hide/show av innhald
$("#skjortekjop").click(function () {
  $("#tittelfront").hide();
  $("#skjorteprodukt").show();
});

//fikser å vise produktlista fra skjortekjop
$("#tilbakeknapp1").click(function () {
  $("#tittelfront").show();
  $("#skjorteprodukt").hide();
});

//fikser kjøp nå i Aurora med hide/show av innhald
$("#aurorakjop").click(function () {
  $("#tittelfront").hide();
  $("#auroraprodukt").show();
});

//fikser å vise produktlista fra Aurora kjop
$("#tilbakeknapp2").click(function () {
  $("#tittelfront").show();
  $("#auroraprodukt").hide();
});



//funksjon for å vise at ting blir lagt til i produktlista
//Fikser animasjonting

  $("#detskjer2").hide();
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


  $(".kjopknappprodukt").click(function () {
    alert("Denne funksjonen er ikke støttet enda. Prøv igjen senere");
  });


    //pil til venstre i skjorte
      $("#pil-left").click(function () {
        $("#1").toggle();
        $("#2").toggle();
      });

      //pil til høgre i skjorte
      $("#pil-right").click(function () {
        $("#1").toggle();
        $("#2").toggle();
      });

      //pil til venstre i aurora
      $("#pil-left1").click(function () {
        $("#3").toggle();
        $("#4").toggle();
      });

        //pil til høgre i aurora
      $("#pil-right2").click(function () {
        $("#3").toggle();
        $("#4").toggle();
      });

//meny fiksing

    $("#hamburger-nav").click(function () {
        $(".container").toggle();
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
               if (localStorage.getItem("produkt") == "1") { // sjekker om skjorta skal visast
                  $(skjorte).show();
                  console.log("No er produktet vist");
               }
             },
             onEnd: function( options ) {
                  var skjorte = $("#vanskelig").contents().find("#skjorte");
                  localStorage.removeItem("produkt", "1");
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
              if (localStorage.getItem("produkt") == "2") { // sjekker om aurora skal visast
                 $(aur).show();
                 console.log("No er produktet vist");
               }
              },
              onEnd: function( options ) {
                   var aur = $("#vanskelig").contents().find("#aurora");
                   localStorage.removeItem("produkt", "2");
                   $(aur).hide(); // vi vil slette localStorage når vi går tilbake til tidslinja
                   console.log("sletta produktet");

              }

          });

});
