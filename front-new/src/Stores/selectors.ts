import { useSelector } from "react-redux";
import { ConfigureStoreEntitiesList, RootState } from "./store";
import { MultipleEntitiesCustomSlice } from "./Slice";

export function useListSelector<T>(
  sliceName: keyof ConfigureStoreEntitiesList
): T[] {
  return useSelector((state: RootState) => {
    const slice = state[sliceName] as MultipleEntitiesCustomSlice<T>;
    return slice.idList.map((id) => {
      return slice.dataMap[id].data;
    });
  }) as T[];
}

export function useSelectorGlobalMetaData<T>(
  sliceName: keyof ConfigureStoreEntitiesList
) {
  return useSelector((state: RootState) => {
    const slice = state[sliceName] as MultipleEntitiesCustomSlice<T>;
    return slice.metaData;
  });
}
