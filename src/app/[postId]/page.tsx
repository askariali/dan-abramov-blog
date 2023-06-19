import { AuthorBox, CodeHighlighter, PostAside } from "@/components";
import Link from "next/link";

type Props = { params: { postId: string } };

export default function Post(props: Props) {
  const { params } = props;

  return (
    <main>
      <article className="text-textNormal">
        <header className="mb-7">
          <h1 className="text-textTitle font-black text-4xl font-montserrat mb-3">
            Why Do React Hooks Rely on Call Order?
          </h1>
          <p className="text-xs">
            December 13, 2018 • ☕️☕️☕️☕️ 20 min read
          </p>
        </header>
        <div className="[&>p]:mb-7">
          <p>
            When you read the docs, don’t miss
            <a
              href="https://reactjs.org/docs/hooks-custom.html"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              the most important page
            </a>
            about building your own Hooks! Too many people get fixated on some
            part of our messaging they disagree with (e.g. that learning classes
            is difficult) and miss the bigger picture behind Hooks. And the
            bigger picture is that
          </p>
          <p>
            Hooks
            <a
              href="https://reactjs.org/docs/hooks-faq.html#what-is-the-prior-art-for-hooks"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              are influenced by some prior art
            </a>
            but I haven’t seen anything <em>quite</em> like them until Sebastian
            shared his idea with the team. Unfortunately, it’s easy to overlook
            the connection between the specific API choices and the valuable
            properties unlocked by this design. With this post I hope to help
            more people understand the rationale for the most controversial
            aspect of Hooks proposal.
          </p>
          <p>
            <strong>
              The rest of this post assumes you know the
              <code className="language-text">useState()</code> Hook API and how
              to write a custom Hook. If you don’t, check out the earlier links.
              Also, keep in mind Hooks are experimental and you don’t have to
              learn them right now!
            </strong>
          </p>
          <p>
            (Disclaimer: this is a personal post and doesn’t necessarily reflect
            the opinions of the React team. It’s large, the topic is complex,
            and I may have made mistakes somewhere.)
          </p>
          <hr className="bg-gray-600/20 mb-7" />
          <p>
            The first and probably the biggest shock when you learn about Hooks
            is that they rely on{" "}
            <em>persistent call index between re-renders</em>. This has some
            <a
              href="https://reactjs.org/docs/hooks-rules.html"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              implications
            </a>
            .
          </p>
          <p>
            This decision is obviously controversial. This is why,
            <a
              href="https://www.reddit.com/r/reactjs/comments/9xs2r6/sebmarkbages_response_to_hooks_rfc_feedback/e9wh4um/"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              against our principles
            </a>
            , we only published this proposal after we felt the documentation
            and talks describe it well enough for people to give it a fair
            chance.
          </p>
          <p>
            <strong>
              If you’re concerned about some aspects of the Hooks API design, I
              encourage you to read Sebastian’s
              <a
                href="https://github.com/reactjs/rfcs/pull/68#issuecomment-439314884"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                full response
              </a>
              to the 1,000+ comment RFC discussion.
            </strong>
            It is thorough but also quite dense. I could probably turn every
            paragraph of this comment into its own blog post. (In fact, I
            already
            <a href="/how-does-setstate-know-what-to-do/">did</a> that once!)
          </p>
          <p>
            There is one specific part that I’d like to focus on today. As you
            may recall, each Hook can be used in a component more than once. For
            example, we can declare
            <a
              href="https://reactjs.org/docs/hooks-state.html#tip-using-multiple-state-variables"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              multiple state variables
            </a>
            by calling <code className="language-text">useState()</code>{" "}
            repeatedly:
          </p>
          <CodeHighlighter className="mb-7">
            {`
function Form() {
  const [name, setName] = useState('Mary');              // State variable 1
  const [surname, setSurname] = useState('Poppins');     // State variable 2
  const [width, setWidth] = useState(window.innerWidth); // State variable 3

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleSurnameChange(e) {
    setSurname(e.target.value);
  }

  return (
    <>
      <input value={name} onChange={handleNameChange} />
      <input value={surname} onChange={handleSurnameChange} />
      <p>Hello, {name} {surname}</p>
      <p>Window width: {width}</p>
    </>
  );
}
            `}
          </CodeHighlighter>
          <p>
            Note that we use array destructuring syntax to name
            <code className="language-text">useState()</code> state variables
            but these names are not passed to React. Instead, in this example
            <strong>
              React treats <code className="language-text">name</code> as “the
              first state variable”,{" "}
              <code className="language-text">surname</code> as “the second
              state variable”, and so on
            </strong>
            . Their <em>call index</em> is what gives them a stable identity
            between re-renders. This mental model is well-described
            <a
              href="https://medium.com/@ryardley/react-hooks-not-magic-just-arrays-cd4f1857236e"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              in this article
            </a>
            .
          </p>
          <p>
            On a surface level, relying on the call index just{" "}
            <em>feels wrong</em>. A gut feeling is a useful signal but it can be
            misleading — especially if we haven’t fully internalized the problem
            we’re solving.
            <strong>
              In this post, I’ll take a few commonly suggested alternative
              designs for Hooks and show where they break down.
            </strong>
          </p>
        </div>
        <PostAside postId={+params.postId} />
      </article>
    </main>
  );
}
