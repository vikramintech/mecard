import api from "../api";
const ShowImage = ({ data }) => {
  return (
    <div>
      <img src={api(data)} alt={data} />
    </div>
  );
};
export default ShowImage;