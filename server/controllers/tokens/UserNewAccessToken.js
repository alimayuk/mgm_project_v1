import refreshAccessToken from "../../utils/tokens/refreshAccessToken.js";
import setTokensCookies from "../../utils/tokens/setTokensCookies.js";

class UserNewAccessToken {
  static getNewAccessToken = async (req, res) => {
    try {
      // Get new access token using Refresh Token
      const { newAccessToken, newRefreshToken, newAccessTokenExp, newRefreshTokenExp } = await refreshAccessToken(req, res)

        // Set New Tokens to Cookie
      setTokensCookies(res, newAccessToken, newRefreshToken, newAccessTokenExp, newRefreshTokenExp)

      res.status(200).send({
        status: "success",
        message: "Yeni access token oluşturuldu",
        access_token: newAccessToken,
        refresh_token: newRefreshToken,
        access_token_exp: newAccessTokenExp
      });
    } catch (error) {
        console.error(error);
        res.status(500).json({
        status: "failed",
        message: "Yeni access token oluşturulurken bir hata oluştu",
      });
    }
  };
}

export default UserNewAccessToken;
