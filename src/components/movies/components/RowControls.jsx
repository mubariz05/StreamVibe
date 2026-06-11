export const RowControls = () => (
  <div className="row-controls">
    <button className="ctrl-btn">
      <img src="/icons/arrow-left.svg" alt="left" />
    </button>
    <div className="ctrl-dots">
      <span className="dot active"></span>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
    </div>
    <button className="ctrl-btn">
      <img src="/icons/arrow-right.svg" alt="right" />
    </button>
  </div>
);
