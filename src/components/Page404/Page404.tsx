import Wrapper from "../Wrapper/Wrapper";
import classes from "./page404.module.scss";

const Page404 = () => {
  return (
    <Wrapper>
      <div className={classes.container}>404: Page Not Found</div>;
    </Wrapper>
  );
};

export default Page404;
