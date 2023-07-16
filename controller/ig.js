const dotenv = require("dotenv");
dotenv.config();

const scopes = ["instagram_basic"];

exports.getAuthUrl = (req, res, next) => {
  try {
    const client_id = process.env.APP_ID;
    const extras = `{"setup":{"channel":"IG_API_ONBOARDING"}}`;
    const redirect_uri = process.env.META_REDIRECT_URL;
    const scope = scopes.join(",");

    const loginUrl = `https://www.facebook.com/dialog/oauth?client_id=${client_id}&display=page&extras=${encodeURIComponent(
      extras
    )}&redirect_uri=${encodeURIComponent(
      redirect_uri
    )}&response_type=token&scope=${scope}`;

    res.status(200).json({
      status: true,
      msg: "",
      data: loginUrl,
    });
  } catch (err) {
    console.error(err);
    res.status(501).json({
      status: false,
      msg: "Error",
    });
  }
};
