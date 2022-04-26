import classes from "./ProductList.module.css";
import styled from "styled-components";
import ButtonPrimary from "../../UI/ButtonPrimary";
import {Link} from "react-router-dom";
import {useRouteMatch} from "react-router-dom";
import useGetDocs from "../../hooks/use-getDocs";
import LoadingSpinner from "../../UI/LoadingSpinner";
const FitnessProductList = () => {
  const match = useRouteMatch();
  const {data, isLoading} = useGetDocs("ProductList");
  const BgGradient = styled.div`
    background: linear-gradient(
      180deg,
      #f2f2f2 0%,
      rgba(236, 236, 236, 0) 100%
    );
    transform: rotate(-180deg);
    height: 200%;
    width: 100%;
    z-index: -100;
    position: absolute;
    bottom: 0;
    left: 0;
    @media (max-width: 56.25em) {
       {
        height: 152rem;
      }
    }
  `;
  if (isLoading) {
    return (
      <section style={{margin: "20rem auto"}} className={classes.team}>
        <LoadingSpinner />
      </section>
    );
  }
  const productItem = data.map((item) => {
    if (item.ProductListFitness)
      return item.ProductListFitness.map((item) => {
        return (
          <li key={item.id} className={classes.item}>
            <Link to={`${match.url}/${item.id}`}>
              {/* this "item.id" is the "productId" for each specific product */}
              <img alt="MY PIG" src={item.image} />
            </Link>
            <div className={classes.text}>
              <h4>{item.title}</h4>
              <p>{item.content}</p>
            </div>
          </li>
        );
      });
  });
  return (
    <section className={classes.business}>
      <BgGradient />
      <h2>Business Collaboration</h2>
      <ul className={classes.list}>{productItem}</ul>
      <ButtonPrimary
        className={classes.button}
        content="More Showcase"
      ></ButtonPrimary>
    </section>
  );
};
export default FitnessProductList;
