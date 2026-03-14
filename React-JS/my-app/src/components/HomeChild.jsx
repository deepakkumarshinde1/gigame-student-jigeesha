import { memo } from "react";

function HomeChild({ result, incCount2 }) {
  return <div>HomeChild {result} </div>;
}

export default memo(HomeChild);

// memo => It is a higher-order component that allows you to optimize the
// performance of a component by preventing unnecessary re-renders. It does this
// by comparing the props of the component and only re-rendering if the props have
// changed. This is useful when you have a component that receives a lot of props
// and you want to avoid re-rendering it when the props haven't changed.

// value memorization => useMemo
// component memorization => memo
// function memorization => useCallback
