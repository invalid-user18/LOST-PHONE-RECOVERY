const translations = {


en: {
    welcomeTitle: "Have We Met Before?",
    welcomeText: "If you're seeing this, this phone may be lost. Thank you for taking a moment to help.",
    yes: "✅ Yes",
    no: "❌ No" ,

    locationTitle: "📍 Where did you find this phone?",
    nameTitle: "👤 What's your name?",
phoneTitle: "📱 How can I contact you?",
messageTitle: "💬 Anything you'd like to tell the owner?",
thankTitle: "❤️ Thank You"
},

ml: {
    welcomeTitle: "നമ്മൾ മുമ്പ് കണ്ടിട്ടുണ്ടോ?",
    welcomeText: "ഈ ഫോൺ നഷ്ടപ്പെട്ടതാകാം. സഹായിക്കാൻ സമയം കണ്ടെത്തിയതിന് നന്ദി.",
    yes: "✅ ഉണ്ട്",
    no: "❌ ഇല്ല" ,

    locationTitle: "📍 ഈ ഫോൺ എവിടെയാണ് കണ്ടെത്തിയത്?",
nameTitle: "👤 നിങ്ങളുടെ പേര് എന്താണ്?",
phoneTitle: "📱 നിങ്ങളെ എങ്ങനെ ബന്ധപ്പെടാം?",
messageTitle: "💬 ഉടമയോട് എന്തെങ്കിലും പറയാനുണ്ടോ?",
thankTitle: "❤️ നന്ദി"
},

hi: {
    welcomeTitle: "क्या हम पहले मिले हैं?",
    welcomeText: "यह फोन खो गया हो सकता है। मदद करने के लिए धन्यवाद।",
    yes: "✅ हाँ",
    no: "❌ नहीं" ,

    locationTitle: "📍 आपको यह फोन कहाँ मिला?",
nameTitle: "👤 आपका नाम क्या है?",
phoneTitle: "📱 मैं आपसे कैसे संपर्क करूँ?",
messageTitle: "💬 मालिक को कुछ बताना चाहेंगे?",
thankTitle: "❤️ धन्यवाद"
},

ta: {
    welcomeTitle: "நாம் இதற்கு முன் சந்தித்திருக்கிறோமா?",
    welcomeText: "இந்த தொலைபேசி தொலைந்திருக்கலாம். உதவ நேரம் எடுத்ததற்கு நன்றி.",
    yes: "✅ ஆம்",
    no: "❌ இல்லை" ,

    locationTitle: "📍 இந்த தொலைபேசியை எங்கு கண்டீர்கள்?",
nameTitle: "👤 உங்கள் பெயர் என்ன?",
phoneTitle: "📱 உங்களை எப்படி தொடர்புகொள்வது?",
messageTitle: "💬 உரிமையாளரிடம் ஏதாவது சொல்ல விரும்புகிறீர்களா?",
thankTitle: "❤️ நன்றி"
}


};

window.addEventListener("load", async () => {

    const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwDWg-fmvkT2GSiHFuKxjqxQjAG_5VFKoBkS6_nP2F8S2NF9kelk5FRFcG2TRj7cWMsLA/exec";

    try {
        await fetch(WEB_APP_URL, {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "text/plain"
            },
            body: JSON.stringify({
                event: "page_opened",
                time: new Date().toISOString(),
                language: selectedLanguage
            })
        });
    } catch (e) {
        console.log(e);
    }

});

function getLocation() {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(
            function(position) {

                const lat = position.coords.latitude;
                const lon = position.coords.longitude;

                gpsLocation = `https://maps.google.com/?q=${lat},${lon}`;


            },
            function(error) {
                alert("Location Error: " + error.message);
            }
        );

    } else {
        alert("Geolocation not supported");
    }
}

let selectedLanguage = "en";
let flowType = "";

function showScreen(screenId) {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    const target = document.getElementById(screenId);
    if (target) target.classList.add("active");
}

function setLanguage(lang) {


selectedLanguage = lang;

document.getElementById("welcome-title").innerText =
    translations[lang].welcomeTitle;

document.getElementById("welcome-text").innerText =
    translations[lang].welcomeText;

const buttons =
    document.querySelectorAll("#welcome-screen button");

buttons[0].innerText = translations[lang].yes;
buttons[1].innerText = translations[lang].no;

document.getElementById("location-title").innerText =
    translations[lang].locationTitle;

document.getElementById("name-title").innerText =
    translations[lang].nameTitle;

document.getElementById("phone-title").innerText =
    translations[lang].phoneTitle;

document.getElementById("message-title").innerText =
    translations[lang].messageTitle;

document.getElementById("thank-title").innerText =
    translations[lang].thankTitle;

showScreen("welcome-screen");


}

function startFlow(type) {
    flowType = type;
    showScreen("location-screen");
}

function nextScreen(screenId) {
    showScreen(screenId);
}

document.addEventListener("DOMContentLoaded", () => {
    const phoneNextBtn = document.getElementById("phone-next-btn");

    if (phoneNextBtn) {
        phoneNextBtn.addEventListener("click", () => {
            if (flowType === "yes") {
                submitForm();
            } else {
                showScreen("message-screen");
            }
        });
    }

    showScreen("language-screen");
});



async function submitForm() {

    const data = {
        language: selectedLanguage,
        location: document.getElementById("location")?.value || "",
        gpsLocation: gpsLocation,
        mapLink: document.getElementById("location").value,
        name: document.getElementById("name")?.value || "",
        phone: document.getElementById("phone")?.value || "",
        message: document.getElementById("message")?.value || "",
    };

    const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwDWg-fmvkT2GSiHFuKxjqxQjAG_5VFKoBkS6_nP2F8S2NF9kelk5FRFcG2TRj7cWMsLA/exec";

    try {

        await fetch(WEB_APP_URL, {
           method: "POST",
         mode: "no-cors",
         headers: {
            "Content-Type": "text/plain"
  },
  body: JSON.stringify(data)
});

showScreen("final-screen");

    } catch (error) {

        alert("Failed to send information");
        console.error(error);

    }
}
showScreen("language-screen");

function testButton() {
    alert("Button Working");
}
    