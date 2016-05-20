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
  $("#detskjer3").hide(); //skjuler kjole sophie fav-knapp
  $("#detskjer4").hide(); //skjuler ext sophie fav-ext.
  $("#produktlistemain").hide(); //skjuler heile main produktliste. skal visast etter varsel simuleringa
  $("#sophiekj").hide(); //skjuler kjolen til sophie elsie
  $("#extentions").hide(); //skjuler extentions til sophie elsie


  //funksjon for brukarprofilar ved å vise personalisert innhald for andrea
  $("#andrea").click(function() {
    $("#profilar").hide();
    $("#protovideo").hide();
    $("#protovideo1").show();
    $("#pop").hide();
  });

  //funksjon for brukarprofilar ved å vise personalisert innhald for birger
  $("#birger").click(function() {
    $("#profilar").hide();
    $("#protovideo1").hide();
    $("#protovideo").show();
    $("#pop1").hide();
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

  //funksjon for å vise at ting blir lagt til i produktlista for Bloggerene
  $("#før3").click(function() {
    $("#før3").hide();
    $("#detskjer3").show();
  });

  //funksjon for å vise at ting blir lagt til i produktlista
  $("#detskjer3").click(function() {
    $("#før3").show();
    $("#detskjer3").hide();
  });

  //funksjon for å vise at ting blir lagt til i produktlista for Bloggerene
  $("#før4").click(function() {
    $("#før4").hide();
    $("#detskjer4").show();
  });

  //funksjon for å vise at ting blir lagt til i produktlista
  $("#detskjer4").click(function() {
    $("#før4").show();
    $("#detskjer4").hide();
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


  //Fikser aktiv pause i senkveld
  $("#innhald").hide();
  $("#protovideo").on('pause', function() {
    $("#innhald").fadeIn(100);
  });
  $("#protovideo").on('play', function() {
    $("#innhald").fadeOut(100);

  });

//Fikser aktiv pause for bloggerene
  $("#innhaldblogg").hide();
  $("#protovideo1").on('pause', function() {
    $("#innhaldblogg").fadeIn(100);
  });
  $("#protovideo1").on('play', function() {
    $("#innhaldblogg").fadeOut(100);

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

//Tekst for Senkveld
  popcorn.footnote({
    start: 0,
    end: 7,
    target: "#pop",
    text: "Med denne simuleringen vil du få innblikk i vår løsning på hvordan reklame kan integreres i ulike strømmetjenester ved bruk av second screen."
  });

  popcorn.footnote({
    start: 10,
    end: 29,
    target: "#pop",
    text: "Når du ser på din favorittserie vil du enkelt få tilgang på relaterte produkter ved at strømmetjenestens respektive applikasjon sender deg en varsel."
  });

  popcorn.footnote({
    start: 30,
    end: 50,
    target: "#pop",
    text: "Utvalgte produkter som vises i programmet vil etterhvert listes opp under 'Dine produkter'."
  });

  popcorn.footnote({
    start: 60,
    end: 75,
    target: "#pop",
    text: "Nå ser du at det nye albumet til Aurora er lagt til."
  });

  popcorn.footnote({
    start: 85,
    end: 95,
    target: "#pop",
    text: "Ved å tilby produktannonseringen på en sekundær skjerm kan du enkelt utforske produktene med en gang."
  });

  popcorn.footnote({
    start: 100,
    end: 130,
    target: "#pop",
    text: "Ser du noe du liker? Hva med å sjekke ut skjorten Harald Rønneberg bruker?"
  });

  popcorn.footnote({
    start: 135,
    end: 160,
    target: "#pop",
    text: "Dersom du ønsker å sjekke ut produktet senere kan du legge dette til i huskelisten."
  });

  popcorn.footnote({
    start: 180,
    end: 200,
    target: "#pop",
    text: "Tar du en pause fra programmet vil produktlisten med tilhørende produkter vises som en liten påminnelse."
  });

  popcorn.footnote({
    start: 210,
    end: 220,
    target: "#pop",
    text: "Om du vil klikke hjem et produkt kan gå inn på produktet og trykke 'kjøp nå'."
  });

  popcorn.footnote({
    start: 220,
    end: 240,
    target: "#pop",
    text: "Betaling og kontaktinformasjon vil være knyttet opp mot din konto hos strømmetjenesten for å gjøre det så enkelt som mulig for deg som bruker!"
  });


//Tekst for Bloggerne

bloggere.footnote({
  start: 0,
  end: 9,
  target: "#pop1",
  text: "Med denne simuleringen vil du få innblikk i vår løsning på hvordan reklame kan integreres i ulike strømmetjenester ved bruk av second screen."
});

bloggere.footnote({
  start: 12,
  end: 20,
  target: "#pop1",
  text: "Når du ser på din favorittserie vil du enkelt få tilgang på relaterte produkter ved at strømmetjenestens respektive applikasjon sender deg en varsel."
});

bloggere.footnote({
  start: 20,
  end: 25,
  target: "#pop1",
  text: "Utvalgte produkter som vises i programmet vil etterhvert listes opp under 'Dine produkter'."
});

bloggere.footnote({
  start: 30,
  end: 35,
  target: "#pop1",
  text: "Nå ser du at kjolen til Sophie Elise er lagt til."
});

bloggere.footnote({
  start: 40,
  end: 45,
  target: "#pop1",
  text: "Ved å tilby produktannonseringen på en sekundær skjerm kan du enkelt utforske produktene med en gang."
});

bloggere.footnote({
  start: 50,
  end: 55,
  target: "#pop1",
  text: "Ser du noe du liker? Hva med å sjekke ut kjolen Sophie Elise har på?"
});

bloggere.footnote({
  start: 60,
  end: 63,
  target: "#pop1",
  text: "Dersom du ønsker å sjekke ut produktet senere kan du legge dette til i huskelisten."
});

bloggere.footnote({
  start: 65,
  end: 70,
  target: "#pop1",
  text: "Tar du en pause fra programmet vil produktlisten med tilhørende produkter vises som en liten påminnelse."
});

bloggere.footnote({
  start: 75,
  end: 80,
  target: "#pop1",
  text: "Om du vil klikke hjem et produkt kan gå inn på produktet og trykke 'kjøp nå'."
});

bloggere.footnote({
  start: 83,
  end: 88,
  target: "#pop1",
  text: "Betaling og kontaktinformasjon vil være knyttet opp mot din konto hos strømmetjenesten for å gjøre det så enkelt som mulig for deg som bruker!"
});


//Fikser trigger klikk av varsel i bloggerene
bloggere.code({
  start: 12, //3 sekund så kjem den fram
  end: 124, //blir vist heile tida til videoen sluttar
  onStart: function(options) {
    var lastskjerm = $("#vanskelig").contents().find("#lastskjerm");
    var varseltv2 = $("#vanskelig").contents().find("#varseltv2");
    var head = $("#vanskelig").contents().find("#head");
    var senkveld = $("#vanskelig").contents().find("#senkveld");
      $(lastskjerm).trigger( "click" );
      $(lastskjerm).css("background-image", "url(img/bakgrunniphone.png)");
      $(lastskjerm).css("background-size", "186px", "327px");
      $(varseltv2).show();
      $(senkveld).hide();
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
      var blogg = $("#vanskelig").contents().find("#bloggerne");
        $(lastskjerm).trigger( "click" );
        $(lastskjerm).css("background-image", "url(img/bakgrunniphone.png)");
        $(lastskjerm).css("background-size", "186px", "327px");
        $(varseltv2).show();
        $(blogg).hide();
    }
  });

  //Fikser trigger klikk av varsel i bloggerene
    bloggere.code({
      start: 20, //3 sekund så kjem den fram
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
    start: 30, //17 sekund så kjem den fram
    end: 124, //blir vis heile tida til videoen sluttar
    onStart: function(options) {
      var kjole = $("#vanskelig").contents().find("#sophiekj");
        $(kjole).fadeIn(50);
    },
    onEnd: function(options) {
      var kjole = $("#vanskelig").contents().find("#sophiekj");
      $(kjole).fadeOut(50);
    }
  });

  //Legger til extentions med id 2
  bloggere.code({
    start: 50, //38 sekund så kjem den fram
    end: 124, //blir vis heile tida til videoen sluttar
    onStart: function(options) {
      var ext = $("#vanskelig").contents().find("#extentions");
      var kjole = $("#vanskelig").contents().find("#sophiekj");
        $(ext).fadeIn(40);
        $(kjole).fadeIn(50);
    },
    onEnd: function(options) {
      var ext = $("#vanskelig").contents().find("#extentions");
      $(ext).fadeOut(50);
    }
  });

  //Legger til skjorte med id 1
  popcorn.code({
    start: 100, //100 sekund så kjem den fram
    end: 420, //blir vis heile tida til videoen sluttar
    onStart: function(options) {
      var skjorte = $("#vanskelig").contents().find("#skjorte");
      var aurora = $("#vanskelig").contents().find("#aurora");
        $(skjorte).fadeIn(40);
        $(aurora).fadeIn(50);
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
