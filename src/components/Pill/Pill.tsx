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

const Pill = (props: PillProps) => {
  if (props.as === "button") {
    const { as, ...rest } = props;
    return (
      <button {...rest} className={`pill is-interactive ${rest.className}`} />
    );
  }

  if (props.as === "link") {
    const { as, ...rest } = props;
    return <a {...rest} className={`pill is-interactive ${rest.className}`} />;
  }

  const { as, ...rest } = props;
  return <div {...rest} className={`pill ${rest.className}`} />;
};

export default Pill;
