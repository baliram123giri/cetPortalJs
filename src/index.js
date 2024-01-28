//adding title to document
document.title = "State Common Entrance Test Cell | Government of Maharashtra"

const root = document.getElementById("root")
// //create a link tag to add the css file
// const indexCssLink = document.createElement("link")
// indexCssLink.rel = "stylesheet"
// indexCssLink.href = "../style/index.css"

// document.head.appendChild(indexCssLink)

// //create a link for fontawesome
// const fontawesomeLink = document.createElement("link")
// fontawesomeLink.rel = "stylesheet"
// fontawesomeLink.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"

// document.head.appendChild(fontawesomeLink)


// //create a link for bootstrap
// const bootStrap = document.createElement("link")
// bootStrap.rel = "stylesheet"
// bootStrap.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"

// document.head.appendChild(bootStrap)


//create a function to reuse the logic
//functions always return something

function addLink(path) {
    const name = document.createElement("link")
    name.rel = "stylesheet"
    name.href = path
    document.head.appendChild(name)
    return "successfully linked..."
}

addLink("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css")
addLink("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css")
addLink("../style/index.css")


//header 
const header = document.createElement("header")
//if we use appendChild then element must have node
// if we use append only then element may anything 
//append the header to body

///css part
header.style.borderBottom = "1px solid #000"
root.appendChild(header)

//add container to header
const headerContainer = document.createElement("div")
headerContainer.className = "container"


header.appendChild(headerContainer)

//add navbar to headerContainer
const headerNav = document.createElement("nav")


//css part
headerNav.style.padding = "5px 0px"
headerContainer.appendChild(headerNav)

const headerNavUl = document.createElement("ul")
headerNavUl.className = "d-flex justify-content-between p-0 m-0"
headerNavUl.style.listStyle = "none"
headerNav.appendChild(headerNavUl)



const array = [
    {
        title: "Skip to main content",
        icon: "fa-arrow-down"
    },
    {
        icon: "fa-volume-up"
    },
    {
        title: "A"
    },
    {
        icon: "fa-sitemap"
    },
    {
        icon: "fa-search"
    },
    {
        icon: "fa-youtube-play"
    },
    {
        icon: "fa-facebook-official"
    },
    {
        icon: "fa-instagram"
    },
    {
        title: "twitter",
        icon: "fa-twitter"
    }
]

for (let i = 0; i < array.length; i++) {
    // console.log(array[i].title)
    const headerNavUlLi = document.createElement("li")
    //create a tag for li
    const headerAnchorTag = document.createElement("a")
    headerAnchorTag.className = "text-dark text-decoration-none"
    headerAnchorTag.href = "#"
    const itag = document.createElement("i")
    itag.className = `fa ${array[i].icon}`
    headerAnchorTag.append(itag)
    headerAnchorTag.append(array[i].title || "")
    headerNavUlLi.appendChild(headerAnchorTag)
    headerNavUl.appendChild(headerNavUlLi)
}






///last 
const bundleScript = document.createElement("script")
bundleScript.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
bundleScript.integrity = "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
bundleScript.crossOrigin = "anonymous"

document.body.appendChild(bundleScript)
