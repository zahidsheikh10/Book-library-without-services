let Books = require('../../models/books');
const express = require('express');


function bookController(nav) {
    function getIndex(req, res){
        Books.find()
            .then(Books => res.render(
                'bookListView',
                {
                    nav,
                    title: 'Library',
                    books: Books
                }
            ))
            .catch(error => res.status(400).json('Error:' + error))
    }
   async function getById(req, res){ 
        Books.findById(req.params.id)
            .then(book => res.render(
                'bookView',
                {
                    nav,
                    title: 'Library',
                    book: book
                })
            )
            .catch(error => res.status(400).json('Error:' + error))
    }
    function middleWare(req, res, next) {
        if (req.user) {
            next();
        } else {
            res.redirect('/');
        }
    }
    
    return{
        getIndex,
        getById,
        middleWare
    }
}
module.exports = bookController;