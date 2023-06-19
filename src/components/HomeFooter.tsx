export default function HomeFooter() {
  return (
    <footer className="mt-16 flex items-center justify-between">
      <ul className="flex items-center gap-x-2 mr-2">
        <li>
          <a
            className="link"
            href="https://mobile.twitter.com/dan_abramov"
            target="_blank"
            rel="noopener noreferrer"
          >
            twitter
          </a>
        </li>
        <li>
          <a
            className="link"
            href="https://github.com/gaearon"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
        </li>
        <li>
          <a
            className="link"
            href="https://stackoverflow.com/users/458193/dan-abramov"
            target="_blank"
            rel="noopener noreferrer"
          >
            stack overflow
          </a>
        </li>
      </ul>
      <a
        className="link"
        href="/rss.xml"
        target="_blank"
        rel="noopener noreferrer"
      >
        rss
      </a>
    </footer>
  );
}
