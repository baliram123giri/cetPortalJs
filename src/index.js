
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

//bottom header
const headerBottom = document.createElement("div")
headerBottom.style.width = "100%"
headerBottom.style.background = "#163269"
headerBottom.className = " mt-1 py-2"

//create header bottom nav
const headerBottomNav = document.createElement("nav")
headerBottomNav.className = "w-75 mx-auto d-flex justify-content-between align-items-center"

//create ul and btn
const headerBottomNavUl = document.createElement("ul")
headerBottomNavUl.style.listStyle = "none"
headerBottomNavUl.className = "d-flex gap-3 m-0"
//create array for navs
const headerBottomNavUlLiList = ["Home", "About Us", "CETs", "CAP", "Downloads", "Statics", "Online System", "Event", "Contact"]


headerBottomNavUlLiList.forEach(function (ele) {
    const headerBottomNavUlLi = document.createElement("li")
    const headerBottomNavUlLiAtag = document.createElement("a")
    headerBottomNavUlLiAtag.href = "#"
    headerBottomNavUlLiAtag.innerText = ele
    headerBottomNavUlLiAtag.className = "text-decoration-none text-white"
    headerBottomNavUlLi.appendChild(headerBottomNavUlLiAtag)
    headerBottomNavUl.appendChild(headerBottomNavUlLi)

})

//create a btn to nav
const headerBottomNavBtn = document.createElement("button")
headerBottomNavBtn.type = "button"
headerBottomNavBtn.innerText = "Ask Pragati"
headerBottomNavBtn.className = "text-white p-1 px-2 rounded-2"
headerBottomNavBtn.style.border = "1px solid #808080"
headerBottomNavBtn.style.background = "#01205D"

//create a img to btn
const headerBottomNavBtnImg = document.createElement("img")
headerBottomNavBtnImg.src = "../img/Ask-Pragati-9.png"
headerBottomNavBtnImg.alt = ""
headerBottomNavBtnImg.width = "35"

headerBottomNavBtn.appendChild(headerBottomNavBtnImg)
headerBottom.appendChild(headerBottomNav)
headerBottomNav.appendChild(headerBottomNavUl)
headerBottomNav.appendChild(headerBottomNavBtn)
header.appendChild(headerBottom)


//create a main tag
const main = document.createElement("main")

//notice
const mainNotice = document.createElement("section")
mainNotice.className = "container my-2 d-flex gap-2"
const mainNoticeAnnoucementBtn = document.createElement("button")
mainNoticeAnnoucementBtn.innerText = "Announcement"
mainNoticeAnnoucementBtn.style.background = "#EEC641"
mainNoticeAnnoucementBtn.className = "btn text-white fw-bold"

//create marquee tag
const mainNoticeMarquee = document.createElement("marquee")
mainNoticeMarquee.innerHTML = "Imp Notice: Dates have been Extended for various courses of CET registration for A.Y 2023-24 (English/Marathi)"
mainNoticeMarquee.style.background = "#F1F1F1"
mainNoticeMarquee.behavior = ""
mainNoticeMarquee.direction = ""
mainNoticeMarquee.style.lineHeight = "2.3"
mainNoticeMarquee.className = "m-0 p-0"

//create new keyword to pop inifinte
const newInfinite = document.createElement("span")
newInfinite.innerText = "New"
newInfinite.style.background = "red"
newInfinite.className = "p-1"
mainNoticeMarquee.appendChild(newInfinite)

// mainNoticeMarquee.innerText += "New"
main.appendChild(mainNotice)
mainNotice.appendChild(mainNoticeAnnoucementBtn)
mainNotice.appendChild(mainNoticeMarquee)
root.appendChild(main)


//banner 
const banner = document.createElement("div")
banner.style.width = "100%"
banner.style.height = "400px"
banner.style.display = "flex"


//create banner left
const bannerLeft = document.createElement("div")
bannerLeft.style.width = "75%"
bannerLeft.style.height = "100%"
bannerLeft.style.background = "green"
bannerLeft.style.background = "url(../img/GOVERNMENT-OF-MAHARASHTRA-22-1.png)"
bannerLeft.style.backgroundRepeat = "no-repeat"
bannerLeft.style.backgroundSize = "cover"
bannerLeft.className = "position-relative"

//create number of department and courses
const bannerLeftCourseNumbers = document.createElement("div")
bannerLeftCourseNumbers.className = "row m-0  position-absolute"
bannerLeftCourseNumbers.style.background = "#EEC641"
bannerLeftCourseNumbers.style.bottom = "-84px"
bannerLeftCourseNumbers.style.width = "100%"

