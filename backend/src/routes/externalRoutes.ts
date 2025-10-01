import { Router } from 'express';
import * as numberController from '../api/external/public/number/controller';

const router = Router();

// Public routes
router.get('/numbers', numberController.listHandler);
router.get('/numbers/:id', numberController.getHandler);

export default router;
