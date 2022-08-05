interface IndicatorProps {
  children?: string | JSX.Element | number;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

export const Indicator: React.FC<IndicatorProps> = ({ top, right, bottom, left, children }) => {
  return (
    <div
      className="indicator"
      style={{
        top: `${top}px`,
        right: `${right}px`,
        bottom: `${bottom}px`,
        left: `${left}px`,
      }}
    >
      {children}
    </div>
  );
};
