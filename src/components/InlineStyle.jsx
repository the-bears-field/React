export const InlineStyle = () => {
  const containerStyle = {
    alignItems: 'center',
    border: 'solid 2px',
    borderRadius: '20px',
    display: 'flex',
    justifyContent: 'space-around',
    margin: '8px',
    padding: '8px',
  };

  const titleStyle = {
    color: '#3d84d8',
    margin: '0',
  };

  const buttonStyle = {
    backgroundColor: '#abedd8',
    border: 'none',
    borderRadius: '8px',
    padding: '8px',
  };

  return (
    <div style={containerStyle}>
      <p style={titleStyle}>- Inline Style -</p>
      <button style={buttonStyle}>FIGHT!!</button>
    </div>
  );
}
