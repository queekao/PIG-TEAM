///This page will generate different header page in 'Route' in App.js
import styled from "styled-components";
import Header from "../Component/Header";
import React from "react";
import Footer from "../Component/Footer";

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10rem;
`;

const NavPageWrapper = (props) => {
  return (
    <React.Fragment>
      <Header />
      <Wrapper>
        {/* <BgGray />
        <Banner />
        <TextContent />
        <IllustrationList />
        {/* <BusinessList /> 
        <TeamList /> */}
        {props.children}
      </Wrapper>
      <Footer />
      {/* <ProductCategory/> */}
      {/* <TestimonialList/> */}
      {/* <MemberPlanList /> */}
    </React.Fragment>
  );
};
export default NavPageWrapper;
