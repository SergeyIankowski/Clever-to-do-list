import { FC } from "react";
import WrapperProps from "./interface";
import classes from "./wrapper.module.scss";

const Wrapper: FC<WrapperProps> = ({ children }) => {
  return <div className={classes.wrapper}>{children}</div>;
};

export default Wrapper;
