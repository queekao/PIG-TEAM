import classes from "./TestimonialList.module.css";
import useGetDocs from "../../hooks/use-getDocs";
import LoadingSpinner from "../../UI/LoadingSpinner";
const TestimonialList = () => {
  const {data, isLoading} = useGetDocs("TestimonialComp");
  if (isLoading) {
    return (
      <ul className={classes.list}>
        <LoadingSpinner />
      </ul>
    );
  }
  const testimonialList = data.map((item) => {
    return item.TestimonialComp?.map((item) => {
      // console.log(item);
      return (
        <li key={item.id} className={classes.item}>
          <img src={item.image} alt="Customer Review"></img>
          <div className={classes.text}>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </div>
        </li>
      );
    });
  });
  return <ul className={classes.list}>{testimonialList}</ul>;
};
export default TestimonialList;
