import Link from "next/link";

export default async function Home() {
  return (
    <div>
      Main
      <nav>
        <ul>
          <li>
            <Link href="/posts">리스트</Link>
          </li>
          <li>
            <Link href="/form">글쓰러가기</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
