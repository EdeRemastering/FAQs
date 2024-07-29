function toggleDescription(paragraphId, button) {
    var paragraph = document.getElementById(paragraphId);
    var icon = button.querySelector('.plus-icon');

      if (paragraph.style.display === "none" || paragraph.style.display === "") {
        paragraph.style.display = "block";
        icon.src = 'assets/images/icon-minus.svg';
    } else {
        paragraph.style.display = "none";
        icon.src = 'assets/images/icon-plus.svg';
    }
}