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
        res.redirect('/instagram/user')
       
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
router.get('/instagram/user',async (req,res)=>{
    //trabajar con endpoints
    const profileData= await instagram.get('users/self');
    const media= await instagram.get('users/self/media/recent');

    let id = profileData.data.id;
    let username = profileData.data.username;
    let followers = profileData.data.counts.followed_by;
    let post = profileData.data.counts.media;
    let fullname= profileData.data.full_name;

    res.json({
            ok:true,
            id,
            username,
            followers,
            post,
            fullname
    });

});

//post
router.get('/instagram/post',async (req,res)=>{

    //Parametros opcionales

    let desde = req.query.desde || 0;
    desde = Number(desde);

    let limite = req.query.limite || 5;
    limite =Number(limite);

    //trabajar con endpoints
    const profileData= await instagram.get('users/self');
    const media= await instagram.get('users/self/media/recent');

    //número de seguidores
    let followers = profileData.data.counts.followed_by;
    //id del usuario 
    let user = profileData.data.id;
    let suma =0;
    let media_= media.data;


    var data= [];
    for(let i=0; i<media_.length;i++){
        
        let id = media_[i].id;
        let user= media_[i].user.id;
        let likes = media_[i].likes.count;
        var eficiencia = (likes / followers) * 100;
        data.push({eficiencia,id,likes,user});

        var info_ = data.map(person => ({id:person.id, user:person.user, likes:person.likes, eficiencia:person.eficiencia}));
        var info = info_.slice(15,20);
    
    }

    return res.json(
        info
    );

});


module.exports=router
