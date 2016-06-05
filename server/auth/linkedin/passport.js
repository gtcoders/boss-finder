import passport from 'passport';
import {
  Strategy as LinkedinStrategy
} from 'passport-linkedin-oauth2';

export function setup(User, config) {
  passport.use(new LinkedinStrategy({
      clientID: config.linkedin.clientID,
      clientSecret: config.linkedin.clientSecret,
      callbackURL: config.linkedin.callbackURL,
      state: true
    },
    function(accessToken, refreshToken, profile, done) {
      User.findOne({
          'linkedin.id': profile.id
        }).exec()
        .then(user => {
          if(user) {
            return done(null, user);
          }

          user = new User({
            name: profile.displayName,
            email: profile.emails[0].value,
            role: 'user',
            username: profile.emails[0].value.split('@')[0],
            provider: 'linkedin',
            linkedin: profile._json
          });
          user.save()
            .then(user => done(null, user))
            .catch(err => done(err));
        })
        .catch(err => done(err));
    }));
}
