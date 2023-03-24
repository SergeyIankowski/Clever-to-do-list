import { InfinitySpin } from "react-loader-spinner";
import Wrapper from "../Wrapper/Wrapper";
import classes from "./spinner.module.scss";

const Spinner = () => {
  return (
    <Wrapper>
      <div className={classes.spinnerContainer}>
        <InfinitySpin color="black" />
      </div>
    </Wrapper>
  );
};
export default Spinner;
