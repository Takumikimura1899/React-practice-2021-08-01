import { useLocation } from 'react-router-dom';

const Page1DetailA = () => {
  // const location = useLocation();
  // console.log(location);
  const { state } = useLocation();
  console.log(state);
  return (
    <div>
      <h1>Page1DetailA</h1>
    </div>
  );
};

export default Page1DetailA;
