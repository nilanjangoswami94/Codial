const Post = require('../models/post');
const User = require('../models/user');
module.exports.home = function(req, res){
    // console.log(req.cookies);
    // res.cookie('user_id', 25);

    // Post.find({}, function(err, posts){
    //     return res.render('home',{
    //         title: "Codial | Home", 
    //         posts: posts
    //     });
    // })

    //populate the user of each post
    
    let posts = Post.find({})
    
    .populate('user')
    .populate({
        path: 'comments',
        populate: [{
            path: 'user'
        }]
    })
    
        return res.render('home',{
            title: "Codial | Home", 
            posts: posts
        });
    console.log('***', posts);
}

// module.exports.actionName = function(req,res){}