const Table = require('../model/model')
const bcrypt = require('bcrypt');
const { findByIdAndDelete } = require('../model/model');
const controller = {
    getInfo: async function (req, res) {
        try {
            const data = await Table.find()
            res.render('index', { data })
        } catch (error) {
            console.log(error.message);
        }
    },
    getOneInfo: async function( req,res ){
        try {
            const data = await Table.findById(req.body.id)
            res.render('oneInfo', {data})
        } catch (error) {
            console.log(error.message);
        }
    },
    addInfo: async function (req, res) {
        try {
            await Table.create({
                name: req.body.name,
                age: req.body.age,
                email: req.body.email,
                password: req.body.password
            })
            res.redirect('/')
        } catch (error) {
            console.log(error.message);
        }
    },
    edit: async function(req,res){
        const data = await Table.find({})
        const filtered = data.filter(el => el.id == req.params.id)
        res.render('edit', {filtered})
    },
    editInfo: async function (req, res) {
        try {
            await Table.findByIdAndUpdate(req.params.id, {
                name: req.body.name,
                age: req.body.age,
                email: req.body.email,
                password: req.body.password,
            })
            res.redirect('/')
        } catch (error) {
            console.log(error.message);
        }
    },
    delInfo: async function(req,res){
        try {
            await Table.findByIdAndDelete(req.params.id)
            res.redirect('/')
        } catch (error) {
            console.log(error.message);
        }
    }
}
module.exports = controller;