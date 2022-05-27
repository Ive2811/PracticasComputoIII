const req = require("express/lib/request");

const express = require('express');
var router = express.Router();

//Llamado al modelo.
const Brand = require ("../models/brand");
const { route } = require(".");


router.get('/', (req,res) => {
res.render('pages/brand/brandAddEdit',{
    viewTitle: 'Nueva marca'
});
})
router.post('/', (req,res) => {
    if(req.body._id == '')
    saveBrand(req,res);
    else
    updateBrand(req,res);
});

function saveBrand(req,res){
    var brand = new Brand();
    brand.name = req.body.name;
    brand.description = req.body.description;
    brand.save(e => {
        if(e)
        console.log("Error", e)
        else
        res.redirect('brand/brandList');
    });
}

function updateBrand(req, res){
    Brand.findOneAndUpdate({_id: req.body._id},
    req.body, {new:true}, (err, doc) => {
        if (!err){
            res.redirect('brand/brandList');
        }else{
            console.log("Error", err);
        }
    });
}

router.get('/brandList',(req, res) => {
    Brand.find((err, docs)=>{
        if (!err){
            res.render('pages/brand/brandList', {
                viewTitle: "Listado de marcas",
                list: docs
            });
        }else {
            console.log("Error", err);
        }
    });
});

router.get('/:id', (req,res) => {
    Brand.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render('pages/brand/brandAddEdit', {
                viewTitle: "Actualizar Marca",
                brand: doc
            })
        }
    });
});

router.get('/delete/:id', (req,res) => {
    Brand.findByIdAndRemove(req.params.id, e=> {
        if(e)
        console.log("Error", e);
        else
        res.redirect('/brand/brandList');
    });
});

module.exports = router;