function CardNumber(title, descriptionText, background, columns) {
    const card = document.createElement("div")
    card.className = `col-12 col-lg-${columns || 4} text-center text-white  py-2 `

    if (background) {
        card.style.background = background
    }

    //create num
    const titleH5 = document.createElement("h5")
    titleH5.className = "count"
    titleH5.setAttribute("data-count", title)
    titleH5.innerText = 0
    titleH5.style.fontSize = "30px"

    //create description
    const description = document.createElement("p")
    description.className = "m-0"
    description.innerText = descriptionText

    //appending child
    card.appendChild(titleH5)
    card.appendChild(description)
    //returned card
    return card
}

bannerLeftCourseNumbers.appendChild(CardNumber(6, "Number of Departments"))
bannerLeftCourseNumbers.appendChild(CardNumber(19, "Number of CETs", "#163269"))
bannerLeftCourseNumbers.appendChild(CardNumber(61, "Number of Courses"))

//
//create banner right
const bannerRight = document.createElement("div")
bannerRight.style.width = "25%"
bannerRight.style.height = "100%"
bannerRight.className = "p-3"
bannerRight.style.position = "relative"
// bannerRight.style.background = "rgb(22,50,105)"
bannerRight.style.background = "linear-gradient(180deg, rgba(22,50,105,0.8) 10%, rgba(238,198,65,1) 100%)"

//create a function to right card 
function IconTitleCard(icon, titleString, background) {
    let card = document.createElement("div")
    card.className = "d-flex align-items-center gap-3 p-2 text-white mt-2"
    let leftBox = document.createElement("div")
    leftBox.style.width = "70px"
    leftBox.style.height = "70px"
    leftBox.className = "bg-white rounded-pill d-flex  align-items-center justify-content-center"
    //create one more div to icon background
    const subdivLeft = document.createElement("div")
    subdivLeft.style.width = "50px"
    subdivLeft.style.height = "50px"
    subdivLeft.style.background = background
    subdivLeft.className = " rounded-pill d-flex  align-items-center justify-content-center"
    subdivLeft.innerHTML = `<i class="fa ${icon}" style="font-size:30px;" aria-hidden="true"></i>`
    leftBox.appendChild(subdivLeft)

    let rightBox = document.createElement("div")
    rightBox.style.flex = 1
    //create h6
    const title = document.createElement("h6")
    title.style.lineHeight = "22px"
    title.innerText = titleString
    rightBox.appendChild(title)
    card.appendChild(leftBox)
    card.appendChild(rightBox)
    return card
}
bannerRight.appendChild(IconTitleCard("fa-user-circle-o", "Candidate Registration A.Y 2024-25", "#0E8F52"))
bannerRight.appendChild(IconTitleCard("fa-users", "Candidate Help Module", "#FFB859"))
bannerRight.appendChild(IconTitleCard("fa-graduation-cap", "Foreign Candidate Registration Portal", "#163269"))
bannerRight.appendChild(IconTitleCard("fa-id-card", "Admissions Regulating Authority (ARA) Website", "#EE6A41"))

//create fix background img
const fixedBackgroundBannerRightImg = document.createElement("div")
fixedBackgroundBannerRightImg.style.background = "url(../img/MicrosoftTeams-image-scaled.jpg)"
fixedBackgroundBannerRightImg.style.width = "100%"
fixedBackgroundBannerRightImg.style.height = "100%"
fixedBackgroundBannerRightImg.style.height = "50%"
fixedBackgroundBannerRightImg.style.backgroundSize = "cover"
fixedBackgroundBannerRightImg.style.backgroundPositionX = "-1000px"
fixedBackgroundBannerRightImg.style.zIndex = "-1"


fixedBackgroundBannerRightImg.style.position = "fixed"

// bannerRight.appendChild(fixedBackgroundBannerRightImg)

const bannerRightCourseNumbers = document.createElement("div")
bannerRightCourseNumbers.className = "row mt-2 position-absolute w-100"
bannerRightCourseNumbers.style.bottom = "-84px"
bannerRightCourseNumbers.style.left = "12px"
bannerRightCourseNumbers.appendChild(CardNumber(4000, "Number of Departments", "#163269", 12))

bannerLeft.appendChild(bannerLeftCourseNumbers)
banner.appendChild(bannerLeft)
banner.appendChild(bannerRight)
bannerRight.appendChild(bannerRightCourseNumbers)
main.appendChild(banner)

