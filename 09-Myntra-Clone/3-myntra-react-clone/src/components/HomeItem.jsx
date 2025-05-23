import { useDispatch, useSelector } from "react-redux";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { bagActions } from "../store/bagSlice";
const HomeItem = ({ item }) => {
  const bag = useSelector((store) => store.bag);
  const itemFound = bag.indexOf(item.id) >= 0;
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(bagActions.addToBag(item.id));
  };
  const handleRemove = () => {
    dispatch(bagActions.deleteFromBag(item.id));
  };
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {itemFound ? (
        <button
          className="btn btn-danger btn-add-bag"
          onClick={() => handleRemove()}
        >
          <MdDeleteOutline />
          Remove
        </button>
      ) : (
        <button
          className="btn btn-success btn-add-bag"
          onClick={() => handleAdd()}
        >
          <IoMdAddCircleOutline />
          Add to Bag
        </button>
      )}
    </div>
  );
};
export default HomeItem;
