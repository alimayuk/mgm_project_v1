import UserRefreshTokenModel from "../../models/UserRefreshToken.js";

class logoutUser{
     // Logout
  static logout = async (req, res) => {
    try {
      // Optionally, you can blacklist the refresh token in the database
      const refreshToken = req.cookies.refreshToken;
      await UserRefreshTokenModel.findOneAndUpdate(
        { token: refreshToken },
        { $set: { blacklisted: true } }
      );

      // Clear access token and refresh token cookies
      res.clearCookie('accessToken');
      res.clearCookie('refreshToken');

      res.status(200).json({ status: "success", message: "Logout successful" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: "failed", message: "Unable to logout, please try again later" });
    }

  }
}

export default logoutUser;