const counts = document.querySelectorAll(".count")

counts.forEach(function (counter) {

    function updateCounter() {
        const finalValue = Number(counter.getAttribute("data-count"))
        const oldValue = Number(counter.innerText.replace(",", ""))
        const incrementValue = finalValue / 100

        if (oldValue < finalValue) {
            counter.innerText = Math.ceil(incrementValue + oldValue).toLocaleString()
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = `${finalValue > 1000 ? `${finalValue.toLocaleString()}+` : finalValue}`
        }
    }

    updateCounter()

})

//create about section
const aboutSection = document.createElement("div")
aboutSection.style.background = "url(../img/aboutBg.jpg)"
aboutSection.style.backgroundPosition = "center 0px"
aboutSection.style.backgroundSize = "cover"
aboutSection.style.backgroundRepeat = "no-repeat"

aboutSection.style.backgroundAttachment = "fixed"

//create a child as abbout section overlay
const aboutSectionOverlay = document.createElement("div")
aboutSectionOverlay.style.background = "#ffffffbd"
aboutSectionOverlay.style.padding = "70px 0px"

//create aboutSection container
const aboutSectionContainer = document.createElement("div")
aboutSectionContainer.className = "w-75 mx-auto"
aboutSectionContainer.style.marginTop = "84px"

const aboutSectionContainerRow = document.createElement("div")
aboutSectionContainerRow.className = "row"

//left
const aboutSectionContainerRowLeft = document.createElement("div")
aboutSectionContainerRowLeft.className = "col-12 col-lg-5 "

//create a img tag
const imgDiv = document.createElement("div")

imgDiv.style.borderLeft = "15px solid #163269"
imgDiv.style.borderBottom = "15px solid #163269"
const aboutSectionContainerRowLeftImg = document.createElement("img")
aboutSectionContainerRowLeftImg.src = "../img/abountLeft.png"
aboutSectionContainerRowLeftImg.alt = "abountLeft"
aboutSectionContainerRowLeftImg.style.width = "100%"
aboutSectionContainerRowLeftImg.style.height = "250px"
aboutSectionContainerRowLeftImg.style.objectFit = "contain"
aboutSectionContainerRowLeftImg.style.objectPosition = "0px 50px"

imgDiv.appendChild(aboutSectionContainerRowLeftImg)
aboutSectionContainerRowLeft.appendChild(imgDiv)

//right 
const aboutSectionContainerRowRight = document.createElement("div")
aboutSectionContainerRowRight.className = "col-12 col-lg-7"

//create heading
const aboutSectionContainerRowRightHeading = document.createElement("h2")
aboutSectionContainerRowRightHeading.innerText = "About CET Cell"
aboutSectionContainerRowRightHeading.style.color = "#163269"
const paragrph1 = document.createElement("p")
paragrph1.innerText = "The Government of Maharashtra has established State Common Entrance Test Cell as per Section 10 of the Maharashtra Unaided Private Professional Educational Institutions (Regulation of Admissions and Fees) Act ,2015. The CET Cell conducts various entrance exams for Admission to Professional courses in the state of Maharashtra, India."
const paragrph2 = document.createElement("p")
paragrph2.innerText = "Its primary purpose is to facilitate the admission process for Professional courses such as Engineering, Management, Pharmacy, Agriculture, law, Medical, AYUSH & Fine Arts ."

aboutSectionContainerRowRight.appendChild(aboutSectionContainerRowRightHeading)
aboutSectionContainerRowRight.appendChild(paragrph1)
aboutSectionContainerRowRight.appendChild(paragrph2)
aboutSectionContainerRow.appendChild(aboutSectionContainerRowLeft)
aboutSectionContainerRow.appendChild(aboutSectionContainerRowRight)
aboutSectionContainer.appendChild(aboutSectionContainerRow)
aboutSectionOverlay.appendChild(aboutSectionContainer)
aboutSection.appendChild(aboutSectionOverlay)

main.appendChild(aboutSection)

//table section
const tableSection = document.createElement("div")
tableSection.style.background = "#EAEAEA"


//create menu container
const menuContainer = document.createElement("div")
menuContainer.className = "w-75 mx-auto py-3"

