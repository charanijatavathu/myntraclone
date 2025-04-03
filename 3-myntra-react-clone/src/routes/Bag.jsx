import BagItems from "../components/BagItems";
import BagSummary from "../components/BagSummary";
import { useSelector } from "react-redux";
const Bag = () => {
  const bag = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);
  const finalitems = items.filter((item) => {
    const found = bag.indexOf(item.id);
    return found >= 0;
  });
  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {finalitems.map((item) => (
              <BagItems item={item} />
            ))}
          </div>
          <BagSummary />
        </div>
      </main>
    </>
  );
};
export default Bag;
