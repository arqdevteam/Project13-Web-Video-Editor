import { CROP_START, CROP_CANCEL, CROP_CONFIRM, CROP } from '../actionTypes';
import { CropAction } from './actions';

export interface CropState {
  isCrop: boolean;
  isCropConfirm: boolean;
}

const initialState: CropState = {
  isCrop: false,
  isCropConfirm: false,
};

export default (
  state: CropState = initialState,
  action: CropAction
): CropState => {
  switch (action.type) {
    case CROP_START:
      return {
        ...state,
        isCrop: true,
      };
    case CROP_CANCEL:
      return {
        ...state,
        isCrop: false,
      };
    case CROP_CONFIRM:
      return {
        ...state,
        isCropConfirm: true,
      };
    case CROP:
      return {
        ...state,
        isCropConfirm: false,
      };
    default:
      return state;
  }
};
