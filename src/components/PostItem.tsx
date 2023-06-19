import Link from "next/link";

type Props = { id: number; title: string; date: string };
export default function PostItem(props:Props) {
    const {id, title, date} = props
  return (
    <article className="mb-7">
      <header className="mb-2">
        <h3 className="font-montserrat font-black text-2xl text-textLink">
          <Link prefetch={false} href={`/${id}`}>
            {title}
          </Link>
        </h3>
        <small className="text-textNormal">
          {date} • ☕️☕️☕️☕️ {Math.floor(Math.random() * 11) + 1} min
          read
        </small>
      </header>
      <p className="text-textNormal">{title}</p>
    </article>
  );
}
