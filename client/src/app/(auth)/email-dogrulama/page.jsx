import React from "react";
import styles from "./styles.module.css";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";

const VerifyEmail = async ({ searchParams }) => {
  const email = searchParams.email;
  const otp = searchParams.otp;

  const res = await fetch(
    `http://localhost:8000/api/account/verify-email/${email}/${otp}`,
    {
      cache: "no-store",
    }
  );
  const response = await res.json();
  return (
    <div className={styles.wrapper}>
      {response.status === "success" && (
        <div className={`${styles.info} ${styles.successCard}`}>
          <FaRegCheckCircle />
          <p className={`${styles.success}`}>{response.message}</p>
          <div className={styles.buttons}>
            <a href="/">Anasayfaya Dön</a>
            <a href="/giris" className="">
              Giriş Yap
            </a>
          </div>
        </div>
      )}
      {response.status !== "success" && (
        <div className={`${styles.info} ${styles.errorCard}`}>
          <IoIosCloseCircleOutline />
          <p className={styles.error}>{response.message}</p>
          <a href="/">Anasayfaya Dön</a>
        </div>
      )}
    </div>
  );
};

export default VerifyEmail;
