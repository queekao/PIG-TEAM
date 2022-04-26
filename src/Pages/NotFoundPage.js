import classes from "./NotFoundPage.module.css";
import useGetDocs from "../hooks/use-getDocs";
import LoadingSpinner from "../UI/LoadingSpinner";
const NotFoundPage = () => {
  const {data, isLoading} = useGetDocs("NotFoundPage");
  if (isLoading) {
    return (
      <div className={classes.notFound}>
        <LoadingSpinner />
      </div>
    );
  }
  return data.map((item) => {
    return (
      <div className={classes.notFound}>
        <img src={item.logoBackground} alt="Logo"></img>
        <p>{item.content}</p>
      </div>
    );
  });
};
export default NotFoundPage;
