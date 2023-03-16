import { ReactNode } from "react";
import classes from "./wrapper.module.scss";

type WrapperProps = {
  children: ReactNode;
};

const Wrapper = ({ children }: WrapperProps) => {
  return <div className={classes.wrapper}>{children}</div>;
};

export default Wrapper;
