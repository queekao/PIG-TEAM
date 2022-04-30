import React, {Suspense} from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import {
  LandingPageContent,
  TestimonialPageContent,
  MembershipPageContent,
  ProductPageContent,
  CooperatePageContent,
  SpiritPageContent,
  SignUpPageContent,
} from "./Pages/PageContent";

// import {app, database, storage} from "./firebaseConfig";
// // import {collection, getDocs} from "firebase/firestore";
// import {getDownloadURL, ref, listAll, getMetadata} from "firebase/storage";

import StapleProductList from "./Component/ProductListPage/StapleProductList";
import FitnessProductList from "./Component/ProductListPage/FitnessProductList";
import {useLocation} from "react-router-dom";
import ConnectForm from "./Component/FormPage/ConnectForm";

const ProductPage = React.lazy(() => import("./Pages/ProductPage"));
const NavPageWrapper = React.lazy(() => import("./Pages/NavPageWrapper"));
const NotFoundPage = React.lazy(() => import("./Pages/NotFoundPage"));
// const {
//   LandingPageContent,
//   TestimonialPageContent,
//   MembershipPageContent,
//   ProductPageContent,
//   CooperatePageContent,
//   SpiritPageContent,
//   SignUpPageContent,
// } = React.lazy(() => import("./Pages/ProductPage"));
function App() {
  // const db = collection(database, "Landing pages");
  // getDocs(db).then((res) => {
  //   res.docs.map((item) => {
  //     console.log(item.data());
  //   });
  // });
  //FOR GET IMG URL CODE
  // const getRef = ref(storage, "gs://pig-project-ea5ab.appspot.com/treadmill");
  // const getImgPath = async () => {
  //   const imgList = await listAll(getRef);
  //   const imgGroup = await imgList.items.map(async (itemRef) => {
  //     const imgPathGroup = await getDownloadURL(itemRef);
  //     console.log(imgPathGroup);
  //   });
  // };
  // getImgPath();
  ////////

  const productObj = useLocation();
  return (
    <React.Fragment>
      <Suspense fallback={null}>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home" exact>
            <NavPageWrapper>
              <LandingPageContent />
            </NavPageWrapper>
          </Route>
          <Route path="/product-group" exact>
            <NavPageWrapper>
              <ProductPageContent />
            </NavPageWrapper>
          </Route>
          <Route path="/product-group/:productListId" exact>
            <NavPageWrapper>
              {productObj.pathname === "/product-group/staple" && (
                <StapleProductList />
              )}
              {productObj.pathname === "/product-group/fitness" && (
                <FitnessProductList />
              )}
              {productObj.pathname === "/product-group/electric" && (
                <NotFoundPage />
              )}
            </NavPageWrapper>
          </Route>
          <Route path="/product-group/:productListId/:productId">
            <ProductPage />
          </Route>
          <Route path="/testimonial">
            <NavPageWrapper>
              <TestimonialPageContent />
            </NavPageWrapper>
          </Route>
          <Route path="/connect-form">
            <NavPageWrapper>
              <ConnectForm />
            </NavPageWrapper>
          </Route>
          <Route path="/membership">
            <NavPageWrapper>
              <MembershipPageContent />
            </NavPageWrapper>
          </Route>
          <Route path="/cooperate">
            <NavPageWrapper>
              <CooperatePageContent />
            </NavPageWrapper>
          </Route>
          <Route path="/our-spirit">
            <NavPageWrapper>
              <SpiritPageContent />
            </NavPageWrapper>
          </Route>
          <Route path="/log-in">
            <NavPageWrapper>
              <SignUpPageContent />
            </NavPageWrapper>
          </Route>
          <Route path="*">
            <NavPageWrapper>
              <NotFoundPage />
            </NavPageWrapper>
          </Route>
        </Switch>
      </Suspense>
    </React.Fragment>
  );
}
export default App;
// gltf-pipeline -i model.gltf -o modelDraco.gltf -d
// gltf-pipeline -i earthTwo.glb -o EarthTwo.glb -d
// npx gltfjsx grip
