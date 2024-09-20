import { ApiStatus } from "../Types/ApiStatus";

export interface CustomSliceMetaData {
  apiStatus: ApiStatus;
}

export interface CustomMetaData {
  apiStatus: ApiStatus;
}

export interface SliceDataList<T> {
  [id: string | number]: {
    data: T;
    metaData: CustomMetaData;
  };
}

export interface MultipleEntitiesCustomSlice<T> {
  idList: (number | string)[];
  metaData: CustomMetaData;
  dataMap: SliceDataList<T>;
}

export interface SingleEntityCustomSlice<T> {
  data: T;
  metaData: CustomMetaData;
}
