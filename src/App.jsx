import "./styles.css";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { useContext } from "react";

export default function App() {
  // const navigate = useNavigation();
  const [itemshow, setItem] = useState(true);
  const [itemdelete, setItemDelete] = useState(true);

  const [data, setData] = useState([]);
  async function handleButton() {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const response = await data.json();
    setData(response);
  }
  const handleEdit = () => {
    console.log("hello");
    setItem(false);
    setTimeout(() => {
      setItem(true);
    }, 1500);
  };
  const handleDelete = () => {
    console.log("hello");
    setItemDelete(false);
    setTimeout(() => {
      setItemDelete(true);
    }, 1500);
  };
  useEffect(() => {
    handleButton();
  }, []);
  const handleShow = (item) => {
    // setItem(item);
  };
  let content = data.map((item) => {
    // console.log(item);
    return (
      <div className="dataContainer" key={item.id}>
        <h1 className="title">
          {item.id}. {item.title}
        </h1>
        <button onClick={handleShow(item)} className="button">
          <Link to="/content" className="links">
            Read More
          </Link>
        </button>
        <div>
          {!itemshow && <div>Edited Successfully</div>}
          {!itemdelete && <div>Deleted Successfully</div>}
          <button className="button" onClick={handleEdit}>
            Edit
          </button>
          <button className="button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    );
  });

  return (
    <div className="App">
      {/* <button onClick={handleButton}>Click</button> */}
      <div className="mainContainer">{content}</div>
    </div>
  );
}
