$(document).ready(function() {
  $("#aurora").hide(); // aurora i huskelista
  $("#skjorte").hide(); //skjorte i huskelista
  $("#skjorteprodukt").hide(); //sjølve produktsida for skjorta
  $("#auroraprodukt").hide(); //sjølve produktsida for aurora
  $(".container").hide();
  $("#2").hide(); //skjortebilde i produktsida
  $("#4").hide(); //albumbilete i produktsida
  $("#detskjer1").hide(); //skjuler skjorte fav-knapp
  $("#detskjer12").hide(); //skjuler skjorte fav-knapp i produktsida
  $("#detskjer21").hide(); //skjuler aurora fav-knapp i produktsida
  $("#detskjer2").hide(); //skjuler aurora fav-knapp
  $("#varseltv2").hide(); //skjuler bakgrunnsbilete frå iPhone
  $("#produktlistemain").hide(); //skjuler heile main produktliste. skal visast etter varsel simuleringa
  $("#sophiekj").hide(); //skjuler kjolen til sophie elsie


  //funksjon for brukarprofilar ved å vise personalisert innhald for andrea
  $("#andrea").click(function() {
    $("#profilar").hide();
    $("#protovideo").hide();
    $("#protovideo1").show();
  });

  //funksjon for brukarprofilar ved å vise personalisert innhald for birger
  $("#birger").click(function() {
    $("#profilar").hide();
    $("#protovideo1").hide();
    $("#protovideo").show();
  });

  //funksjon for å vise at ting blir lagt til i produktlista
  $("#før1").click(function() {
    $("#før1").hide();
    $("#detskjer1").show();
  });

  //for å ta vekk stjerna frå lista
  $("#detskjer1").click(function() {
    $("#før1").show();
    $("#detskjer1").hide();
  });


  //i skjorteprodukt
  $("#før12").click(function() {
    $("#før12").hide();
    $("#detskjer12").show();
  });
  //for å ta vekk stjerna frå lista i skjorteprodukt
  $("#detskjer12").click(function() {
    $("#før12").show();
    $("#detskjer12").hide();
  });


  //funksjon for å vise at ting blir lagt til i produktlista
  $("#før2").click(function() {
    $("#før2").hide();
    $("#detskjer2").show();
  });

  //funksjon for å vise at ting blir lagt til i produktlista
  $("#detskjer2").click(function() {
    $("#før2").show();
    $("#detskjer2").hide();
  });

  //funksjon for å vise at ting blir lagt til i produktlista
  $("#før21").click(function() {
    $("#før21").hide();
    $("#detskjer21").show();
  });

  //funksjon for å vise at ting blir lagt til i produktlista
  $("#detskjer21").click(function() {
    $("#før21").show();
    $("#detskjer21").hide();
  });

  //fikser kjøp nå i skjorte med hide/show av innhald
  $("#skjortekjop").click(function() {
    $("#tittelfront").hide();
    $("#skjorteprodukt").show();
  });

  //fikser å vise produktlista fra skjortekjop
  $("#tilbakeknapp1").click(function() {
    $("#tittelfront").show();
    $("#skjorteprodukt").hide();
  });

  //fikser kjøp nå i Aurora med hide/show av innhald
  $("#aurorakjop").click(function() {
    $("#tittelfront").hide();
    $("#auroraprodukt").show();
  });

  //fikser å vise produktlista fra Aurora kjop
  $("#tilbakeknapp2").click(function() {
    $("#tittelfront").show();
    $("#auroraprodukt").hide();
  });



  //funksjon for å vise at ting blir lagt til i produktlista
  //Fikser animasjonting

  $("#detskjer2").hide();
  //meny fiksing
  $(".container").hide();
  $("#hamburger-nav").click(function() {
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


  $(".kjopknappprodukt").click(function() {
    alert("Denne funksjonen er ikke støttet enda. Prøv igjen senere");
  });



  //pil til venstre i skjorte
  $("#pil-left").click(function() {
    $("#1").toggle();
    $("#2").toggle();
  });

  //pil til høgre i skjorte
  $("#pil-right").click(function() {
    $("#1").toggle();
    $("#2").toggle();
  });

  //pil til venstre i aurora
  $("#pil-left1").click(function() {
    $("#3").toggle();
    $("#4").toggle();
  });

  //pil til høgre i aurora
  $("#pil-right2").click(function() {
    $("#3").toggle();
    $("#4").toggle();
  });

  //meny fiksing

  $("#hamburger-nav").click(function() {
    $(".container").toggle();
  });

});
//fikser å legge inn tekst tima i videoen.
document.addEventListener("DOMContentLoaded", function() {


  var popcorn = Popcorn("#protovideo"); //Senkveld
  var bloggere = Popcorn("#protovideo1"); //Bloggerene

  popcorn.footnote({
    start: 2,
    end: 10,
    target: "#pop",
    text: "Gjennom denne simuleringen vil du se et klipp som illustrerer vår nye løsning med second screen"
  });

  popcorn.footnote({
    start: 20,
    end: 40,
    target: "#pop",
    text: "Når du ser på din favorittserie vil du få effektiv tilgang på produkter vist i serien."

  });

  popcorn.footnote({
    start: 60,
    end: 85,
    target: "#pop",
    text: "Nå ser du at det nye albumet til Aurora er lagt til i produktlisten."

  });

  popcorn.footnote({
    start: 100,
    end: 130,
    target: "#pop",
    text: "Ser du noe du liker? Hva med å sjekke ut skjorten Harald Rønneberg bruker?"

  });

  popcorn.footnote({
    start: 140,
    end: 160,
    target: "#pop",
    text: "Prøv å legge skjorten til i huskelisten ved å klikke på stjernen!"


  });

  popcorn.footnote({
    start: 180,
    end: 200,
    target: "#pop",
    text: "Trenger du å gjøre noe mens du ser på kan du trykke 'pause' og produktlisten vises uten å avbryte deg når du ser på favorittprogrammet ditt. "

  });


//Fikser trigger klikk av varsel i bloggerene
bloggere.code({
  start: 5, //3 sekund så kjem den fram
  end: 124, //blir vist heile tida til videoen sluttar
  onStart: function(options) {
    var lastskjerm = $("#vanskelig").contents().find("#lastskjerm");
    var varseltv2 = $("#vanskelig").contents().find("#varseltv2");
    var head = $("#vanskelig").contents().find("#head");
      $(lastskjerm).trigger( "click" );
      $(lastskjerm).css("background-image", "url(img/bakgrunniphone.png)");
      $(lastskjerm).css("background-size", "186px", "327px");
      $(varseltv2).show();
  }
});


  //Fikser trigger klikk av varsel i senkveld
  popcorn.code({
    start: 10, //3 sekund så kjem den fram
    end: 420, //blir vist heile tida til videoen sluttar
    onStart: function(options) {
      var lastskjerm = $("#vanskelig").contents().find("#lastskjerm");
      var varseltv2 = $("#vanskelig").contents().find("#varseltv2");
      var head = $("#vanskelig").contents().find("#head");
        $(lastskjerm).trigger( "click" );
        $(lastskjerm).css("background-image", "url(img/bakgrunniphone.png)");
        $(lastskjerm).css("background-size", "186px", "327px");
        $(varseltv2).show();
    }
  });

  //Fikser trigger klikk av varsel i bloggerene
    bloggere.code({
      start: 12, //3 sekund så kjem den fram
      end: 124, //blir vist heile tida til videoen sluttar
      onStart: function(options) {
        var lastskjerm = $("#vanskelig").contents().find("#lastskjerm");
        var varseltv2 = $("#vanskelig").contents().find("#varseltv2");
        var head = $("#vanskelig").contents().find("#head");
        var main = $("#vanskelig").contents().find("#produktlistemain");
            $(varseltv2).trigger( "click");
            $(lastskjerm).hide();
            $(main).show();
      }
  });


  //Fikser trigger klikk av varsel i senkveld
    popcorn.code({
      start: 30, //3 sekund så kjem den fram
      end: 420, //blir vist heile tida til videoen sluttar
      onStart: function(options) {
        var lastskjerm = $("#vanskelig").contents().find("#lastskjerm");
        var varseltv2 = $("#vanskelig").contents().find("#varseltv2");
        var head = $("#vanskelig").contents().find("#head");
        var main = $("#vanskelig").contents().find("#produktlistemain");
            $(varseltv2).trigger( "click");
            $(lastskjerm).hide();
            $(main).show();
      }
  });


  //Legger til kjole med id 1
  bloggere.code({
    start: 17, //100 sekund så kjem den fram
    end: 124, //blir vis heile tida til videoen sluttar
    onStart: function(options) {
      var kjole = $("#vanskelig").contents().find("#sophiekj");
        $(kjole).fadeIn(50);
        alert("det skjer");
    },
    onEnd: function(options) {
      var kjole = $("#vanskelig").contents().find("#sophiekj");
      $(kjole).fadeOut(50);
    }
  });


  //Legger til skjorte med id 1
  popcorn.code({
    start: 100, //100 sekund så kjem den fram
    end: 420, //blir vis heile tida til videoen sluttar
    onStart: function(options) {
      var skjorte = $("#vanskelig").contents().find("#skjorte");
        $(skjorte).fadeIn(50);
    },
    onEnd: function(options) {
      var skjorte = $("#vanskelig").contents().find("#skjorte");
      $(skjorte).fadeOut(50);
    }
  });

  //Legger til Aurora med id 2
  popcorn.code({
    start: 60, //30 sekund så kjem den fram.
    end: 420, //blir vis heile tida til videoen sluttar
    onStart: function(options) {
      var aur = $("#vanskelig").contents().find("#aurora"); //for å finne aurora i iframe
        $(aur).fadeIn(50);
    },
    onEnd: function(options) {
      var aur = $("#vanskelig").contents().find("#aurora");
      $(aur).fadeOut(50);
    }
  });

});
