import { Router } from "express";
import * as pageDrumsController  from '../controllers/pageDrumsController';
import * as SearchController from '../controllers/searchController';

const router = Router();

router.get('/', pageDrumsController.home)
router.get('/acoustic', pageDrumsController.acoustic)
router.get('/pearl', pageDrumsController.pearl)
router.get('/sonor', pageDrumsController.sonor)
router.get('/mapex', pageDrumsController.mapex)
router.get('/eletronic', pageDrumsController.eletronic)
router.get('/alesis', pageDrumsController.alesis)
router.get('/rolland', pageDrumsController.rolland)
router.get('/yamaha', pageDrumsController.yamaha)
router.get('/search', SearchController.search);

export default router
