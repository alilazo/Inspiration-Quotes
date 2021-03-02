let quotes = ['Don\'t worry about what anybody else is going to do. The best way to predict the future is to invent it. -- Alan Kay',
'Premature optimization is the root of all evil (or at least most of it) in programming. -- Donald Knuth',
'Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great. -- Mark Twain',
'No problem should ever have to be solved twice. -- Eric S. Raymond, How to become a hacker',
'Attitude is no substitute for competence. -- Eric S. Raymond, How to become a hacker',
'It is said that the real winner is the one who lives in today but able to see tomorrow. -- Juan Meng, Reviewing "The future of ideas" by Lawrence Lessig',
'Fools ignore complexity. Pragmatists suffer it. Some can avoid it. Geniuses remove it. -- Alan J. Perlis (Epigrams in programming)',
'A year spent in artificial intelligence is enough to make one believe in God. -- Alan J. Perlis (Epigrams in programming)',
'Dealing with failure is easy: Work hard to improve. Success is also easy to handle: You\'ve solved the wrong problem. Work hard to improve. -- Alan J. Perlis (Epigrams in programming)',
'You think you know when you learn, are more sure when you can write, even more when you can teach, but certain when you can program. -- Alan J. Perlis (Epigrams in programming)',
'Computer science education cannot make anybody an expert programmer any more than studying brushes and pigment can make somebody an expert painter. -- Eric Raymond',
'And if you go too far up, abstraction-wise, you run out of oxygen. Sometimes smart thinkers just don\'t know when to stop, and they create these absurd, all-encompassing, high-level pictures of the universe that are all good and fine, but don\'t actually mean anything at all. -- Joel Spolsky	',
'A language that doesn\'t affect the way you think about programming, is not worth knowing. -- Alan Perlis',
'If we wish to count lines of code, we should not regard them as *lines produced* but as *lines spent*. -- Edsger Dijkstra	',
'Lisp is worth learning for the profound enlightenment experience you will have when you finally get it; that experience will make you a better programmer for the rest of your days, even if you never actually use Lisp itself a lot. -- Eric S. Raymond'];

$('#errorMessage').css("visibility", "hidden");
$(document).ready(function () {
    newQuote();
    console.log("Made By: Amado Lazo");
    $('#newQuoteButton').click(function () {
        boxCard = $('#boxCard'); 
        newQuote();
    });
});

const newQuote = () => {
    let quote = quotes[Math.floor(Math.random()*quotes.length)];
    let splittingQuote = quote.split('--');
    var authorName = splittingQuote[1];
    var quoteWords = splittingQuote[0];
    document.getElementById("quote").innerHTML = quoteWords+"</br><div style=\"color:#95afc0; font-style: italic;\">" + "-- "+authorName+"</div>";

};

