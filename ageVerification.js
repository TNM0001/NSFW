document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

document.onkeydown = function (e) {
    if (event.keyCode == 123) {
        return false;
    }

    if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
        return false;
    }
    
    if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
        return false;
    }

    if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
        return false;
    }

    if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
        return false;
    }
};

function hasVerifiedAge() {
    return localStorage.getItem('ageVerified') === 'true';
}

function setAgeVerified() {
    localStorage.setItem('ageVerified', 'true');
}

function verifyAge() {
    if (hasVerifiedAge()) {
        return;
    }

    const answer = prompt("To access this site, please answer: Are you 18 years or older? (Yes/No)");

    if (answer !== null) {
        if (answer.toLowerCase() === "yes") {
            alert("You may proceed to the site.");
            setAgeVerified();
            window.location.href = "index.html";
        } else if (answer.toLowerCase() === "no") {
            alert("You are not permitted to access this content.");
            window.location.href = "https://www.youtube.com/watch?v=us_0aLWOa8E";
        } else {
            alert("Please enter a valid response (Yes/No).");
            verifyAge();
        }
    } else {
        alert("You have not answered. Access denied.");
        window.location.href = "https://www.youtube.com/watch?v=us_0aLWOa8E";
    }
}

window.onload = function() {
    verifyAge();
}