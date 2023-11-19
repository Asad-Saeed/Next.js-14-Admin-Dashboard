"use client";
import styles from "./loginForm.module.css";
import Link from "next/link";

const LoginForm = () => {
  return (
    <form action="" className={styles.form}>
      <h1>Login</h1>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>
        <Link href="/dashboard">Login</Link>
      </button>
    </form>
  );
};

export default LoginForm;
