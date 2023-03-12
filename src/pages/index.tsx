import { useEffect } from "react";
import PaintingCard from "../components/PaintingCard/PaintingCard";
import useToken from "../hooks/useToken/useToken";
import { Painting } from "../types/paintingTypes";

const painting1: Painting = {
  id: "1",
  author: "Mary Heilmann",
  name: "New Line Up",
  year: "2018",
  gallery: "Private collection",
  technique: "Oil on canvas",
  size: "40 x 50 in",
  medium: "Painting",
  materials: "Oil paint, canvas",
  unique: true,
  certificate: true,
  rarity: "unique",
  condition: "excellent",
  signature: true,
  price: 28000,
  frame: false,
  highlightOrder: 1,
  summary: "Colorful abstract painting with horizontal lines and curved shapes",
  image:
    "https://icqwpkxwddqofeibjqcj.supabase.co/storage/v1/object/public/paitings/newLineUp.png?t=2023-03-12T13%3A23%3A46.999Z",
};

const Home = (): JSX.Element => {
  const { fetchToken } = useToken();

  useEffect(() => {
    fetchToken();
  }, [fetchToken]);

  return <></>;
};

export default Home;
