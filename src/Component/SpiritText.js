import React from "react";
import Card from "../UI/Card";
import useGetDocs from "../hooks/use-getDocs";
import classes from "./SpiritText.module.css";
import LoadingSpinner from "../UI/LoadingSpinner";
const SpiritText = (props) => {
  const {data, isLoading} = useGetDocs("SpiritPageComp");
  if (isLoading) {
    return (
      <Card divWrapper={true} className={classes.wrapper}>
        <LoadingSpinner />
      </Card>
    );
  }
  const content = data.map((item) => {
    return (
      <Card divWrapper={true} className={classes.wrapper} key={item.id}>
        <h1>{item.title}</h1>
        <p>{item.content}</p>
        <h3>{item.slogan}</h3>
      </Card>
    );
  });
  return <React.Fragment>{content}</React.Fragment>;
};
export default SpiritText;
