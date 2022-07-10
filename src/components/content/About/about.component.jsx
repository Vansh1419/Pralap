const AboutComponent = (props) => {
  return (
    <div>
      <img src={props.information.appIcon} alt="" />
      <h2>{props.information.aboutHeading}</h2>
      <p>{props.information.aboutInformation}</p>
    </div>
  );
};
export default AboutComponent;
