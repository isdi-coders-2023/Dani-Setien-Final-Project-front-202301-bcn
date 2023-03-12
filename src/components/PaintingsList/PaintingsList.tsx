import { useEffect } from "react";
import Masonry from "react-masonry-css";
import PaintingCard from "../PaintingCard/PaintingCard";
import usePaintings from "../../hooks/usePaintings/usePaintings";
import { useAppSelector } from "../../store/hooks";
import styles from "./PaintingsList.module.css";
import { masonryBreakpoints } from "../../utils/stylesUtils/breakpoints";

const PaintingsList = (): JSX.Element => {
  const { getPaintings } = usePaintings();
  const paintings = useAppSelector((state) => state.paintings);

  useEffect(() => {
    getPaintings();
  }, [getPaintings]);

  return (
    <Masonry
      breakpointCols={masonryBreakpoints}
      className={`${styles.paintings}`}
      columnClassName={`${styles.paintings__column}`}
    >
      {paintings.map((painting) => (
        <PaintingCard painting={painting} key={painting.id} />
      ))}
    </Masonry>
  );
};

export default PaintingsList;
