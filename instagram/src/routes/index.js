const express= require('express')
const router= express.Router()
const Instagram= require('node-instagram').default
const {clientId,clientSecret} =require('../keys').instagram

//modulo
const instagram= new Instagram({
    clientId:clientId,
    clientSecret:clientSecret
})

router.get('/',(req,res)=>{
    res.redirect('/login');
})

const redirectUri='http://localhost:8084/handleauth'
router.get('/auth/instagram',(req,res)=>{
    res.redirect(
        instagram.getAuthorizationUrl(
            redirectUri,{
                scope: ['basic'],
                  state:'your state'
            
             },
        )
    )

});

router.get('/handleauth', async (req,res)=>{
    try {
        // The code from the request, here req.query.code for express
        const code = req.query.code;
        //va a tomar tiempo y luego lo voy a manejar
        const data = await instagram.authorizeUser(code, redirectUri);
        // data.access_token contain the user access_token
        //almacenar el acces_token
        //Aqui se almacena el usuario
        req.session.access_token=data.access_token
        req.session.user_id=data.user.id
        //guardar el acces token
        instagram.config.accessToken =req.session.access_token
        res.redirect('/user')
       
      } catch (err) {
        res.json(err);
      }

})
router.get('/login',(req,res)=>{
    res.redirect('/auth/instagram')

});
router.get('/logout',(req,res)=>{
    delete req.session.access_token
    delete req.session.user_id

    //delete instagram.config.accessToken
    res.redirect('/')
    
})
router.get('/user',async (req,res)=>{
    //trabajar con endpoints
    const profileData= await instagram.get('users/self');
    const media= await instagram.get('users/self/media/recent');

    let id_ = profileData.data.id;
    let username_ = profileData.data.username;
    let followers_ = profileData.data.counts.followed_by;
    let post_ = profileData.data.counts.media;
    let fullname_= profileData.data.full_name;

    let ID= id_.toString();
    let username = username_.toString();
    let followers = followers_.toString();
    let post = post_.toString();
    let fullname = fullname_.toString();

    res.json({
            ID,
            followers,
            fullname,
            post,
            username
            
    });

});

//post
router.get('/posts',async (req,res)=>{

    //Parametros opcionales

    let desde = req.query.desde || 0;
    desde = Number(desde);

    let limite = req.query.limite || 5;
    limite =Number(limite);

    //trabajar con endpoints
    const profileData= await instagram.get('users/self');
    const media= await instagram.get('users/self/media/recent');


    console.log(media.data)
    //número de seguidores
    let followers = profileData.data.counts.followed_by;
    //id del usuario 
    let user = profileData.data.id;
    let suma =0;
    let media_= media.data;



    var data= [];
    for(let i=0; i<media_.length;i++){
        
        let id_ = media_[i].id;
        let ID = id_;
        let user= media_[i].user.username;
        let likes_ = media_[i].likes.count;

        //likes to string
        let likes = likes_.toString();
        var eficiencia_ = (likes_ / followers) * 100;

        var eficiencia = eficiencia_.toFixed(4);
        var date_ = media_[i].created_time;
        
        var a = new Date(date_ * 1000);
        //var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var months = ['1','2','3','4','5','6','7','8','9','10','11','12'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date__ = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        //var time = date__ + '-' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
        var date= year + '-'+month+ '-' + date__ + ' ' + hour+ ':' + min + ':' + sec;
        data.push({eficiencia,ID,likes,user,date});


        var info_ = data.map(person => ({ID:person.ID, user:person.user, likes:person.likes, eficiencia:person.eficiencia,date:person.date}));
        var info = info_.slice(15,20);
    }

   

    return res.json(
        info
    );

});


module.exports=router
