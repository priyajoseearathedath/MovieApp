var express=require('express');
var router=express.Router();
var requestify=require('requestify');

const url=require('url');
router.get('/',function(req,res)
                {
                    res.send("movie desc");
                    console.log(arr);
                  });
router.post('/m',function(req,res,next)
{
  var name=req.body.name;
  var arr=[];
  requestify.get("http://www.omdbapi.com/?t="+name+"&y=&plot=short&r=json").then(function(response)
  {
    arr.push(response.body);
    res.send(arr);
  });
	});
//  router.put('/update',functio//
module.exports=router;
