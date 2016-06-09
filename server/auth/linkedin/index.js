'use strict';

import express from 'express';
import passport from 'passport';
import {
  setTokenCookie
} from '../auth.service';

var router = express.Router();

router
  .get('/', passport.authenticate('linkedin', {
    failureRedirect: '/',
    scope: [
      'r_basicprofile',
      'r_emailaddress'
    ],
    session: false
  }))
  .get('/callback', passport.authenticate('linkedin', {
    failureRedirect: '/',
    session: false
  }), setTokenCookie);

export default router;
