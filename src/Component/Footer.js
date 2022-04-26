import classes from "./Footer.module.css";
import useGetDocs from "../hooks/use-getDocs";
import LoadingSpinner from "../UI/LoadingSpinner";
const Footer = () => {
  const {data, isLoading} = useGetDocs("HeaderFooterComp");
  if (!data) return <p>page not found</p>;
  const footerText = data.map((item) => {
    return item.footer?.text.map((text) => {
      return <li key={text.id}>{text.text}</li>;
    });
  });
  const footerImg = data.map((item) => {
    return item.footer?.image.map((img) => {
      return (
        <li key={img.id}>
          <img src={img.image} alt="footerImg"></img>
        </li>
      );
    });
  });
  if (isLoading) {
    return (
      <section style={{padding: "2rem"}} className={classes.footer}>
        <LoadingSpinner />
      </section>
    );
  }
  return (
    <footer className={classes.footer}>
      {/* <ul className={classes.textList}>
        <li>About PIG</li>
        <li>Solutions</li>
        <li>Address</li>
        <li>Features</li>
        <li>Events</li>
        <li>Contact us</li>
      </ul>
      <ul className={classes.iconList}>
        <li>
          <Facebook />
        </li>
        <li>
          <Instagram />
        </li>
        <li>
          <Twitter />
        </li>
      </ul> */}
      <ul className={classes.textList}>{footerText}</ul>
      <ul className={classes.iconList}>{footerImg}</ul>
      <p>Copyright &copy; PIG Inc.</p>
    </footer>
  );
};
export default Footer;
