const siteContent = {
    nav: {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
        "img-src": "img/logo.png"
    },
    cta: {
        h1: "DOM Is Awesome",
        button: "Get Started",
        "img-src": "img/header-img.png"
    },
    "main-content": {
        "features-h4": "Features",
        "features-content":
            "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content":
            "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content":
            "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content":
            "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content":
            "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
    },
    contact: {
        "contact-h4": "Contact",
        address: "123 Way 456 Street Somewhere, USA",
        phone: "1 (888) 888-8888",
        email: "sales@greatidea.io"
    },
    footer: {
        copyright: "Copyright Great Idea! 2018"
    }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

let navItems = document.querySelectorAll("a");
// navItems.forEach(item => {
//     item.innerHTML = Object.values(siteContent["nav"][item]);
// });

navItems[0].innerText = siteContent["nav"]["nav-item-1"];
navItems[1].innerText = siteContent["nav"]["nav-item-2"];
navItems[2].innerText = siteContent["nav"]["nav-item-3"];
navItems[3].innerText = siteContent["nav"]["nav-item-4"];
navItems[4].innerText = siteContent["nav"]["nav-item-5"];
navItems[5].innerText = siteContent["nav"]["nav-item-6"];

let ctaHeader = document.querySelector(".cta-text h1");
ctaHeader.innerText = siteContent["cta"].h1;

let ctaButton = document.querySelector(".cta-text button");
ctaButton.innerText = siteContent["cta"].button;

let ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent["cta"]["img-src"];

let topContentHeaders = document.querySelectorAll(".top-content h4");
// console.log(topContentHeaders);
topContentHeaders[0].innerText = siteContent["main-content"]["features-h4"];
topContentHeaders[1].innerText = siteContent["main-content"]["about-h4"];

let topContentParagraphs = document.querySelectorAll(".top-content p");
// console.log(topContentParagraphs);
topContentParagraphs[0].innerText =
    siteContent["main-content"]["features-content"];
topContentParagraphs[1].innerText =
    siteContent["main-content"]["about-content"];

middleImg = document.querySelector("#middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];

let bottomContentHeaders = document.querySelectorAll(".bottom-content h4");
// console.log(bottomContentHeaders);
bottomContentHeaders[0].innerText = siteContent["main-content"]["services-h4"];
bottomContentHeaders[1].innerText = siteContent["main-content"]["product-h4"];
bottomContentHeaders[2].innerText = siteContent["main-content"]["vision-h4"];

let bottomContentParagraphs = document.querySelectorAll(".bottom-content p");
// console.log(bottomContentHeaders);
bottomContentParagraphs[0].innerText =
    siteContent["main-content"]["services-content"];
bottomContentParagraphs[1].innerText =
    siteContent["main-content"]["product-content"];
bottomContentParagraphs[2].innerText =
    siteContent["main-content"]["vision-content"];

let contactHeader = document.querySelector(".contact h4");
// console.log(contactHeader);
contactHeader.innerText = siteContent.contact["contact-h4"];

let contactParagraphs = document.querySelectorAll(".contact p");
// console.log(contactParagraphs);
contactParagraphs[0].innerText = siteContent.contact.address;
contactParagraphs[1].innerText = siteContent.contact.phone;
contactParagraphs[2].innerText = siteContent.contact.email;

let footer = document.querySelector("footer p");
console.log(footer);
footer.innerText = siteContent.footer.copyright;
