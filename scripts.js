var namesArray = ["Zsolt", "Péter", "Béla", "Jakab"]
namesArray.forEach(namesLoop)
function namesLoop(dataarray) {
    if (dataarray === "Zsolt") {
        $("ul").append("<li class='ownname'>" + dataarray + "</li>")
        $(".ownname").css("font-weight", "bold")
    } else {
        $("ul").append("<li>" + dataarray + "</li>")
    }
}

var additionalBlock = {
    title: "Beillesztve JavaScripttel",
    text: "Ez a blokk a JavaScript jQuery könyvtárával lett beillesztve. Fasza!"
}

$("body").append("<h1>" + additionalBlock.title + "</h1>")
$("body").append("<p>" + additionalBlock.text + "</p>")