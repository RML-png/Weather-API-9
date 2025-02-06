import { Router } from 'express';
const router = Router();

import weatherRoutes from './weatherRoutes.js';
localhost:3001/api/weatherRoutes
router.use('/weather', weatherRoutes);

export default router;
