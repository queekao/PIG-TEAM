import React, {useEffect} from "react";
import classes from "./Header.module.css";
import {useLocation, useParams} from "react-router-dom";
import {Burger} from "../Asset/Icon";
import {Home} from "../Asset/Icon";
import {NavLink} from "react-router-dom";
import useGetDocs from "../hooks/use-getDocs";
import {useDispatch, useSelector} from "react-redux";
import {toggleAction} from "../Store/HeaderSlice";
import {LogInAction} from "../Store/LogInSlice";
import LoadingSpinner from "../UI/LoadingSpinner";
import {Link} from "react-router-dom";
import {fetchUserData} from "../Store/CreateAction";
const Header = () => {
  // const history = useHistory();
  const location = useLocation();
  // console.log(location);
  const params = useParams();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => {
    return state.logIn.userData.isLoggedIn;
  });
  const isToggleService = useSelector((state) => {
    return state.toggleHeader.isToggleService;
  });
  const isToggleBurger = useSelector((state) => {
    if (location.pathname === !location.pathname)
      return !state.toggleHeader.isToggleBurger;
    else return state.toggleHeader.isToggleBurger;
  });
  const {data, isLoading} = useGetDocs("HeaderFooterComp");
  // console.log(history);
  const toggleService = () => {
    dispatch(toggleAction.toggleService());
  };
  const toggleBurger = () => {
    dispatch(toggleAction.toggleBurger());
  };
  const logOutHandler = () => {
    dispatch(LogInAction.logOutHandler());
  };
  const toggleOtherPages = () => {
    //for closing nav
    dispatch(toggleAction.toggleOtherPage());
  };
  useEffect(() => {
    dispatch(fetchUserData());
  }, []);
  if (params.productId)
    return (
      <Link to="/home" className={classes.home}>
        <Home />
      </Link>
    );
  if (isLoading) {
    return (
      <header className={classes.header}>
        <nav className={classes.nav}>
          <LoadingSpinner />
        </nav>
      </header>
    );
  }
  // for (const item of data) {
  //   // console.log(item);
  //   item.Header.Logo.map((item) => {
  //     return (
  //       <img
  //         src={item.image}
  //         key={item.id}
  //         className={classes.logoText}
  //         alt="PIG TEXT"
  //       ></img>
  //     );
  //   });
  // }
  // const headerImg = data.map((item) => {
  //   return item.Header?.Logo.map((img) => {
  //     return (
  //       <img
  //         src={img.image}
  //         key={img.id}
  //         className={classes.logoText}
  //         alt="PIG TEXT"
  //       ></img>
  //     );
  //   });
  // });
  // // // console.log(headerImg);
  // const headerNavList = data.map((item) => {
  //   return item.Header?.navList.map((item) => {
  //     if (item.text === "Services⬇") {
  //       return <li onClick={toggleService}>{item.text}</li>;
  //     } else {
  //       return (
  //         <NavLink key={item.id} activeClassName={classes.active} to={item.id}>
  //           <li onClick={item.text}>{item.text}</li>
  //         </NavLink>
  //       );
  //     }
  //   });
  // });
  // const headerServiceList = data.map((item) => {
  //   return item.Header?.serviceList.map((item) => {
  //     return (
  //       <li key={item.id}>
  //         <NavLink to={item.id}>{item.text}</NavLink>
  //       </li>
  //     );
  //   });
  // });

  const headerList = data.map((item) => {
    if (item.Header)
      return (
        <React.Fragment key={item.id}>
          <div className={classes.logo}>
            {item.Header.Logo.map((img) => {
              return (
                <img
                  src={img.image}
                  key={img.id}
                  className={classes.logoText}
                  alt="PIG TEXT"
                ></img>
              );
            })}
            {/* <LogoText /> */}
            <Burger onClick={toggleBurger} className={classes.burger} />
          </div>
          <ul className={!isToggleBurger ? classes.hide : ""}>
            {/* {navList} */}
            {/* {isToggleService && serviceList} */}
            <li onClick={toggleOtherPages} key={item.Header.navList[0].id}>
              <NavLink activeClassName={classes.active} to="/home">
                {item.Header.navList[0].text}
              </NavLink>
            </li>
            <li onClick={toggleService} key={item.Header.navList[1].id}>
              {item.Header.navList[1].text}
              {isToggleService && (
                <ul className={classes.service}>
                  <li
                    onClick={toggleOtherPages}
                    key={item.Header.serviceList[0].id}
                  >
                    <NavLink to="/product-group">
                      {item.Header.serviceList[0].text}
                    </NavLink>
                  </li>
                  <li
                    onClick={toggleOtherPages}
                    key={item.Header.serviceList[1].id}
                  >
                    <NavLink to="/testimonial">
                      {item.Header.serviceList[1].text}
                    </NavLink>
                  </li>
                  <li
                    onClick={toggleOtherPages}
                    key={item.Header.serviceList[2].id}
                  >
                    <NavLink to="/membership">
                      {item.Header.serviceList[2].text}
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li onClick={toggleOtherPages} key={item.Header.navList[2].id}>
              <NavLink activeClassName={classes.active} to="/cooperate">
                {item.Header.navList[2].text}
              </NavLink>
            </li>
            <li onClick={toggleOtherPages} key={item.Header.navList[3].id}>
              <NavLink activeClassName={classes.active} to="/our-spirit">
                {item.Header.navList[3].text}
              </NavLink>
            </li>
            {!isLoggedIn && (
              <li onClick={toggleOtherPages} key={item.Header.navList[4].id}>
                <NavLink activeClassName={classes.active} to="/log-in">
                  {item.Header.navList[4].text}
                </NavLink>
              </li>
            )}
            {isLoggedIn && <li onClick={logOutHandler}>Log Out</li>}
          </ul>
        </React.Fragment>
      );
  });
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>{headerList}</nav>
    </header>
  );
};
export default Header;
