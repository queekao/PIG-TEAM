import styled from "styled-components";
import useGetDocs from "../hooks/use-getDocs";
import LoadingSpinner from "./LoadingSpinner";
const Wrapper = styled.div`
  position: absolute;
  top: 5%;
  left: 10%;
  z-index: 1;
  @media (max-width: 56.25em) {
     {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;
const ColorWrapper = styled.div`
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`;
const Title = styled.h1`
  text-align: left;
  color: var(--gray-dark);
  line-height: 1.2;
  margin-bottom: 1rem;
  @media (max-width: 56.25em) {
     {
      text-align: center;
      font-size: 5rem;
    }
  }
`;
const Subtitle = styled.h3`
  text-align: left;
  color: var(--gray-light);
  @media (max-width: 56.25em) {
     {
      text-align: center;
    }
  }
`;
const ColorTitle = styled.h1`
  text-align: center;
  color: var(--primary-color-dark);
  margin-top: 6rem;
  line-height: 1.2;
  font-size: 5rem;
  margin-bottom: 1rem;
`;
const ColorSubtitle = styled.h3`
  text-align: center;
  color: var(--gray-light);
`;
const PageTitle = (props) => {
  const {isLoading} = useGetDocs(props.fetchComp);
  if (isLoading) {
    return (
      <Wrapper>
        <LoadingSpinner />
      </Wrapper>
    );
  }
  if (
    props.fetchComp === "MembershipComp" ||
    props.fetchComp === "CooperateComp"
  ) {
    return (
      <ColorWrapper>
        <ColorTitle>{props.title}</ColorTitle>
        <ColorSubtitle>{props.subtitle}</ColorSubtitle>
      </ColorWrapper>
    );
  } else if (
    props.fetchComp === "ProductComp" ||
    props.fetchComp === "TestimonialComp"
  ) {
    return (
      <Wrapper>
        <Title>{props.title}</Title>
        <Subtitle>{props.subtitle}</Subtitle>
      </Wrapper>
    );
  }
};
export default PageTitle;
