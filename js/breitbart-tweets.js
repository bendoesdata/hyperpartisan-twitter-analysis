var tweets = [
    ("Oh, Lisa, you and your stories: Bart’s a vampire, beer kills brain cells. Now let’s go back to that … building … thingie … where our beds and TV … is. – Homer Simpson"),
    ("Why do beer companies bother with an expiration date… It is never going to make it anywhere near that. - Unknown"),
    ('<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/BreitbartNews">@BreitbartNews</a> White America will have to start fighting back. The future of our people is at stake. <a href="https://twitter.com/hashtag/antifa?src=hash">#antifa</a> <a href="https://twitter.com/hashtag/WhiteGenocide?src=hash">#WhiteGenocide</a></p>&mdash; Vince Dorn (@DeusVultNS) <a href="https://twitter.com/DeusVultNS/status/822787772314333184">January 21, 2017</a></blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>'),
    ('<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">NOOOOOOOOOOO<br><br>HOW DID THIS HAPPEN<br><br>STREET CRED DEMOLISHED<br><br>WHO MUST WE HARASS TO LOSE THIS <a href="https://t.co/BgBEB5zE6l">pic.twitter.com/BgBEB5zE6l</a></p>&mdash; Breitbart News (@BreitbartNews) <a href="https://twitter.com/BreitbartNews/status/807637418883108864">December 10, 2016</a></blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>')
];

function randomTweet() {
  var length = tweets.length;
  var rand = Math.round(Math.random() * (length - 1));
  document.getElementById("Btweet").innerHTML = tweets[rand];

  setTimeout (randomTweet, 10000);
}

$(function(){

    $('#Btweet').hide();

    setTimeout(function(){
        $('#Btweet').fadeIn('slow');
    },2000);

});
