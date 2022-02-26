// const Post = require('../models/post');

// module.exports.create = function(req, res){
//     // console.log(req.user.id,'123')
//     // console.log(req.body)
//     // let uid = req.user.id.split(' ');
//     // console.log(uid)
//     Post.create({
//         content: req.body.content,
//         user: req.user._id
//     }, function(err, posts){
//         if(err){
//             console.log('error in creating a post'); return;
//         }

//         return res.redirect('back');
    
//     });
// }

const Post=require("../models/post");
module.exports.create= function(req,res){
    Post.create({
        content: req.body.content,
        user: req.user._id 
    },function(err,post){
        if(err){console.log("error creating an post"); return;}
        return res.redirect('back');
    });
}