import classes from "./MemberPlanList.module.css";
import ButtonPrimary from "../../UI/ButtonPrimary";
import useGetDocs from "../../hooks/use-getDocs";
import LoadingSpinner from "../../UI/LoadingSpinner";
const MemberPlanList = () => {
  const {data, isLoading} = useGetDocs("MembershipComp");
  if (isLoading) {
    return (
      <ul className={classes.list}>
        <LoadingSpinner />
      </ul>
    );
  }
  const MembershipList = data.map((item) => {
    return item.MembershipComp?.cardContent.map((item) => {
      return (
        <li key={item.id} className={classes.item}>
          <h3>{item.title}</h3>
          <ul className={classes.sevice}>
            {item.service1 && (
              <li className={classes.serviceItem}>{item.service1}</li>
            )}
            {item.service2 && (
              <li className={classes.serviceItem}>{item.service2}</li>
            )}
            {item.service3 && (
              <li className={classes.serviceItem}>{item.service3}</li>
            )}
            {item.service4 && (
              <li className={classes.serviceItem}>{item.service4}</li>
            )}
            {item.service5 && (
              <li className={classes.serviceItem}>{item.service5}</li>
            )}
            {item.service6 && (
              <li className={classes.serviceItem}>{item.service6}</li>
            )}
            {item.serviceEnterprise && (
              <li className={classes.serviceEnterprise}>
                {item.serviceEnterprise}
              </li>
            )}
          </ul>
          <ButtonPrimary className={classes.button} content={item.btnText} />
          <h2 className={classes.price}>{item.price}</h2>
        </li>
      );
    });
  });
  return <ul className={classes.list}>{MembershipList}</ul>;
};
export default MemberPlanList;
