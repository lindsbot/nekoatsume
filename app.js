// we'll use this later
function renderRedditPosts(redditPosts){
    $.each(redditPosts, function(index, post){
        $('.reddit-posts').append(
            '<div class="reddit-post">' + 
                '<div class="score">' + post.data.score + '</div>' +
                '<a href="' + post.data.url +'" target="_blank">' +
                    '<div>' + post.data.title + '</div>' + 
                '</a>' +
                '<div> ~' + post.data.author + '</div>' + 
            '</div>'
        );
    });
}
    
// we'll use this later
function renderPhotos(redditPosts){
    $.each(redditPosts, function(index, post) {
        if (post.data.post_hint === 'image' || post.data.post_hint === 'link') {
            $('.photos').append(
                '<div class="reddit-image">' +
                    '<img src="' + post.data.preview.images[0].source.url + '"/>' +
                '</div>'
            );
        }
    })
}


// let's start our app with a $( document ).ready() block.
// https://learn.jquery.com/using-jquery-core/document-ready/

$( document ).ready(function() {
    // all our code will go inside this block, because now the document is ready for us
    
    // console.log will output to your javascript console
    // it's a helpful tool for checking in with your code
    // open the js console by pressing option + command + j on your site
    console.log( "ready!" );
    
    // let's define a function that will get some data from reddit
    function fetchSubredditPosts() {
        // we'll use the jQuery $.ajax() function to get posts from the subreddit
        // https://api.jquery.com/jquery.ajax/
        $.ajax('https://www.reddit.com/r/nekoatsume.json', {
            method: 'GET'
        })
        .done(function(response){ /* the done function runs when the response comes back from reddit */
            
            // this function is called a 'callback'
            // the done function calls this function with the response it gets
        
            // let's look at our data
            console.log("here's our response:");
            console.log(response);
            
            // if we open it up, we can see it has a property called 'data'
            // that sounds important
            // let's look at it
            console.log("here is the data:");
            console.log(response.data);
            
            // the children property contains our reddit posts
            // let's look at it
            console.log("here is the children array of the data object: ");
            console.log(response.data.children);
            console.log(" ^^^^^ those are our reddit posts! :D ");
            
            
            // now we can render our data on the screen!
            renderRedditPosts(response.data.children);
            renderPhotos(response.data.children);
        });
    }
        
    // now we can CALL the function we just defined
    fetchSubredditPosts();
    
});
