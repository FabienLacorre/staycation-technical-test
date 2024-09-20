import { useSelector } from "react-redux";
import { RootState } from "./store";
import { MultipleEntitiesCustomSlice } from "./Slice";

export function useListSelector<T>(sliceName: keyof RootState): T[] {
  return useSelector((state: RootState) => {
    const slice = state[sliceName] as MultipleEntitiesCustomSlice<T>;
    return slice.idList.map((id) => {
      return slice.dataMap[id].data;
    });
  }) as T[];
}
