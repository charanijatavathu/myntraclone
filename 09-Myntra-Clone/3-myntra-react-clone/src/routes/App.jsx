import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FetchItems from "../components/fetchItems";
import { useSelector } from "react-redux";
import Spinner from "../components/Spinner";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <Header />
      <FetchItems />
      {fetchStatus.fetchingDone ? <Outlet /> : <Spinner />}
      <Footer />
    </>
  );
}

export default App;
