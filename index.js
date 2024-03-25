window.addEventListener("scroll", function () {
  var header = document.querySelector(".js-header")
  var sections = document.querySelectorAll(".js-color-section")

  sections.forEach(function (section) {
    var rect = section.getBoundingClientRect()
    var sectionClass = section.classList.contains("waypoint__black")
      ? "waypoint__black"
      : "waypoint__white"

    if (rect.top <= header.clientHeight && rect.bottom >= header.clientHeight) {
      if (sectionClass === "waypoint__black") {
        console.log("waypoint__black")
        header.classList.add("c-white")
      } else {
        console.log("waypoint__white")
        header.classList.remove("c-white")
      }
    }
  })
})
