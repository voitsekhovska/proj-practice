function openMenu() {
  var popupMenu = document.getElementById("pop-up");
  if (popupMenu.style.display === "none") {
    popupMenu.style.display = "block";
  } else {
    popupMenu.style.display = "none";
  }
}


function openMenuDesktop() {
  var popupMenu = document.getElementById("pop-up");
  if (popupMenu.style.display === "none") {
    popupMenu.style.display = "flex";
  } else {
    popupMenu.style.display = "none";
  }
}

function openFilter() {
  var popupMenu = document.getElementById("filter-pop");
  if (popupMenu.style.display === "none") {
    popupMenu.style.display = "block";
  } else {
    popupMenu.style.display = "none";
  }
}