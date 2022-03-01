const User = require('../models/user')

module.exports.profile = function(req, res){
    // res.end('<h1>User Profile</h1>');
    // return res.render('user_profile', {
    //     title:  'Profile',
    //     profile: 'Profile Page'
    // });

    // console.log('#####',req.user);
    if (req.cookies.user_id){
        User.findById(req.user.id, function(err, user){
            if(err){
                console.log('error is showing', err); 
                return;
            }
            if (user){
                return res.render('user_profile', {
                    title: "User profile",
                    profile_user: user
                });
            }
            return res.redirect('/users/sign-in');
        });
    }else{
        return res.redirect('/users/sign-in');
    }
}


module.exports.update = function(req, res){
    if(req.user.id == req.params.id){
        User.findByIdAndUpdate(req.params.id, req.body, function(err, user){
            if(err){
                console.log("error in update", err);
            }
            return res.redirect('back');
        });
    }else{
        return res.status(401).send('Unauthorized');
    }
}


//render the user sign up page
module.exports.signUp = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render('user_sign_up',{
        title: "Codial | Sign Up"
    });
};


//render the user sign in page
module.exports.signIn = function(req,res){
    if(req.isAuthenticated()){
        console.log('sign in done');

        return res.redirect('/users/profile');
    }
    return res.render('user_sign_in',{
        title: "Codial | Sign In"
    });
};


//get the sign up data
module.exports.create = function(req,res){
    if (req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err, user){
        if(err) {
            console.log('error in finging user in signing up');
            return
        }
        if (!user){
            User.create(req.body, function(err, user){
                if(err){
                    console.log('error in creating user while signing up');
                    return}
                    
                    return res.redirect('/users/sign-in')
            })
        }else{
            return res.redirect('back');
        }
    })
}

module.exports.createSession = function(req, res){
    return res.redirect('/');
};


module.exports.destroySession = function(req,res){

    req.logout();

    return res.redirect('/users/profile');
}
