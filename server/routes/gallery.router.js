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



//original PUT Route below

// router.put('/like/:id', (req, res) => {
//     console.log(req.params);
//     const galleryId = req.params.id;
//     for(const galleryItem of galleryItems) {
//         if(galleryItem.id == galleryId) {
//             galleryItem.likes += 1;
//         }
//     }
//     res.sendStatus(200);
// }); // END PUT Route

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

module.exports = router;