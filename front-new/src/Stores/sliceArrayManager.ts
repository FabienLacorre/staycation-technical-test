import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit";
import { ApiStatus } from "../Types/ApiStatus";
import { MultipleEntitiesCustomSlice } from "./Slice";
import { forOwn } from "lodash";

function addFullfilledCaseForList<T>(
  state: MultipleEntitiesCustomSlice<T>,
  action: PayloadAction<T>
) {

  console.log(action);
  const idList = (action.payload as T[]).map((item: any) => item.id);

  // ID LIST
  state.idList = idList;
  // DATA
  state.dataMap = (action.payload as T[]).reduce((acc: any, item: any) => {
    acc[item.id] = {
      data: item,
      metaData: {
        apiStatus: ApiStatus.SUCCEEDED,
      },
    };
    return acc;
  }, {});
  // METADATA
  state.metaData = {
    apiStatus: ApiStatus.SUCCEEDED,
  };
}

function addPendingCaseMultipleEntities<T>(
  state: MultipleEntitiesCustomSlice<T>,
  _action: any
) {
  // DATA
  forOwn(state.dataMap, (_, key) => {
    state.dataMap[key].metaData = {
      apiStatus: ApiStatus.LOADING,
    };
  });
  // METADATA
  state.metaData = {
    apiStatus: ApiStatus.LOADING,
  };
}

function addRejectedCaseMultipleEntities<T>(
  state: MultipleEntitiesCustomSlice<T>,
  action: any
) {
  state.idList = [];
  state.dataMap = {};
  state.metaData = {
    apiStatus: ApiStatus.FAILED,
  };
}

export function addFetchCaseForList<T>(
  builder: ActionReducerMapBuilder<MultipleEntitiesCustomSlice<T>>,
  fetchFunction: any
) {
  builder.addCase(fetchFunction.pending, addPendingCaseMultipleEntities);
  builder.addCase(fetchFunction.fulfilled, addFullfilledCaseForList);
  builder.addCase(fetchFunction.rejected, addRejectedCaseMultipleEntities);
}
