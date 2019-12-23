export const getAirPollution = async (req, res) => {
  const { lat, lng } = req.body;

  return res.json({
    message: "hehe"
  });
};
