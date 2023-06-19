import { PostApi } from "@/api";
import { AuthorBox, HomeFooter, PostItem } from "@/components";
import Link from "next/link";

export default async function Home() {
  const posts = await PostApi.getAllPosts();

  return (
    <>
      <aside className="mb-14">
        <AuthorBox />
      </aside>
      <main>
        {posts.map((post) => (
          <PostItem key={post.id} title={post.title} date={post.date} id={post.id} />
        ))}
      </main>
      <HomeFooter />
    </>
  );
}
