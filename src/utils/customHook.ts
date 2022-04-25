import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {AppDispatch, AppRootStateType} from "../store/config/index";

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
export const useAppDispatch = (): Dispatch => useDispatch<AppDispatch>()
