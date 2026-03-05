import './App.css'

const Room = (props) => {
  return (
    <>
      <div>This is a room called {props.name}</div>
      <div>It's in a house called {props.houseName}</div>
    </>
  );
}



export default Room