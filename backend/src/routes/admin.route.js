const router = require('express').Router();
const {
    adminLogin,
    adminBlockSeller,
    adminBlockUser,
    adminRemoveReview,
    adminRemoveProduct,
} = require('../controllers/admin.contoller');


router.route('/').post(adminLogin);
router.route('/blockseller').get(adminBlockSeller);
router.route('/blockuser').get(adminBlockUser);
router.route('/removereview').get(adminRemoveReview);
router.route('/removeproduct').get(adminRemoveProduct);


module.exports = router;