menuContainer.innerHTML = `<nav class="nav justify-content-between " style="font-size:16px">
<button type="button" class="  px-4 py-2 bg-white border-0  b_about_btn" aria-current="page" >All</button>
<button type="button" class=" px-4 py-2 bg-white border-0 b_about_btn" >Technical Education</button>
<button type="button" class=" px-4 py-2 bg-white border-0 b_about_btn" >Higher Education</button>
<button type="button" class=" px-4 py-2 bg-white border-0 b_about_btn" >Agriculture Education</button>
<button type="button" class=" px-4 py-2 bg-white border-0 b_about_btn" >Fine Art Education</button>
<button type="button" class=" px-4 py-2 bg-white border-0 b_about_btn" >Medical Education</button>
<button type="button" class=" px-4 py-2 bg-white border-0 b_about_btn" >AYUSH</button>
</nav>`




window.onload = function () {
    const aboutBtn = document.querySelector(".b_about_btn")
    aboutBtn.classList.remove("bg-white")
    aboutBtn.classList.add("bg-warning")
    dynamicData([
        {
            id: 1,
            course: "LLB 3 Yrs",
            subject: "Important Notice for Preparatory Passed Candidates.",
            isNew: true,
            date: "02/02/2024",
            download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Important-Notices_Preperatory-CET-2024.pdf"
        },
        {
            id: 2,
            course: "All CET's",
            subject: "User Manual Video for CET Registration A.Y. 2024-25",
            isNew: true,
            date: "31/01/2024",
            download: "https://www.youtube.com/watch?v=UuJSWbIoyGQ"
        },
        {
            id: 3,
            course: "MAH- AAC (Fine Art)",
            subject: "MAH- AAC (Fine Art) CET 2024 Online Application Notice No.1 (English/Marathi)",
            isNew: true,
            date: "30/01/2024",
            download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Online-Application-Notice.pdf"
        },
        {
            id: 4,
            course: "All CET's",
            subject: "Imp Notice: Dates have been Extended for various courses of CET registration for A.Y 2024-25 (English/Marathi)",
            isNew: true,
            date: "29/01/2024",
            download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Extenstion-Notice.pdf"
        }
    ])
}
//
function dynamicData(tableAllData = []) {

    tableAllData.forEach(function (ele) {
        const tableBodyTr = document.createElement("tr")
        const tableBodyTrData1 = document.createElement("td")
        tableBodyTrData1.innerText = ele.id
        tableBodyTrData1.style.textAlign = "center"
        const tableBodyTrData2 = document.createElement("td")
        tableBodyTrData2.innerText = ele.course
        const tableBodyTrData3 = document.createElement("td")
        tableBodyTrData3.innerText = ele.subject
        //create new img
        const newImg = document.createElement("img")
        newImg.src = "../img/blinknew.gif"
        newImg.alt = "new"
        if (ele.isNew) {
            tableBodyTrData3.appendChild(newImg)
        }
        const tableBodyTrData4 = document.createElement("td")
        tableBodyTrData4.innerText = ele.date
        const tableBodyTrData5 = document.createElement("td")
        tableBodyTrData5.style.textAlign = "center"
        tableBodyTrData5.style.cursor = "pointer"
        const openLink = `<a href="${ele.download}" target="_blank"><i class="fa fa-file-pdf-o fw-bold" aria-hidden="true"></i></a>`
        tableBodyTrData5.innerHTML = openLink
        tableBodyTr.appendChild(tableBodyTrData1)
        tableBodyTr.appendChild(tableBodyTrData2)
        tableBodyTr.appendChild(tableBodyTrData3)

        tableBodyTr.appendChild(tableBodyTrData4)
        tableBodyTr.appendChild(tableBodyTrData5)
        tableBody.appendChild(tableBodyTr)
    })
}

