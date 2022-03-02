const Post = require('../models/post');
const Comment = require('../models/comment');


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


module.exports.create= async function(req,res){
    try{
        await Post.create({
            content: req.body.content,
            user: req.user._id 
        // },function(err, post){
        //     if(err){console.log("error creating an post"); return;}
        //     return res.redirect('back');
        });
    
        return res.redirect('back');

    }catch(err){
        colsole.log('Error', err);
    }
    
}

module.exports.destroy = async function(req, res){
    try{
        let post = await Post.findById(req.params.id);

        if (post.user == req.user.id){
            post.remove();


            await Comment.deleteMany({post: req.params.id});
            return res.redirect('back');
        }else{
            return res.redirect('back');
        }

    }catch(err){
        console.log('Error', err);
    }

    // Post.findById(req.params.id, function(err, post){
    //     // .id means converting the object id into string
    //     if (post.user == req.user.id){
    //         post.remove();


    //         Comment.deleteMany({post: req.params.id}, function(err){
    //             return res.redirect('/');
    //         });
    //     }else{
    //         return res.redirect('/');
    //     }
    // });
}