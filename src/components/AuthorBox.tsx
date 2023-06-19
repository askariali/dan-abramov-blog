import clsx from "clsx";
import Image from "next/image";

type Props = {
  className?: string;
};

export default function AuthorBox(props: Props) {
  const { className } = props;
  return (
    <div className={clsx("flex items-start", className)}>
      <Image
        src="/images/dan.jpg"
        width={56}
        height={56}
        className="mr-3.5 rounded-full"
        alt="Dan Abramov picture"
      />
      <p className="max-w-[310px] text-textNormal">
        Personal blog by&nbsp;
        <a
          target="_blank"
          className="link"
          href="https://twitter.com/dan_abramov"
        >
          Dan Abramov
        </a>
        .
        <br />I explain with words and code.
      </p>
    </div>
  );
}
