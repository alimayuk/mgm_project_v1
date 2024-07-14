import UserModel from "../../models/User.js";
import generateTokens from "../../utils/tokens/generateTokens.js";
import bcrypt from "bcrypt";
import setTokensCookies from "../../utils/tokens/setTokensCookies.js";
class LoginController {
  static login = async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await UserModel.findOne({ email });

      if (!user) {
        return res
          .status(404)
          .json({ status: "failed", message: "Geçersiz email veya şifre !" });
      }

      if (!user.is_verified) {
        return res.status(401).json({
          status: "failed",
          message: "Lütfen emailinizi onaylayınız!",
        });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(401)
          .json({ status: "failed", message: "Geçersiz email veya şifre !" });
      }

      // Generate tokens
      const { accessToken, refreshToken, accessTokenExp, refreshTokenExp } =
        await generateTokens(user);

      // Set Cookies
      setTokensCookies(
        res,
        accessToken,
        refreshToken,
        accessTokenExp,
        refreshTokenExp
      );

      // Send response
      res.status(200).json({
        user: {
          id: user._id,
          email: user.email,
          name: user.name,
          roles: user.roles[0],
        },
        status: "success",
        message: "Giriş Başarılı!",
        access_token: accessToken,
        refresh_token: refreshToken,
        access_token_exp: accessTokenExp,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        status: "failed",
        message:
          "Giriş sırasında bir hata oluştu. Daha sonra tekrar deneyiniz.",
      });
    }
  };
}

export default LoginController;
