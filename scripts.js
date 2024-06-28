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
}