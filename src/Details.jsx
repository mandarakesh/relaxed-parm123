import { Link } from "react-router-dom";

function Details({ item }) {
  // console.log(item);
  return (
    <div>
      <button className="button">
        <Link to="/" className="links">
          Back to Home
        </Link>
      </button>
      <div>
        <img
          src="https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg"
          alt="asset"
          className="image"
        />
        <h4 style={{ marginLeft: "10px" }}>
          sunt aut facere repellat provident occaecati excepturi optio
          reprehenderit
        </h4>
        <p style={{ marginLeft: "14px" }}>
          cupiditate quo est a modi nesciunt soluta ipsa voluptas error itaque
          dicta in autem qui minus magnam et distinctio eum accusamus ratione
          error aut
        </p>
      </div>
    </div>
  );
}

export default Details;
