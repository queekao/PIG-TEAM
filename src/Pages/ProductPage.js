import {Suspense, useState} from "react";
import Model from "../Component/3DModel";
import classes from "./ProductPage.module.css";
import Header from "../Component/Header";
import ButtonSwitcher from "../UI/ButtonSwitcher";
import ProductIntro from "../Component/ProductItemPage/ProductIntro";
import IconList from "../Component/IconList";
import ProductDetail from "../Component/ProductItemPage/ProductDetail";

const ProductPage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const checkButton = () => {
    if (!isChecked) setIsChecked(true);
    if (isChecked) setIsChecked(false);
  };
  return (
    <Suspense fallback={null}>
      <Header />
      <ProductIntro />
      {isChecked && <ProductDetail checked={isChecked} />}
      <div className={classes.drag}>Click and Drag</div>
      <IconList className={classes.icon} />
      <Model showDetail={isChecked} />
      <ButtonSwitcher
        onClick={checkButton}
        checked={isChecked}
        showContent="Show Detail"
        hideContent="Hide Detail"
      />
      <a
        className={classes.productLink}
        href="https://drive.google.com/drive/folders/134gdIG-9pxQ1o876ychVHXFz7r-nEyRZ"
      >
        View Product
      </a>
      <a
        className={classes.ARLink}
        href="https://zvglu.zappar.io/8413410903427053828/1.0.56/"
      >
        View AR
      </a>
    </Suspense>
  );
};
export default ProductPage;
