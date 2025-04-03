import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemActions } from "../store/itemSlice";
import { fetchStateActions } from "../store/fetchStateSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    if (fetchStatus.fethcingDone) return;
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchStateActions.markFetchingStarted());
    fetch("http://localhost:8080/items")
      .then((res) => res.json())
      .then(({ items }) => {
        // console.log("items fetched", items);
        dispatch(fetchStateActions.markFetchingDone());
        dispatch(fetchStateActions.markFetchingEnded());
        dispatch(itemActions.addInitalItems(items));
      });
    return () => {
      controller.abort();
    };
  }, [fetchStatus]);
  return <></>;
};
export default FetchItems;
