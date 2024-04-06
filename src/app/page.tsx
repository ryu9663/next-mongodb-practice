import { GithubLoginBtn } from "@/components/auth/GithubLoginBtn";
import { LogoutBtn } from "@/components/auth/LogoutBtn";
import { Profile } from "@/components/Profile";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Home() {
  const user = await getServerSession(authOptions);
  return (
    <div>
      {user && <Profile user={user} />}
      <nav>
        <ul>
          <li>
            <Link href="/posts">리스트</Link>
          </li>
          <li>
            <Link href="/form">글쓰러가기</Link>
          </li>
          <li>{user ? <LogoutBtn /> : <GithubLoginBtn />}</li>
        </ul>
      </nav>
    </div>
  );
}
