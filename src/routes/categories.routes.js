import { Router } from "express";

const router = Router();

router.get('/categories', (req, res) => {
    res.send('Product categories');
})

export default router;