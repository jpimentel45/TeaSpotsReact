const express = require('express');
const router = express.Router();

//Item Model
const Special = require('../../models/DailySpecial');

//@route GET api/special
//@desc GET Daily Special
//@access Public

router.get('/', (req, res)=>{
 Special.find()
 .sort({date: -1})
 .then(special => res.json(special))
})

//@route Post api/special
//@desc  CREATE Post Daily Special
//@access Public

router.post('/', (req, res) => {
const newSpecial = new Special({name: req.body.name});

    newSpecial.save().then(special => res.json(special))
})

router.delete('/:id', (req, res) => {
    Special.findById(req.params.id)
    .then(special => special.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({ success: false }))
})


module.exports = router;