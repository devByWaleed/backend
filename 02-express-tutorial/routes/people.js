const express = require('express')
const router = express.Router()

const { 
    getPeople,
    postPeople,
    postPeoplePostman,
    updatePeople,
    deletePeople
} = require('../controller/people')


// Another flavour
/*
router.route('/').get(getPeople).post(postPeople)
router.route('/').post(postPeoplePostman)
router.route('/').put(updatePeople).delete(deletePeople)
*/

router.get('/', getPeople);
router.post('/', postPeople);
router.post('/postman', postPeoplePostman)
router.put('/:id', updatePeople)
router.delete('/:id', deletePeople)


module.exports = router;