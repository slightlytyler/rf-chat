const renderNoop = () => null;

const defaultProps = {
  renderRight: renderNoop
};

const Branch = props => {
  if (props.condition) return props.renderLeft();
  return props.renderRight();
};

Branch.defaultProps = defaultProps;

export default Branch;
