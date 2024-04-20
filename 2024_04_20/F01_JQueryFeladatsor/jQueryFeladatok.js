/* 1.feladat */

$("#slideUpButton").click(function () {
    $("#elrejtendoElem").slideUp();
});

$("#slideDownButton").click(function () {
    $("#elrejtendoElem").slideDown();
});

$("#slideToggleButton").click(function () {
    $("#elrejtendoElem").slideToggle();
});




/* 2.feladat */

$("#vizsgalandoSzoveg").keyup(function () {
    let vizsgaltSzoveg = $("#vizsgalandoSzoveg").val();
    let szovegHossz = vizsgaltSzoveg.length;
    $("#karakterszam").html("(" + szovegHossz + " karakter)");
});




/* 3.feladat */

$("#LathatosagGomb").click(function () {
    let allapot = $("#jelszoMezo").attr("type");
    if (allapot == "text") {
        $("#jelszoMezo").attr("type", "password");
    }
    else {
        $("#jelszoMezo").attr("type", "text");
    }
});




/* 4.feladat */

$("#fok").change(function () {
    let homerseklet = $("#fok").val();
    if (homerseklet < 0) {
        $("#inputErtek").html("jég");
    }
    else if (homerseklet > 100) {
        $("#inputErtek").html("gőz");
    }
    else {
        $("#inputErtek").html("víz");
    }
})