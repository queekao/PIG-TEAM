import React from "react";
import Banner from "../Component/LandingPage/Banner";
import styled from "styled-components";
import TextContent from "../Component/LandingPage/TextContent";
import IllustrationList from "../Component/LandingPage/IllustrationList";
import TeamList from "../Component/LandingPage/TeamList";
import TestimonialList from "../Component/ServicePage/TestimonialList";
import MemberPlanList from "../Component/ServicePage/MemberPlanList";
import ProductCategory from "../Component/ServicePage/ProductCategory";
import PageTitle from "../UI/PageTitle";
import useGetDocs from "../hooks/use-getDocs";
import GuidelineComp from "../Component/CooperatePage/GuidelineComp";
import SpiritText from "../Component/SpiritText";
import LogInForm from "../Component/FormPage/LogInForm";
const BgGray = styled.div`
  background: #e2e2e2;
  height: 50rem;
  width: 100%;
  z-index: -10;
`;
export const LandingPageContent = () => {
  return (
    <React.Fragment>
      <BgGray />
      <Banner />
      <TextContent />
      <IllustrationList />
      <TeamList />
    </React.Fragment>
  );
};
export const ProductPageContent = () => {
  const fetchComp = "ProductComp";
  const {data} = useGetDocs(fetchComp);
  const pageTitle = data
    .filter((item) => item.ProductTitle)
    .map((item) => {
      return (
        <PageTitle
          fetchComp={fetchComp}
          key={item.id}
          title={item.ProductTitle.title}
          subtitle={item.ProductTitle.subtitle}
        />
      );
    });
  return (
    <React.Fragment>
      {pageTitle}
      <ProductCategory />
    </React.Fragment>
  );
};
export const TestimonialPageContent = () => {
  const fetchComp = "TestimonialComp";
  const {data} = useGetDocs(fetchComp);
  const pageTitle = data
    .filter((item) => item.TestimonialTitle)
    .map((item) => {
      return (
        <PageTitle
          fetchComp={fetchComp}
          key={item.id}
          title={item.TestimonialTitle.title}
          subtitle={item.TestimonialTitle.subtitle}
        />
      );
    });
  return (
    <React.Fragment>
      {pageTitle}
      <TestimonialList />
    </React.Fragment>
  );
};
export const MembershipPageContent = () => {
  const fetchComp = "MembershipComp";
  const {data} = useGetDocs(fetchComp);
  const pageTitle = data
    .filter((item) => item.MembershipTitle)
    .map((item) => {
      return (
        <PageTitle
          fetchComp={fetchComp}
          key={item.id}
          title={item.MembershipTitle.title}
          subtitle={item.MembershipTitle.subtitle}
        />
      );
    });
  return (
    <React.Fragment>
      {pageTitle}
      <MemberPlanList />
    </React.Fragment>
  );
};
export const CooperatePageContent = () => {
  const fetchComp = "CooperateComp";
  const {data} = useGetDocs(fetchComp);
  const pageTitle = data
    .filter((item) => item.CooperateTitle)
    .map((item) => {
      return (
        <PageTitle
          fetchComp={fetchComp}
          key={item.id}
          title={item.CooperateTitle.title}
          subtitle={item.CooperateTitle.subtitle}
        />
      );
    });
  return (
    <React.Fragment>
      {pageTitle}
      <GuidelineComp />
    </React.Fragment>
  );
};
export const SpiritPageContent = () => {
  return (
    <React.Fragment>
      <SpiritText />
    </React.Fragment>
  );
};
export const SignUpPageContent = () => {
  return (
    <React.Fragment>
      <LogInForm />
    </React.Fragment>
  );
};
export const ConnectFormContent = () => {
  return <React.Fragment></React.Fragment>;
};
