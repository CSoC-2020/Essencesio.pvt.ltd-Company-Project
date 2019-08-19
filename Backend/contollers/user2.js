const JWT = require('jsonwebtoken');
const User = require('../Model/User');
const { JWT_SECRET } = require('../configurations/index');

signToken = user => {
  return JWT.sign({
    iss: 'CodeWorkr',
    sub: user.id,
    iat: new Date().getTime(),
    exp: new Date().setDate(new Date().getDate() + 1)
  }, JWT_SECRET);
}

module.exports = {
  signUp: async (req, res, next) => {
    const { name, email, password } = req.value.body;


    let foundUser = await User.findOne({ "local.email": email });
    if (foundUser) {
      return res.status(403).json({ error: 'Email is already in use'});
    }

    foundUser = await User.findOne({
      $or: [
        { "google.email": email },
        { "facebook.email": email },
      ]
    });
    if (foundUser) {

      foundUser.methods.push('local')
      foundUser.local = {

        name: name,
        email: email,
        password: password
      }

      await foundUser.save()
      const token = signToken(foundUser);

      res.cookie('access_token', token, {
        httpOnly: true
      });
      res.status(200).json({ success: true });
    }


    // New user
    const newUser = new User({
      methods: ['local'],
      local: {
        name: name,
        email: email,
        password: password
      }
    });
    console.log('new');
    await newUser.save();

    // Generate the token
    const token = signToken(newUser);
    // Send a cookie containing JWT
    res.cookie('access_token', token, {
      httpOnly: true
    });
    res.status(200).json({ success: true });
  },

  signIn: async (req, res, next) => {
    // Generate token
    const token = signToken(req.user);
    res.cookie('access_token', token, {
      httpOnly: true
    });
    res.status(200).json({ success: true });
  },

  signOut: async (req, res, next) => {
    res.clearCookie('access_token');

    res.json({ success: true });
  },

  googleOAuth: async (req, res, next) => {

    const token = signToken(req.user);
    res.cookie('access_token', token, {
      httpOnly: true
    });
    res.status(200).json({ success: true });
  },

  linkGoogle: async (req, res, next) => {
    res.json({
      success: true,
      methods: req.user.methods,
      message: 'Successfully linked account with Google'
    });
  },

  unlinkGoogle: async (req, res, next) => {

    if (req.user.google) {
      req.user.google = undefined
    }

    const googleStrPos = req.user.methods.indexOf('google')
    if (googleStrPos >= 0) {
      req.user.methods.splice(googleStrPos, 1)
    }
    await req.user.save()


    res.json({
      success: true,
      methods: req.user.methods,
      message: 'Successfully unlinked account from Google'
    });
  },

  facebookOAuth: async (req, res, next) => {

    const token = signToken(req.user);
    res.cookie('access_token', token, {
      httpOnly: true
    });
    res.status(200).json({ success: true });
  },

  linkFacebook: async (req, res, next) => {
    res.json({
      success: true,
      methods: req.user.methods,
      message: 'Successfully linked account with Facebook'
    });
  },

  unlinkFacebook: async (req, res, next) => {

    if (req.user.facebook) {
      req.user.facebook = undefined
    }

    const facebookStrPos = req.user.methods.indexOf('facebook')
    if (facebookStrPos >= 0) {
      req.user.methods.splice(facebookStrPos, 1)
    }
    await req.user.save()


    res.json({
      success: true,
      methods: req.user.methods,
      message: 'Successfully unlinked account from Facebook'
    });
  },

  dashboard: async (req, res, next) => {
    console.log('I managed to get here!');
    res.json({
      secret: "resource",
      methods: req.user.methods
    });
  },

  checkAuth: async (req, res, next) => {
    console.log('I managed to get here!');
    res.json({ success: true });
  }
}
