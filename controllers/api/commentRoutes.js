const router = require('express').Router();
const { Recipe, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');
let recipes = []

//GET all comments
router.get('/comments', async (req, res) => {
    console.log("get comments is running!");
    try {
        const recipeData = await Comment.findAll();
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET a single recipe

router.get('/comments/:id', async (req, res) => {
    try {
        const commentData = await Comment.findByPk(req.params.id);
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});


// CREATE a comment
router.post('/comments', async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
            recipe_id: req.params.id,
        });

        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});


//DELETE a comment
router.delete('/comments/:id', async (req, res) => {
    try {
        const commentData = await Comment.destroy({
            where: {
                id: req.params.id,
                recipe_id: req.params.id,
            },
        });

        if (!commentData) {
            res.status(404).json({ message: 'No comment found with this id!' });
            return;
        }

        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});
