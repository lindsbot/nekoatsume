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
        .done(function(data){ /* the done function runs when the data comes back from reddit */
            
            // this function is called a 'callback'
            // the done function calls this function with the data it gets
        
            // let's look at our data
            console.log("here's our data:")
            console.log(data)
            
            // wow, that's a crazy object
            // if we open it up, we can see it has a property called 'children'
            // 
            
        })
    }
        
        
        
    
    
    
    
    
    
    fetchSubredditPosts();
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
});
