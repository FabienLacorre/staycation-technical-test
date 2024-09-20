import { ApiStatus } from "../Types/ApiStatus";

export interface CustomSliceMetaData {
  apiStatus: ApiStatus;
}

export interface SliceDataList<T> {
  [id: string | number]: {
    data: T;
    metaData: Record<string, any>;
  };
}

export interface SliceData<T> {
  data: T;
  metaData: Record<string, any>;
}

export interface MultipleEntitiesCustomSlice<T> {
  idList: (number | string)[];
  metaData: Record<string, any>;
  dataMap: SliceDataList<T>;
}

export interface SingleEntityCustomSlice<T> {
  idList: (number | string)[];
  metaData: Record<string, any>;
  dataMap: SliceData<T>;
}
