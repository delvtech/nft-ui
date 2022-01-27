import { NextApiHandler } from "next";

const collection: NextApiHandler = (req, res) => {
  res.status(200).json([
    {
      image: "/assets/png/Collection/7.png",
    },
    {
      image: "/assets/png/Collection/13.png",
    },
    {
      image: "/assets/png/Collection/11.png",
    },
    {
      image: "/assets/png/Collection/10.png",
    },
    {
      image: "/assets/png/Collection/12.png",
    },
    {
      image: "/assets/png/Collection/01.png",
    },
  ]);
};

export default collection;
