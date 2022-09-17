const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');//changed this to link to DB

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route

router.put('/like/:id', (req, res) => {
    const galleryID = req.params.id;
    let currentLikes = (req.body.likes);
  
    
    currentLikes += 1;
    
    const sqlQuery =`
    UPDATE "react_gallery"
    SET "likes" = ${currentLikes}
    WHERE "id" = $1;
    `;
    
    const sqlValues = [galleryID]

pool.query(sqlQuery, sqlValues)
    .then((dbRes) => {
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('something broke in PUT route', error);
    })
})



// GET Route
router.get('/', (req, res) => {
    let queryText = `
    SELECT * FROM "react_gallery"
    ORDER BY "id"
    `;

pool.query(queryText)
    .then(result => {
        res.send(result.rows)
    })    
    .catch(error => {
        console.log('error in get route from DB', error);
    })
}); // END GET Route

router.post('/', (req, res)=> {
    // console.log(req.body)
    let path = req.body.path;
    let description = req.body.description;
   
    const sqlQuery = `
        INSERT INTO "react_gallery" (path, description)
            VALUES ($1, $2)
        `

    const sqlValues = [path, description];
    pool.query(sqlQuery,sqlValues)
        .then((response)=> {
            console.log('image has been posted')
            res.sendStatus(200);
        })
        .catch((error)=> {
            res.sendStatus(500);
            console.log('error in POST /items', error);
        })
})


module.exports = router;