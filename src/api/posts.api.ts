import { Post } from "@/types";
import subDate from "date-fns/sub";
import formatDate from "date-fns/format";
import compareDesc from "date-fns/compareDesc";

const getAllPosts = async (): Promise<Post[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await response.json();
  return posts
    .map((post) => ({
      ...post,
      date: formatDate(
        subDate(new Date(), {
          months: Math.floor(Math.random() * 13) + 1,
          days: Math.floor(Math.random() * 31) + post.id,
          years: 1,
        }),
        "MMMM dd, yyyy"
      ),
    }))
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
};

export default { getAllPosts };
