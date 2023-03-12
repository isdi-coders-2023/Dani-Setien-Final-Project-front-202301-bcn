import Image from "next/image";
import { MdEdit } from "react-icons/md";
import { GrClose } from "react-icons/gr";
import { CiHeart } from "react-icons/ci";
import { Painting } from "../../types/paintingTypes";
import Button from "../Button/Button";
import { ariaLabels } from "../../utils/componentUtils/componentUtils";

const painting1 = {
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
    "https://icqwpkxwddqofeibjqcj.supabase.co/storage/v1/object/public/paitings/newLineUp.png?t=2023-03-11T16%3A09%3A57.512Z",
};

interface PaintingCardProps {
  painting: Painting;
}

const PaintingCard = ({
  painting: { image, name, id, author, year, price, bidCount },
}: PaintingCardProps): JSX.Element => {
  const { buttonEdit, buttonDelete } = ariaLabels;

  return (
    <li key={id}>
      <Image src={image} alt={name} />
      <Button ariaLabel={buttonEdit} icon={<MdEdit />} disabled={false} />
      <Button ariaLabel={buttonDelete} icon={<GrClose />} disabled={false} />
      <section>
        <div>
          <span>{author}</span>
          <CiHeart />
        </div>
        <span>{`${name}, ${year}`}</span>
        <span>{`${price} ${bidCount && `(${bidCount} bids)`}`}</span>
      </section>
    </li>
  );
};

export default PaintingCard;
