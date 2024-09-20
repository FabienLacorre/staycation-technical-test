import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { SingleEntityCustomSlice } from "./Slice";
import { ApiStatus } from "../Types/ApiStatus";

function addFullfilledCaseForSingle<T>(
  state: SingleEntityCustomSlice<T>,
  action: any
) {
  state.data = action.payload;
  state.metaData.apiStatus = ApiStatus.SUCCEEDED;
}

function addPendingCaseSingle<T>(
  state: SingleEntityCustomSlice<T>,
  _action: any
) {
  state.metaData.apiStatus = ApiStatus.LOADING;
}

function addRejectedCaseSingle<T>(
  state: SingleEntityCustomSlice<T>,
  _action: any
) {
  state.data = {} as T;
  state.metaData.apiStatus = ApiStatus.FAILED;
}

export function addFetchCaseForSingle<T>(
  builder: ActionReducerMapBuilder<SingleEntityCustomSlice<T>>,
  fetchFunction: any
) {
  builder.addCase(fetchFunction.pending, addPendingCaseSingle);
  builder.addCase(fetchFunction.fulfilled, addFullfilledCaseForSingle);
  builder.addCase(fetchFunction.rejected, addRejectedCaseSingle);
}
