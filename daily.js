var d = new Date();

var n = d.getDate(),
m = d.getMonth()+ 1,
y = d.getFullYear(),
diff = (y - 1985)%30;

y = 1985 + diff;

if(n<10) n = '0' + n;
if(m<10) m = '0' + m;

var date = y+''+m+''+n;

function getImageSource() {
    var url = "http://marcel-oehler.marcellosendos.ch/comics/ch/"
    url = url + '' + y + '/' + m + '/' + date + '.gif';
    document.getElementById('comicImage').src = url;
    document.getElementById('facebookShare').href = 
    "http://www.facebook.com/sharer/sharer.php?u=" + url;
    document.getElementById('twitterShare').href =
    href="https://twitter.com/intent/tweet?url=" + url + 
    "&amp;text=Calvin%20and%20Hobbes&amp;via=daily_extension";
}

function getDateHeading() {
    document.getElementById('comicTitle').innerHTML = "Calvin and Hobbes by Bill Watterson "+n+'-'+m+'-'+y;
}

document.addEventListener('DOMContentLoaded', function() {
    getImageSource();
    getDateHeading();
});