import { forwardRef } from "react";
import { clsx } from "clsx";
import "./styles.css";

interface BaseProps {}

type PillProps = BaseProps &
  (
    | (React.ComponentPropsWithoutRef<"div"> & { as: "div" })
    | (React.ComponentPropsWithoutRef<"button"> & {
        as: "button";
      })
    | (React.ComponentPropsWithoutRef<"a"> & {
        as: "link";
      })
  );

const Pill = forwardRef((props: PillProps, ref) => {
  if (props.as === "button") {
    const { as, ...rest } = props;
    return (
      <button
        {...rest}
        className={clsx(["pill is-interactive", rest.className])}
        ref={ref}
      />
    );
  }

  if (props.as === "link") {
    const { as, ...rest } = props;
    return (
      <a
        {...rest}
        className={clsx(["pill is-interactive", rest.className])}
        ref={ref}
      />
    );
  }

  const { as, ...rest } = props;
  return <div {...rest} className={clsx(["pill", rest.className])} ref={ref}/>;
});

export default Pill;
