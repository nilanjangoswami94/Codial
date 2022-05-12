const Post = require('../models/post');
const User = require('../models/user');

module.exports.home = async function(req, res){

    try{
        //populate the user of each post
    
        let posts = await Post.find({})
        .sort('-createdAt')
        .populate('user')
        .populate({
            path: 'comments',
            populate: {
                path: 'user'
            },
            populate: {
                path: 'likes'
            }
        }).populate('comments')
        .populate('likes');

    let users = await User.find({})
    
    return res.render('home',{
        title: "Codial | Home", 
        posts: posts,
        all_users: users
        
    });

    }catch(err){
        console.log('Err', err); 
        return;
    }

    // console.log(req.cookies);
    // res.cookie('user_id', 25);

    // Post.find({}, function(err, posts){
    //     return res.render('home',{
    //         title: "Codial | Home", 
    //         posts: posts
    //     });
    // })

    
    // .exec(function(err, posts){
    //     if(err){
    //         console.log('error inside exec', err)
    //     }
        
    //     User.find({}, function(err, users){
    //         return res.render('home',{
    //             title: "Codial | Home", 
    //             posts: posts,
    //             all_users: users

    
}
    

// module.exports.actionName = function(req,res){}

// Post.find({}).populate('comments').then(function());

// let posts = Post.find({}).populate('comments').exec();

// posts.then()