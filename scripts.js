function showJobs() {
    $('#jobs').addClass('displayTrue');
    $('#jobs').removeClass('displayFalse');
    $('#jobsbutton').addClass('clicked');
    $('#jobsbutton').removeClass('unclicked');
    if ($('#interests').hasClass('displayTrue')) {
        $('#interests').addClass('displayFalse');
        $('#interests').removeClass('displayTrue');
    }
    if ($('#links').hasClass('displayTrue')) {
        $('#links').addClass('displayFalse');
        $('#links').removeClass('displayTrue');
    }
    if ($('#interestsbutton').hasClass('clicked')) {
        $('#interestsbutton').addClass('unclicked');
        $('#interestsbutton').removeClass('clicked');
    }
    if ($('#linksbutton').hasClass('clicked')) {
        $('#linksbutton').addClass('unclicked');
        $('#linksbutton').removeClass('clicked');
    }
    if ($('#about').hasClass('displayTrue')) {
        $('#about').addClass('displayFalse');
        $('#about').removeClass('displayTrue');
    }
    if ($('#aboutbutton').hasClass('clicked')) {
        $('#aboutbutton').addClass('unclicked');
        $('#aboutbutton').removeClass('clicked');
    }
}

function showInterests() {
    $('#interests').addClass('displayTrue');
    $('#interests').removeClass('displayFalse');
    $('#interestsbutton').addClass('clicked');
    $('#interestsbutton').removeClass('unclicked');
    if ($('#jobs').hasClass('displayTrue')) {
        $('#jobs').addClass('displayFalse');
        $('#jobs').removeClass('displayTrue');
    }
    if ($('#links').hasClass('displayTrue')) {
        $('#links').addClass('displayFalse');
        $('#links').removeClass('displayTrue');
    }
    if ($('#jobsbutton').hasClass('clicked')) {
        $('#jobsbutton').addClass('unclicked');
        $('#jobsbutton').removeClass('clicked');
    }
    if ($('#linksbutton').hasClass('clicked')) {
        $('#linksbutton').addClass('unclicked');
        $('#linksbutton').removeClass('clicked');
    }
    if ($('#about').hasClass('displayTrue')) {
        $('#about').addClass('displayFalse');
        $('#about').removeClass('displayTrue');
    }
    if ($('#aboutbutton').hasClass('clicked')) {
        $('#aboutbutton').addClass('unclicked');
        $('#aboutbutton').removeClass('clicked');
    }
}

function showLinks() {
    $('#links').addClass('displayTrue');
    $('#links').removeClass('displayFalse');
    $('#linksbutton').addClass('clicked');
    $('#linksbutton').removeClass('unclicked');
    if ($('#interests').hasClass('displayTrue')) {
        $('#interests').addClass('displayFalse');
        $('#interests').removeClass('displayTrue');
    }
    if ($('#jobs').hasClass('displayTrue')) {
        $('#jobs').addClass('displayFalse');
        $('#jobs').removeClass('displayTrue');
    }
    if ($('#jobsbutton').hasClass('clicked')) {
        $('#jobsbutton').addClass('unclicked');
        $('#jobsbutton').removeClass('clicked');
    }
    if ($('#interestsbutton').hasClass('clicked')) {
        $('#interestsbutton').addClass('unclicked');
        $('#interestsbutton').removeClass('clicked');
    }
    if ($('#about').hasClass('displayTrue')) {
        $('#about').addClass('displayFalse');
        $('#about').removeClass('displayTrue');
    }
    if ($('#aboutbutton').hasClass('clicked')) {
        $('#aboutbutton').addClass('unclicked');
        $('#aboutbutton').removeClass('clicked');
    }
}

function showAbout() {
    $('#about').addClass('displayTrue');
    $('#about').removeClass('displayFalse');
    $('#aboutbutton').addClass('clicked');
    $('#aboutbutton').removeClass('unclicked');
    if ($('#interests').hasClass('displayTrue')) {
        $('#interests').addClass('displayFalse');
        $('#interests').removeClass('displayTrue');
    }
    if ($('#jobs').hasClass('displayTrue')) {
        $('#jobs').addClass('displayFalse');
        $('#jobs').removeClass('displayTrue');
    }
    if ($('#jobsbutton').hasClass('clicked')) {
        $('#jobsbutton').addClass('unclicked');
        $('#jobsbutton').removeClass('clicked');
    }
    if ($('#interestsbutton').hasClass('clicked')) {
        $('#interestsbutton').addClass('unclicked');
        $('#interestsbutton').removeClass('clicked');
    }
    if ($('#links').hasClass('displayTrue')) {
        $('#links').addClass('displayFalse');
        $('#links').removeClass('displayTrue');
    }
    if ($('#linksbutton').hasClass('clicked')) {
        $('#linksbutton').addClass('unclicked');
        $('#linksbutton').removeClass('clicked');
    }
}

const subHeaderArr = ["Software Engineer", "Pickup Basketball Player", "Home Baker", "Birdwatcher", "Avid Reader", "King K. Rool Main"];
var elem = document.getElementById("rotation");
var inst = setInterval(rotateText, 10000);
var counter = 1;


function rotateText() {
    console.log(document.getElementById("rotation"));
    document.getElementById("rotation").classList.add('hide');
    setTimeout(function () {
        document.getElementById("rotation").textContent = subHeaderArr[counter];
        document.getElementById("rotation").classList.remove('hide');
        counter++;
        if (counter >= subHeaderArr.length) {
            counter = 0;
        }
    }, 750);
}