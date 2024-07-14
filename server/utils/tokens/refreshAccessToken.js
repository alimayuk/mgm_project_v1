import UserModel from "../../models/User.js";
import UserRefreshTokenModel from "../../models/UserRefreshToken.js";
import generateTokens from "./generateTokens.js";
import verifyRefreshToken from "./verifyRefreshToken.js";

const refreshAccessToken = async (req, res) => {
  try {
    const oldRefreshToken = req.cookies.refreshToken;

    const { tokenDetails, error } = await verifyRefreshToken(oldRefreshToken)

    if (error) {
      return res.status(401).send({
        status: "failed",
        message: "Geçersiz token",
      });
    }

    const user = await UserModel.findById(tokenDetails._id);
    if (!user) {
      return res.status(404).send({
        status: "failed",
        message: "Kullanıcı bulunamadı.",
      });
    }

    const userRefreshToken = await UserRefreshTokenModel.findOne({
      userId: tokenDetails._id,
    });
    if (oldRefreshToken !== userRefreshToken.token || userRefreshToken.blacklisted){
      return res.status(401).send({
        status: "failed",
        message: "Yetki yetersiz",
      });
    }

    const { accessToken, refreshToken, accessTokenExp, refreshTokenExp } = await generateTokens(user);
    return {
        newAccessToken: accessToken,
        newRefreshToken: refreshToken,
        newAccessTokenExp: accessTokenExp,
        newRefreshTokenExp: refreshTokenExp
      };
  } catch (error) {
    res.status(500).send({ status: "failed", message: "refresh access token error" });
  }
};

export default refreshAccessToken;
