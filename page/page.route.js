import express from 'express';
import {
  create,
  changeContent,
  update,
  deletePage,
  list,
  details,
} from './page.controller.js';

const pageRouter = express.Router();

pageRouter.post('/', create);
pageRouter.post('/:pageId/content', changeContent);

pageRouter.put('/:pageId', update);
pageRouter.delete('/:pageId', deletePage);

pageRouter.get('/', list);
pageRouter.get('/:pageId', details);

export default pageRouter;
