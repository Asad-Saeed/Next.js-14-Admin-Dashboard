import React from 'react'
import styles from "@/app/ui/dashboard/users/singleuser/singleuser.module.css";
import AsadProfile from "@/../public/assets/images/asad.png"
import Image from "next/image";
const SingleUserPage = ({params}) => {
    const { id } = params;
  
    return (
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <div className={styles.imgContainer}>
            <Image src={AsadProfile} alt="" fill />
          </div>
          Asad Saeed
        </div>
        <div className={styles.formContainer}>
          <form action="" className={styles.form}>
            <input type="hidden" name="id" value={id}/>
            <label>Username</label>
            <input type="text" name="username" placeholder="Asad Saeed" />
            <label>Email</label>
            <input type="email" name="email" placeholder="asadsaeed.dev@gmail.com" />
            <label>Password</label>
            <input type="password" name="password" placeholder="........" />
            <label>Phone</label>
            <input type="text" name="phone" placeholder="030000000" />
            <label>Address</label>
            <textarea type="text" name="address" placeholder="Lahore" />
            <label>Is Admin?</label>
            <select name="isAdmin" id="isAdmin">
              <option value={true} >Yes</option>
              <option value={false} >No</option>
            </select>
            <label>Is Active?</label>
            <select name="isActive" id="isActive">
              <option value={true} >Yes</option>
              <option value={false} >No</option>
            </select>
            <button>Update</button>
          </form>
        </div>
      </div>
    );
}

export default SingleUserPage