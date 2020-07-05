const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("../models/User");
const SECRET = process.env.SECRET;

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = SECRET;

module.exports = passport => {
   passport.use(
      new JwtStrategy(opts, (jwt_payload, done) => {
          console.log("hello");
          console.log(jwt_payload.id);
         User.findOne({ _id: jwt_payload.id })
            .then(user => {
               if (user) {
                   console.log("hello1");
                  return done(null, user);
               } else {
                   console.log("hello2");
                  return done(null, false);
               }
            })
            .catch(err =>
               console.log({ error: "Error authenticating the user" })
            );
      })
   );
};