import "./styles.css";

interface BaseProps {}

type PillProps = BaseProps &
  (
    | (React.ComponentPropsWithoutRef<"button"> & {
        as: "button";
      })
    | (React.ComponentPropsWithoutRef<"a"> & {
        as: "link";
      })
  );

const Pill = (props: PillProps) => {
  if (props.as === "button") {
    const { as, ...rest } = props;
    return <button {...rest} className="pill" />;
  }

  const { as, ...rest } = props;
  return <a {...rest} className="pill" />;
};

export default Pill;
