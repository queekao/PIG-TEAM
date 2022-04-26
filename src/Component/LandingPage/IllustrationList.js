import classes from "./IllustrationList.module.css";
import useGetDocs from "../../hooks/use-getDocs";
import LoadingSpinner from "../../UI/LoadingSpinner";
const IllustrationList = () => {
  const {data, isLoading, error} = useGetDocs("LandingPageComp");
  const IllustrationList = data.map((item) => {
    // console.log(item.IllustrationComp);
    return item.IllustrationComp?.map((item) => {
      return (
        <div key={item.id} className={classes.item}>
          <img alt="MY PIG" src={item.image}></img>
          <div className={classes.text}>{item.content}</div>
        </div>
      );
    });
  });
  if (isLoading) {
    return (
      <section className={classes.list}>
        <LoadingSpinner />
      </section>
    );
  }
  return <section className={classes.list}>{IllustrationList}</section>;
};
export default IllustrationList;
