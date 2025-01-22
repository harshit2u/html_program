import vas from '../assets/vas.jpeg';

const Image = () => {
  return (
    <div>
      <img src={vas} height="300" width="600" />
      <br />
      {/* You can also use the path with a variable */}
      <img src={vas} />
    </div>
  );
}

export default Image;

