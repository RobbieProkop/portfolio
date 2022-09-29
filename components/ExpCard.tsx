import Image from "next/image";
import monk from "../asset/images/monk.jpeg";

type Props = {};
const ExpCard = (props: Props) => {
  return (
    <article>
      <div className="h-32 w-32 xl:w-[200px] xl:h-[200px]">
        <Image
          src={monk}
          objectFit="cover"
          objectPosition="center"
          className="rounded-full"
        />
      </div>
    </article>
  );
};
export default ExpCard;
