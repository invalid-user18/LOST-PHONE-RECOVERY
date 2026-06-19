const translations = 
{


  en:
    {
     welcomeTitle: "Have We Met Before?",
     welcomeText: "If you're seeing this, this phone may be lost. Thank you for taking a moment to help.",
     yes: "✅ Yes",
     no: "❌ No" ,
     locationTitle: "📍 Where did you find this phone?",
     nameTitle: "👤 What's your name?",
     phoneTitle: "📱 How can I contact you?",
     messageTitle: "💬 Anything you'd like to tell the owner?",
     thanktitle: "❤️ Thank You",
     appreciationTitle: "🙏 Thank You",
     appreciationText: "Thank you for taking the time to help return this phone. Your kindness is greatly appreciated.",
     loadingtitle: "📨 Sending Information...",
     loadingscreen: "Please wait",
     thankmessage: "Thank you for your help. Please contact the owner using the details below.",
     continueBtn: "Continue",
     submitBtn: "Submit information"
    },

  ml: 
    {
     continueBtn: "തുടരുക",
     welcomeTitle: "നിങ്ങൾക്ക് എന്നെ അറിയാമോ?",
     welcomeText: "ഈ ഫോൺ നഷ്ടപ്പെട്ടതാകാം. സഹായിക്കാൻ സമയം കണ്ടെത്തിയതിന് നന്ദി.",
     yes: "✅ അറിയാം",
     no: "❌ ഇല്ല" ,
     locationTitle: "📍 ഈ ഫോൺ എവിടെയാണ് കണ്ടെത്തിയത്?",
     nameTitle: "👤 നിങ്ങളുടെ പേര് എന്താണ്?",
     phoneTitle: "📱 നിങ്ങളെ എങ്ങനെ ബന്ധപ്പെടാം?",
     messageTitle: "💬 കൂടുതൽ വിവരങ്ങൾ എന്തെങ്കിലും",
     thanktitle: "❤️ നന്ദി",
     appreciationTitle: "🙏 നന്ദി",
     appreciationText: "ഈ ഫോൺ തിരികെ ലഭിക്കാൻ സഹായിച്ചതിന് നന്ദി. നിങ്ങളുടെ സഹായം വളരെ വിലപ്പെട്ടതാണ്.",
     loadingTitle: "📨 വിവരങ്ങൾ അയക്കുന്നു...",
     loadingscreen: "കാത്തിരിക്കൂ",
     thankmessage: "നിങ്ങളുടെ സഹായത്തിന് നന്ദി. താഴെ നൽകിയിരിക്കുന്ന വിവരങ്ങൾ ഉപയോഗിച്ച് ഉടമയെ ബന്ധപ്പെടുക.",
     submitBtn: "വിവരങ്ങൾ സമർപ്പിക്കുക"
    },

  hi: 
    {
     continueBtn: "जारी रखें",
     welcomeTitle: "क्या हम पहले मिले हैं?",
     welcomeText: "यह फोन खो गया हो सकता है। मदद करने के लिए धन्यवाद।",
     yes: "✅ हाँ",
     no: "❌ नहीं" ,
     locationTitle: "📍 आपको यह फोन कहाँ मिला?",
     nameTitle: "👤 आपका नाम क्या है?",
     phoneTitle: "📱 मैं आपसे कैसे संपर्क करूँ?",
     messageTitle: "💬 मालिक को कुछ बताना चाहेंगे?",
     thankTitle: "❤️ धन्यवाद",
     appreciationTitle: "🙏 धन्यवाद",
     appreciationText: "इस फोन को वापस दिलाने में मदद करने के लिए धन्यवाद। आपकी सहायता की बहुत सराहना की जाती है।",
     loadingTitle: "📨 जानकारी भेजी जा रही है...",
     loadingscreen: "कृपया प्रतीक्षा करें",
     thankMessage: "आपकी मदद के लिए धन्यवाद। कृपया नीचे दिए गए विवरणों का उपयोग करके मालिक से संपर्क करें।",
     submitBtn: "जानकारी सबमिट करें"
    },

  ta:
    {
     continueBtn: "தொடரவும்",
     welcomeTitle: "நாம் இதற்கு முன் சந்தித்திருக்கிறோமா?",
     welcomeText: "இந்த தொலைபேசி தொலைந்திருக்கலாம். உதவ நேரம் எடுத்ததற்கு நன்றி.",
     yes: "✅ ஆம்",
     no: "❌ இல்லை" ,
     locationTitle: "📍 இந்த தொலைபேசியை எங்கு கண்டீர்கள்?",
     nameTitle: "👤 உங்கள் பெயர் என்ன?",
     phoneTitle: "📱 உங்களை எப்படி தொடர்புகொள்வது?",
     messageTitle: "💬 உரிமையாளரிடம் ஏதாவது சொல்ல விரும்புகிறீர்களா?",
     thankTitle: "❤️ நன்றி",
     appreciationTitle: "🙏 நன்றி",
     appreciationText: "இந்த தொலைபேசியை திருப்பித் தர உதவியதற்கு நன்றி. உங்கள் உதவி மிகவும் பாராட்டப்படுகிறது.",
     submitBtn: "தகவலை சமர்ப்பிக்கவும்"
    }


};

