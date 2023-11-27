$(document).ready(function() {
    $('#dad-joke-form').submit(function(e) {
        e.preventDefault();
        // uses the user input for the limit letiable
        let limit = $('#limit').val();
        getDadJokes(limit);
        });

    // calls API Ninja /v1/dadjokes API
    function getDadJokes(limit) {
        $.ajax({
            method: 'GET',
            url: 'https://api.api-ninjas.com/v1/dadjokes?limit=' + limit,
            headers: { 'X-Api-Key': '2a/z3IuOVPvSGFRHDUYL4w==77I2wVRiNzErRsqq' },
            contentType: 'application/json',
            success: function (result) {
                displayJokes(result);
            },
            error: function ajaxError(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
            }
        });
    }

    // depending on the limit loops through the jokes and appends the output to the <p> tag of id dadJoke
    function displayJokes(jokes) {
        let jokeContainer = $('#dadJoke');
        jokeContainer.empty();
        for (let i = 0; i < jokes.length; i++) {
            jokeContainer.append('<p>' + jokes[i].joke + '</p>');
        }
    }
    }

)