document.addEventListener("click", function (event) {
    const isBtn = event.target.classList.contains("b_about_btn")

    if (isBtn) {
        const title = event.target.innerText


        const existingBtn = document.querySelectorAll(".b_about_btn")
        existingBtn.forEach((ele) => {
            ele.classList.add("bg-white")
            const isExist = ele.classList.contains("bg-warning")
            if (isExist) {
                event.target.classList.add("bg-white")
                ele.classList.remove("bg-warning")
            }
        })
        event.target.classList.remove("bg-white")
        event.target.classList.add("bg-warning")
        tableBody.innerHTML = ""

        switch (title) {
            case "Technical Education":
                return dynamicData([
                    {
                        id: 4,
                        course: "Baliram",
                        subject: "Imp Notice: Dates have been Extended for various courses of CET registration for A.Y 2024-25 (English/Marathi)",
                        isNew: true,
                        date: "29/01/2024",
                        download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Extenstion-Notice.pdf"
                    }
                ])
            case "Higher Education":
                return dynamicData([
                    {
                        id: 4,
                        course: "Higher",
                        subject: "Imp Notice: Dates have been Extended for various courses of CET registration for A.Y 2024-25 (English/Marathi)",
                        isNew: true,
                        date: "29/01/2024",
                        download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Extenstion-Notice.pdf"
                    }
                ])
            case "Agriculture Education":
                return dynamicData([
                    {
                        id: 4,
                        course: "Agriculture",
                        subject: "Imp Notice: Dates have been Extended for various courses of CET registration for A.Y 2024-25 (English/Marathi)",
                        isNew: true,
                        date: "29/01/2024",
                        download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Extenstion-Notice.pdf"
                    }
                ])
            case "Fine Art Education":
                return dynamicData([
                    {
                        id: 4,
                        course: "Fine Art Education",
                        subject: "Imp Notice: Dates have been Extended for various courses of CET registration for A.Y 2024-25 (English/Marathi)",
                        isNew: true,
                        date: "29/01/2024",
                        download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Extenstion-Notice.pdf"
                    }
                ])
            case "Medical Education":
                return dynamicData([
                    {
                        id: 4,
                        course: "Medical Education",
                        subject: "Imp Notice: Dates have been Extended for various courses of CET registration for A.Y 2024-25 (English/Marathi)",
                        isNew: true,
                        date: "29/01/2024",
                        download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Extenstion-Notice.pdf"
                    }
                ])
            case "AYUSH":
                return dynamicData([
                    {
                        id: 4,
                        course: "AYUSH",
                        subject: "Imp Notice: Dates have been Extended for various courses of CET registration for A.Y 2024-25 (English/Marathi)",
                        isNew: true,
                        date: "29/01/2024",
                        download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Extenstion-Notice.pdf"
                    }
                ])
            default:
                return dynamicData([
                    {
                        id: 1,
                        course: "LLB 3 Yrs",
                        subject: "Important Notice for Preparatory Passed Candidates.",
                        isNew: true,
                        date: "02/02/2024",
                        download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Important-Notices_Preperatory-CET-2024.pdf"
                    },
                    {
                        id: 2,
                        course: "All CET's",
                        subject: "User Manual Video for CET Registration A.Y. 2024-25",
                        isNew: true,
                        date: "31/01/2024",
                        download: "https://www.youtube.com/watch?v=UuJSWbIoyGQ"
                    },
                    {
                        id: 3,
                        course: "MAH- AAC (Fine Art)",
                        subject: "MAH- AAC (Fine Art) CET 2024 Online Application Notice No.1 (English/Marathi)",
                        isNew: true,
                        date: "30/01/2024",
                        download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Online-Application-Notice.pdf"
                    },
                    {
                        id: 4,
                        course: "All CET's",
                        subject: "Imp Notice: Dates have been Extended for various courses of CET registration for A.Y 2024-25 (English/Marathi)",
                        isNew: true,
                        date: "29/01/2024",
                        download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Extenstion-Notice.pdf"
                    }
                ])
        }
    }
})

tableSection.appendChild(menuContainer)
aboutSection.appendChild(tableSection)
//create a dynamic table
const table = document.createElement("table")
table.style.width = "100%"
table.className = "table  my-2 table-bordered border-dark border-end"
const tableHead = document.createElement("thead")
const tableHeadTr = document.createElement("tr")


const tableBody = document.createElement("tbody")


const tableHeadData = [{ title: "SN", width: 20 }, { title: "Course Name", width: 200 }, { title: "Subject", width: 500 }, { title: "Published Date", width: 150 }, { title: "Download", width: 50 }]



tableHeadData.forEach(function (th) {
    const tableHeadTrTh = document.createElement("th")
    tableHeadTrTh.className = "bg-warning"
    if (th.title === "SN") {
        tableHeadTrTh.style.textAlign = "center"
    }
    tableHeadTrTh.innerText = th.title
    tableHeadTrTh.style.width = `${th.width}px`
    tableHeadTrTh.style.fontWeight = "400"
    tableHeadTr.appendChild(tableHeadTrTh)
})



table.appendChild(tableHead)
table.appendChild(tableBody)
tableHead.appendChild(tableHeadTr)

menuContainer.appendChild(table)


///last 
const bundleScript = document.createElement("script")
bundleScript.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
bundleScript.integrity = "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
bundleScript.crossOrigin = "anonymous"

const jquery =  document.createElement("script")
document.body.appendChild(bundleScript)

