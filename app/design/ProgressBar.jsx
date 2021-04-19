const ProgressBar = (props) => {
  const { completed } = props;

  const containerStyles = {
    height: 10,
    width: '100%',
    backgroundColor: '#0e1215',
    borderRadius: 3,
  };

  const fillerStyles = {
    height: 10,
    width: `${completed}%`,
    backgroundColor: '#ef1e33',
    borderRadius: `${completed === 100 ? '3px' : '3px 0px 0px 3px'}`,
    textAlign: 'right',
  };
  return (
    <div style={containerStyles}>
      <div style={fillerStyles} />
    </div>
  );
};

export default ProgressBar;
