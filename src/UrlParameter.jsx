import { useParams } from 'react-router-dom';

const UrlParameter = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>UrlParameter</h1>
      <p>{id}</p>
    </div>
  );
};

export default UrlParameter;
