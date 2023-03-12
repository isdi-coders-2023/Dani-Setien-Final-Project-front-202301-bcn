import { useEffect } from "react";
import PaintingCard from "../PaintingCard/PaintingCard";
import usePaintings from "../../hooks/usePaintings/usePaintings";
import { useAppSelector } from "../../store/hooks";

const PaintingsList = (): JSX.Element => {
  const { getPaintings } = usePaintings();
  const paintings = useAppSelector((state) => state.paintings);

  useEffect(() => {
    getPaintings();
  }, [getPaintings]);

  return (
    <ul className="paintings-list">
      {paintings.map((painting) => (
        <PaintingCard painting={painting} key={painting.id} />
      ))}
    </ul>
  );
};

export default PaintingsList;
