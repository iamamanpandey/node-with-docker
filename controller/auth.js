const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

exports.login = (req, res) => {
  const { name, password } = req.body;
  if (password == 1234) {
    
    //generate token and send to client react
    const token = jwt.sign({ name }, "Super_Secret", { expiresIn: "1d" });
    return res.json({ token, name });
  } else {
    return res.status(400).json({
      error: "incorrect Password",
    });
  }
};
