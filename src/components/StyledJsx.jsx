export const StyledJsx = () => {
  return (
    <>
      <div className="container" >
        <p className="title">- Styled JSX -</p>
        <button className="button">FIGHT!!</button>
      </div>
      <style jsx="true">{`
        .container {
          align-items: center;
          border: solid 2px;
          border-radius: 20px;
          display: flex;
          justify-content: space-around;
          margin: 8px;
          padding: 8px;
        }

        .title {
          color: #3d84d8;
          margin: 0;
        }

        .button {
          background-color: #abedd8;
          border: none;
          border-radius: 8px;
          padding: 8px;
        }
      `}</style>
    </>
  );
}