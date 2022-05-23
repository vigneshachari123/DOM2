var numberofimages = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberofimages; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var buttons = this.innerHTML;
    switch (buttons) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        brea;
      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
      case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

      case "k":
        var tom5 = new Audio("sounds/crash.mp3");
        tom5.play();
        break;
      case "j":
        var tom6 = new Audio("sounds/kick-bass.mp3");
        tom6.play();
        break;
      default:
        break;
    }
  });
}
