import Image from "next/image";
import classes from "./CarPhoto.module.css";

const CarPhoto = () => {
  return (
    <div className={classes.container}>
      <Image src={"/carPage.png"} width={492} height={360} alt={"Car"} />
      <div className={classes["images-container"]}>
        <button>
          <Image
            className="object-cover"
            src={"/carPage.png"}
            width={148}
            height={124}
            alt={"Car"}
          />
        </button>
        <button>
          <Image
            className="object-cover"
            src={"/carPage.png"}
            width={148}
            height={124}
            alt={"Car"}
          />
        </button>
        <button>
          <Image
            className="object-cover"
            src={"/carPage.png"}
            width={148}
            height={124}
            alt={"Car"}
          />
        </button>
      </div>
    </div>
  );
};

export { CarPhoto, CarPhoto as default };
