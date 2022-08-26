import { useSelector } from "react-redux";

const Greeting = () => {
  const data = useSelector((state) => state);

  return <h1>{data ? data.greeting : "Loading..."}</h1>;
}

export default Greeting;
