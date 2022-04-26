import Card from "../../UI/Card";
import useGetDocs from "../../hooks/use-getDocs";
import LoadingSpinner from "../../UI/LoadingSpinner";
import classes from "./GuidelineItem.module.css";
const GuidelineItem = () => {
  const {data, isLoading, error} = useGetDocs("CooperateComp");
  if (isLoading) {
    return (
      <section style={{margin: "20rem auto"}} className={classes.team}>
        <LoadingSpinner />
      </section>
    );
  }
  return data.map((item) => {
    // console.log(item)
    if (item.CooperateComp)
      return item.CooperateComp.map((item) => {
        return (
          <Card
            key={item.id}
            className={item.id % 2 === 0 ? classes.itemLeft : classes.itemRight}
          >
            <h3>{item.title}</h3>
            {item.content && <p>{item.content}</p>}
          </Card>
        );
      });
  });
};
export default GuidelineItem;
