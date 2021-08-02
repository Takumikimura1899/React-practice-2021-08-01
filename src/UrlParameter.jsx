import { useParams, useLocation } from 'react-router-dom';

const UrlParameter = () => {
  const { id } = useParams();
  // const location = useLocation();
  // console.log(location);
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  return (
    <div>
      <h1>UrlParameter</h1>
      <p>{id}</p>
      <p>{query.get('name')}</p>
    </div>
  );
};

export default UrlParameter;
