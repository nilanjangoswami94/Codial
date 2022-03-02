{
    // method to submit the form data for new post using AJAX
    let createPost = function(){
        let newPostForm = $('#new-post-form');

        newPostForm.submit(function(e){
            e.preventDefault();

            $.ajax({
                type: 'post',
                url: '/posts/create',
                data: newPostFrom.serialize(),
                success: function(data){
                    console.log(data);
                }, error: function(err){
                    console.log(error.responseText);
                }
            })
        })
    }

    //method to create a post in DOM
    let newPostDom = function(post){
        return $(`<li id="post-<%= post._id %>">
                    <p>
                        <% if (locals.user && locals.user.id == post.user.id) { %>
                        <small>
                            <a class="delete-post-button" href="/posts/destroy/<%= post.id %>">X</a>
                        </small>
                        <% } %>
                        <%= post.content %>
                        <br>
                        <small>
                            <%= post.user.name %>
                        </small>
                    </p>
                    
                    <div class = "post-comments">
                        <% if (locals.user) { %>
                                <form action="/comments/create" method="POST">
                                    <input type="text" name="content" placeholder="Type here to add comment...">
                                    <input type="hidden" name="post" value="<%= post._id %>">
                                    <input type="submit" value="Add Comment">
                                </form>
                        <% } %>
                
                        <div class="post-comments-list">
                            <ul id="post-comments-<%= post._id %>">
                                <% for (comment of post.comments) { %>
                
                                    <%- include('_comment') -%>
                                    
                                <% } %>
                            </ul>
                        </div>
                    </div>
                </li>`)
                }

    createPost();
}