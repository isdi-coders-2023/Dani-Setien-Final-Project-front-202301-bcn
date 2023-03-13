import { useCallback } from "react";
import fetch from "node-fetch";
import displayErrorModal from "../../utils/componentUtils/modals/errorModal";
import { loadPaintingsActionCreator } from "../../store/features/paintingsSlice/paintingsSlice";
import { useAppDispatch } from "../../store/hooks";
import { backRouteUtils } from "../../utils/routeUtils/routeUtils";
import { BackPaintingsResponse } from "./types";

interface UsePaintingsStructure {
  getPaintings: () => Promise<void>;
}

const usePaintings = () => {
  const dispatch = useAppDispatch();

  const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL!;
  const { paintingsEndpoint } = backRouteUtils;

  const getPaintings = useCallback(async () => {
    try {
      const response = await fetch(`${apiUrl}${paintingsEndpoint}`);

      const paintingsFromApi = (await response.json()) as BackPaintingsResponse;

      dispatch(loadPaintingsActionCreator(paintingsFromApi.paintings));
    } catch (error: unknown) {
      displayErrorModal((error as Error).message);
    }
  }, [apiUrl, dispatch, paintingsEndpoint]);

  return { getPaintings };
};

export default usePaintings;
