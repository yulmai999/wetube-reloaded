export const tranding = (req, res) => res.render("home");
export const see = (req, res) => {
  return res.render("watch");
};
export const edit = (req, res) => res.send("Edit");

export const upload = (req, res) => res.send("upload");

export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send("delete");
};
