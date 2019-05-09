const upName = (req, res, next) => {
  const name = req.body.name;
  console.log("name", name);
  const upperName = name.toUpperCase();
  if (name === upperName) {
    next();
  } else {
    res.status(404).json({ message: "Name needs to be capatilized!" });
  }
};
module.exports = upName;
