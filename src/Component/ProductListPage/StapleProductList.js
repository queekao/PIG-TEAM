import classes from "./ProductList.module.css";
import styled from "styled-components";
import ButtonPrimary from "../../UI/ButtonPrimary";
import {Link} from "react-router-dom";
import {useRouteMatch} from "react-router-dom";
import useGetDocs from "../../hooks/use-getDocs";
import LoadingSpinner from "../../UI/LoadingSpinner";
const StapleProductList = () => {
  const match = useRouteMatch();
  // console.log(match);
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
    bottom: -10%;
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
  const productItem = data
    .filter((item) => item.ProductListStaple)
    .map((item) => {
      return (
        <li className={classes.item}>
          <Link to={`${match.url}/shoes`}>
            <img alt="MY PIG" src={item.ProductListStaple.image} />
          </Link>
          <div className={classes.text}>
            <h4>{item.ProductListStaple.title}</h4>
            <p>{item.ProductListStaple.content}</p>
          </div>
        </li>
      );
    });
  return (
    <section className={classes.business}>
      <BgGradient />
      {!isLoading && <h2>Business Collaboration</h2>}
      <ul className={classes.list}>
        {/* <li className={classes.item}>
          <img alt="MY PIG" src={Earphone} />
          <div className={classes.text}>
            <h4>Alpha</h4>
            <p>3D modeling web AR</p>
          </div>
        </li>
        <li className={classes.item}>
          <Link to={`${match.url}/shoes`}>
            <img alt="MY PIG" src={Shoes} />
          </Link>
          <div className={classes.text}>
            <h4>Duke</h4>
            <p>3D modeling web</p>
          </div>
        </li>
        <li className={classes.item}>
          <img alt="MY PIG" src={Charger} />
          <div className={classes.text}>
            <h4>Solaa</h4>
            <p>3D modeling app / web</p>
          </div>
        </li>
        <li className={classes.item}>
          <img alt="MY PIG" src={Cup} />
          <div className={classes.text}>
            <h4>Bo5e</h4>
            <p>3D modeling web</p>
          </div>
        </li>
        <li className={classes.item}>
          <img alt="MY PIG" src={Bluetooth} />
          <div className={classes.text}>
            <h4>Alpha</h4>
            <p>3D modeling web</p>
          </div>
        </li>
        <li className={classes.item}>
          <img alt="MY PIG" src={Watches} />
          <div className={classes.text}>
            <h4>Waa</h4>
            <p>3D modeling app / web</p>
          </div>
        </li> */}
        {productItem}
      </ul>
      <ButtonPrimary
        className={classes.button}
        content="More Showcase"
      ></ButtonPrimary>
    </section>
  );
};
export default StapleProductList;