window.addEventListener("load", async () =>
{

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
                time: new Date().toISOString()
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

                console.log("GPS:", gpsLocation);


            },
            function(error) {
                alert("Location Error: " + error.message);
            }
        );

    } else {
        alert("Geolocation not supported");
    }
}

let gpsLocation = "";
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

document.getElementById("continue-location-btn").innerText =
translations[lang].continueBtn;

document.getElementById("continue-name-btn").innerText =
translations[lang].continueBtn;

document.getElementById("continue-phone-btn").innerText =
translations[lang].continueBtn;

document.getElementById("appreciation-title").innerText =
    translations[lang].appreciationTitle;

document.getElementById("appreciation-text").innerText =
    translations[lang].appreciationText;

document.getElementById("submit-btn").innerText =
    translations[lang].submitBtn;

showScreen("welcome-screen");


}

function startFlow(type) {
    flowType = type;
    getLocation();
    showScreen("location-screen");
}

function nextScreen(screenId) {
    showScreen(screenId);
}



function checkLocation() {

    const location = document.getElementById("location").value.trim();

    if (location === "") {
        alert("Please enter the location.");
        return;
    }

    if (location.length < 3) {
        alert("Please enter a valid location.");
        return;
    }

    nextScreen("name-screen");
}

function checkName() {

    const name = document.getElementById("name").value.trim();

    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    if (name.length < 3) {
        alert("Name must be at least 3 characters.");
        return;
    }

    nextScreen("phone-screen");
}

function checkPhone() {

    const phone = document.getElementById("phone").value.trim();

    if (phone === "") {
        alert("Please enter your phone number.");
        return;
    }

    if (!/^\d{10}$/.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    if (flowType === "yes") {
        showScreen("appreciation-screen");
    } else {
        showScreen("message-screen");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const phoneNextBtn = document.getElementById("phone-next-btn");

    if (phoneNextBtn) {
      phoneNextBtn.addEventListener("click", () => {

    if (flowType === "yes") {
        showScreen("appreciation-screen");
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

    showScreen("loading-screen");

    await fetch(WEB_APP_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "text/plain"
        },
        body: JSON.stringify(data)
    });

    setTimeout(() => {
        showScreen("final-screen");
    }, 2000);


    } catch (error) {

        alert("Failed to send information");
        console.error(error);

    }

showScreen("language-screen");

function testButton() {
    alert("Button Working");
}
const submitBtn = document.getElementById("submit-btn");
if (submitBtn) {
    submitBtn.innerText = translations[lang].submitBtn;
}
}