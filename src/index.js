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


root.appendChild(header)
const headerWrapper = document.createElement("div")
//add container to header
const headerContainer = document.createElement("div")
headerContainer.style.width = "80%"
headerContainer.className = "mx-auto"
///css part
headerWrapper.style.borderBottom = "1px solid #000"

headerWrapper.appendChild(headerContainer)
header.appendChild(headerWrapper)

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
        icon: "fa-arrow-down",
        flex: 1
    },
    {
        icon: "fa-volume-up",
        flex: 1
    },
    {
        title: "A",
        flex: 1
    },
    {
        icon: "fa-sitemap",
        flex: 1
    },
    {
        icon: "fa-search",
        flex: 1
    },
    {
        icon: "fa-youtube-play",
        flex: 0.3,
    },
    {
        icon: "fa-facebook-official",
        flex: 0.3,
    },
    {
        icon: "fa-instagram",
        flex: 0.3
    },
    {
        title: "twitter",
        icon: "fa-twitter",
        flex: 1,
    }
]

for (let i = 0; i < array.length; i++) {
    // console.log(array[i].title)
    const headerNavUlLi = document.createElement("li")
    headerNavUlLi.style.flex = array[i].flex
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

//header middle
const headerMiddle = document.createElement("div")
headerMiddle.className = "container"
const headerMiddlerWrapper = document.createElement("div")
headerMiddlerWrapper.style.width = "60%"
headerMiddlerWrapper.className = "d-flex mt-2"
//tetsing
headerMiddlerWrapper.style.height = "100px"


//create first ele div
const satyMevJayteLogo = document.createElement("div")
satyMevJayteLogo.style.width = "100px"
satyMevJayteLogo.style.height = "100px"

//create a img
const satyMevJayteLogoImg = document.createElement("img")
satyMevJayteLogoImg.src = "../img/satyamev-jayte-removebg-preview.png"
satyMevJayteLogoImg.alt = "satyamev-jayte"
satyMevJayteLogoImg.width = "100"
satyMevJayteLogoImg.height = "100"
satyMevJayteLogoImg.style.objectFit = "contain"

//create second div
const governmentDiv = document.createElement("div")
governmentDiv.style.width = "80%"
governmentDiv.className = "border-start border-dark d-flex gap-3 ps-2 align-items-center"


//create a div for logo of cet
const cetLogo = document.createElement("div")
cetLogo.style.width = "100px"
cetLogo.style.height = "100px"

//create img tag to cet logo
const cetLogoImg = document.createElement("img")
cetLogoImg.src = "../img/cet_cell-removebg-preview.png"
cetLogoImg.alt = "cet_cell-removebg-preview"
cetLogoImg.width = "100"
cetLogoImg.height = "100"
cetLogoImg.style.objectFit = "contain"

//create a div for givernment section
const governmentDivContent = document.createElement("div")
governmentDivContent.style.flex = 1


//create a heading to governmentDivContent
const governmentDivContentH1 = document.createElement("h1")
governmentDivContentH1.innerText = "GOVERNMENT OF MAHARASHTRA"
governmentDivContentH1.className = "fw-bold"
governmentDivContentH1.style.fontSize = "20px"

//create a heading2 to governmentDivContent
const governmentDivContentH5 = document.createElement("h5")
governmentDivContentH5.innerText = "State Common Entrance Test Cell"
governmentDivContentH5.className = "fw-bold"
governmentDivContentH5.style.fontSize = "15px"

//create a government logo
const governmentLogo = document.createElement("div")
governmentLogo.style.width = "100px"
governmentLogo.style.height = "100px"


//create img tag to government logo
const governmentLogoImg = document.createElement("img")
governmentLogoImg.src = "../img/Seal_of_Maharashtra.svg.png"
governmentLogoImg.alt = ""
governmentLogoImg.width = "100"
governmentLogoImg.height = "100"
governmentLogoImg.style.objectFit = "contain"

governmentLogo.appendChild(governmentLogoImg)
cetLogo.appendChild(cetLogoImg)
governmentDiv.appendChild(cetLogo)
governmentDiv.appendChild(governmentDivContent)
governmentDivContent.appendChild(governmentDivContentH1)
governmentDivContent.appendChild(governmentDivContentH5)
satyMevJayteLogo.appendChild(satyMevJayteLogoImg)
headerMiddlerWrapper.appendChild(satyMevJayteLogo)
headerMiddlerWrapper.appendChild(governmentDiv)
headerMiddlerWrapper.appendChild(governmentLogo)
headerMiddle.appendChild(headerMiddlerWrapper)
header.appendChild(headerMiddle)




///last 
const bundleScript = document.createElement("script")
bundleScript.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
bundleScript.integrity = "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
bundleScript.crossOrigin = "anonymous"

document.body.appendChild(bundleScript)
