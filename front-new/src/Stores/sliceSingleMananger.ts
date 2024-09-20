import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { ApiStatus } from "../Types/ApiStatus";
import { MultipleEntitiesCustomSlice } from "./Slice";
import { orderBy } from "lodash";

export function addFetchCasesForMultipleEntitiesStoreWithCache<T>(
  builder: ActionReducerMapBuilder<MultipleEntitiesCustomSlice<T>>,
  fetchFunction: any
) {
  builder.addCase(fetchFunction.pending, () => {});
  builder.addCase(fetchFunction.fulfilled, () => {});
  builder.addCase(fetchFunction.rejected, () => {});
}
