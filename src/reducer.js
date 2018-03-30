import OFFLINE_IMAGES from './constants';
import { REHYDRATE } from 'redux-persist/constants';

const initialState = {
  uris: {}
};

const offlineImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case OFFLINE_IMAGES.DOWNLOAD_IMAGE_OFFLINE_SUCCESS:
      return {
        ...state,
        uris: {
          ...state.uris,
          [action.payload.uri]: action.payload.localImageFilePath,
        }
      };
    case REHYDRATE:
      const rehydratedState = action.payload.offlineImageReducer;
      if (rehydratedState) {
        return {
          ...state,
          ...rehydratedState,
        };
      }
      return { ...state };
    default:
      return { ...state }
  }
};

export default offlineImageReducer;