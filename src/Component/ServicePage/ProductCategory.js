import React from "react";
import classes from "./ProductCategory.module.css";
import ButtonSecondary from "../../UI/ButtonSecondary";
import useGetDocs from "../../hooks/use-getDocs";
import LoadingSpinner from "../../UI/LoadingSpinner";
import {Link, useRouteMatch} from "react-router-dom";
const ProductCategory = () => {
  const {data, isLoading} = useGetDocs("ProductComp");
  const match = useRouteMatch();
  if (isLoading) {
    return (
      <ul style={{margin: "20rem auto"}} className={classes.list}>
        <LoadingSpinner />
      </ul>
    );
  }
  const productList = data.map((item) => {
    return item.ProductComp?.map((item) => {
      return (
        <li key={item.id} className={classes.item}>
          <img src={item.image} alt="shoes"></img>
          <div className={classes.content}>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
            <Link to={`${match.path}/${item.id}`}>
              <ButtonSecondary
                className={classes.button}
                content="View Detail"
              />
            </Link>
          </div>
        </li>
      );
    });
  });
  return <ul className={classes.list}>{productList}</ul>;
};
export default ProductCategory;
