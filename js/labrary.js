var myAside = document.getElementById("aside"),
    myBtn = document.getElementById("aside-btn-open"),
    myHome = document.getElementById("my-home"),
    myAsideClose = document.getElementById("times-aside"),
    myCallContact = document.getElementById("call-contact"),
    myContactInfo = document.getElementById("contact-info"),
    myListAside = document.getElementById("my-list-aside"),
    myHomeBack = document.getElementById("back-home"),
    myOurTeam = document.getElementById("our-team"),
    myCallTeam = document.getElementById("call-our-team"),
    myCloseTeam = document.getElementById("close-our-team"),
    myCloseFooter = document.getElementById("the-footer"),
    myOpenLastNav = document.getElementById("close-last-nav");

myBtn.onclick = function () {

    "use strict";

    myAside.classList.add("aside-open");
    myHome.classList.add("home-open-aside");
//    myCloseFooter.classList.add("the-footer-close");
};

myAsideClose.onclick = function () {

    "use strict";

    myAside.classList.remove("aside-open");
    myHome.classList.remove("home-open-aside");
    myCloseFooter.classList.remove("the-footer-close");

};

myCallContact.onclick = function () {

    "use strict";

    myContactInfo.classList.add("contact-us-open");
    myContactInfo.style.zIndex = "1";
    myListAside.style.zIndex = "2";
    myOurTeam.classList.remove("our-team-open");
    myCloseFooter.classList.add("the-footer-close");

};

myHomeBack.onclick = function () {

    "use strict";

    myContactInfo.classList.remove("contact-us-open");
    myAside.classList.remove("aside-open");
    myHome.classList.remove("home-open-aside");
    myOurTeam.classList.remove("our-team-open");
    myCloseFooter.classList.remove("the-footer-close");

};

myCallTeam.onclick = function () {

    "use strict";

    myOurTeam.classList.add("our-team-open");
    myContactInfo.classList.remove("contact-us-open");
    myListAside.style.display = "none";
    myCloseFooter.classList.add("the-footer-close");

};

myCloseTeam.onclick = function () {
    "use strict";

    myOurTeam.classList.remove("our-team-open");
    myListAside.style.display = "block";
    myCloseFooter.classList.remove("the-footer-close");

};

//myOpenLastNav.onclick = function () {
//    'use strict';
//
//    myListAside.classList.toggle("last-nav-close");
//
//};
