import { getJwtSecretKey } from "@/lib/jwtToken";
import { SignJWT } from "jose";
import Cookies from 'js-cookie';

export const jwtTokenCreate = async (user) => {
  try {
    const token = await new SignJWT({
      name: user.name,
      role: user.roles, // Set your own roles
    })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("30m") // Set your own expiration time
      .sign(getJwtSecretKey());

    Cookies.set('token', token, { path: '/' });
  } catch (error) {
    console.error('Error creating JWT:', error);
  }
};
