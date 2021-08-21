import { Car } from "./car";
import { ResponseModel } from "./responseModel";

export interface listResponseModel<T> extends ResponseModel{
    data:T[];
}