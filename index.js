// window.addEventListener("scroll", function () {
//   var header = document.querySelector(".js-header")
//   var sections = document.querySelectorAll(".js-color-section")

//   sections.forEach(function (section) {
//     var rect = section.getBoundingClientRect()
//     var sectionClass = section.classList.contains("waypoint__black")
//       ? "waypoint__black"
//       : "waypoint__white"

//     if (rect.top <= header.clientHeight && rect.bottom >= header.clientHeight) {
//       if (sectionClass === "waypoint__black") {
//         console.log("waypoint__black")
//         header.classList.add("c-white")
//       } else {
//         console.log("waypoint__white")
//         header.classList.remove("c-white")
//       }
//     }
//   })
// })

function throttle(func, limit) {
  let lastFunc
  let lastRan
  return function () {
    const context = this
    const args = arguments
    if (!lastRan) {
      func.apply(context, args)
      lastRan = Date.now()
    } else {
      clearTimeout(lastFunc)
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args)
          lastRan = Date.now()
        }
      }, limit - (Date.now() - lastRan))
    }
  }
}

window.addEventListener(
  "scroll",
  throttle(function () {
    var header = document.querySelector(".js-header")
    var sections = document.querySelectorAll(".js-color-section")

    sections.forEach(function (section) {
      var rect = section.getBoundingClientRect()
      var sectionClass = section.classList.contains("waypoint__black")
        ? "waypoint__black"
        : "waypoint__white"

      if (
        rect.top <= header.clientHeight &&
        rect.bottom >= header.clientHeight
      ) {
        if (sectionClass === "waypoint__black") {
          console.log("waypoint__black")
          header.classList.add("c-white")
        } else {
          console.log("waypoint__white")
          header.classList.remove("c-white")
        }
      }
    })
  }, 100)
)

// ----------------------------
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".js-select-vehicle-form")
  var currentUrl = window.location.href
  var homeUrl = "https://dtracing.com/"

  if (currentUrl !== homeUrl && form) {
    setTimeout(() => {
      console.log("This is not the home page! and the form exists")
      form.classList.add("is-hidden-on-small-screens")
      form.classList.add("test")
    }, 1000)
  }
})

// -----------------------------------------------------------------
