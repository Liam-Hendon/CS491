import Room from '/Users/liamhendon/vite-project/src/Room.jsx'
import './App.css';

function House(props) {
  return (

    <>
    <div>
    <Room name={"bedroom"} houseName={props.name}/>
    </div>
    </>
  );
}

export default House;
