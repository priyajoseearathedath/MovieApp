var express=require('express');
var calculator=require('../example');
var router=express.Router();
router.get('/add/:parameter1/:parameter2',function(req,res)
{
res.send("addition of two numbers:"+calculator.addition(parseInt(req.param('parameter1')),parseInt(req.param('parameter2'))));
});
router.get('/sub/:parameter1/:parameter2',function(req,res)
{
res.send("Substraction of two numbers:"+calculator.subtraction(parseInt(req.param('parameter1')),parseInt(req.param('parameter2'))));
});
router.get('/multi/:parameter1/:parameter2',function(req,res)
{
res.send("Multiplication of two numbers:"+calculator.multiplication(parseInt(req.param('parameter1')),parseInt(req.param('parameter2'))));
});
router.get('/divide/:parameter1/:parameter2',function(req,res)
{
res.send("Division of two numbers:"+calculator.division(parseInt(req.param('parameter1')),parseInt(req.param('parameter2'))));
});
module.exports=router;
