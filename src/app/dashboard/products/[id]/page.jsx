import styles from "@/app/ui/dashboard/products/singleproduct/singleproduct.module.css";
import Image from "next/image";
import AsadProfile from "@/../public/assets/images/asad.png"
const SingleProductPage = async ({ params }) => {
  const { id } = params;

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={AsadProfile} alt="" fill />
        </div>
        {id}
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="hidden" name="id" value="id" />
          <label>Title</label>
          <input type="text" name="title" placeholder="abc" />
          <label>Price</label>
          <input type="number" name="price" placeholder="2334$" />
          <label>Stock</label>
          <input type="number" name="stock" placeholder="34" />
          <label>Color</label>
          <input
            type="text"
            name="color"
            placeholder={"color"}
          />
          <label>Size</label>
          <textarea
            type="text"
            name="size"
            placeholder={"size"}
          />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder={"discription"}
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;