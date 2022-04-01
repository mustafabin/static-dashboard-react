const stats = (props) => {
  let { title, mainVal, subvalues } = props;
  return (
    <div className="stats">
      <h1 className="statText">{title}</h1>
      <h1 className="statText">{mainVal}</h1>
      <h1 className="anyalyisNum">{subvalues[0]}</h1>
      <h1 className="anyalyisNum">{subvalues[1]}</h1>
      <h1 className="anyalyisNum">{subvalues[2]}</h1>
    </div>
  );
};

export default stats;
