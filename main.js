// select empty DIV in html
var quoteContainer = document.getElementById('quote-list');
// Create a variable
var btnSearch = document.getElementById('btn-search');
// Add click event
btnSearch.addEventListener('click', function () { // Anonymous function
    // Create a variable
    var ourRequest = new XMLHttpRequest();
    // Reveive - GET, Send - POST
    ourRequest.open('GET', 'quotes.json');
    // What happen once you load the data
    // Ajax code below
    ourRequest.onload = function () { // Anonymous function
        //    console.log(ourRequest.responseText);
        // Create a variable, now we have all the data in ourData
        var ourData = JSON.parse(ourRequest.responseText);
        //    console.log(ourData); // All data 
        // Add html to the page
        renderHTML(ourData);

    };
    // Actually send this request
    ourRequest.send();
});

var btnReset = document.getElementById('btn-reset');

btnReset.addEventListener('click', function () {
    document.querySelector('#quote-list').style.display = 'none';
}); // ??? => If reclicnk 'Search', show all data again. I could use 'toggel' show & hide! 

function renderHTML(data) {
    // create a variable
    var htmlString = '';


    for (i = 0; i < data.length; i++) {
        htmlString += '<p>' + data[i].quote + '<br/>' + '- ' + data[i].author + ' -' + '</p>';


        for (i = 0; i < data.length; i++) {
            htmlString += '<p>' + data[i].quote + ' ' + data[i].author + '</p>';
        }
        // target the empty div 'animal-info'
        quoteContainer.insertAdjacentHTML('beforeend', htmlString);
    }