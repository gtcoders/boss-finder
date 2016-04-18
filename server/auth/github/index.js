'use strict';

import express from 'express';
import passport from 'passport';
import {
  setTokenCookie
} from '../auth.service';

var router = express.Router();

router
  .get('/', passport.authenticate('github', {
    failureRedirect: '/signup',
    scope: [
      'user:email',
      'public_repo'
    ],
    session: false
  }))
  .get('/callback', passport.authenticate('github', {
    failureRedirect: '/signup',
    session: false
  }), setTokenCookie);

export default router;
