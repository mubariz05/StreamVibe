const ComparisonRow = ({ feature, basic, standard, premium }) => {
  const getCellClass = (value) => {
    if (value === "No") return "comparison-cell comparison-cell--no";
    return "comparison-cell";
  };

  return (
    <div className="comparison-row">
      <div className="comparison-cell comparison-cell--label">{feature}</div>
      <div className={getCellClass(basic)}>{basic}</div>
      <div className={getCellClass(standard)}>{standard}</div>
      <div className={getCellClass(premium)}>{premium}</div>
    </div>
  );
};

export default ComparisonRow;
