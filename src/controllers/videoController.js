const fakeUser = {
  username: "Nicolas",
  loggedIn: true,
};

export const tranding = (req, res) => {
  const videos = [
    {
      title: "Hello",
    },
    {
      title: "Video #2",
    },
    {
      title: "Whatsup",
    },
  ];
  return res.render("home", { pageTitle: "Home", videos });
};
export const see = (req, res) => {
  return res.render("watch");
};
export const edit = (req, res) => res.send("Edit");

export const upload = (req, res) => res.send("upload");

export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send("delete");
};
