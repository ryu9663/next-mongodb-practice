import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, raw: true });

  //   NextResponse.next(); // 통과
  //   NextResponse.redirect(); // 주소창 변경하며 페이지 이동
  //   NextResponse.rewrite(); // 주소창 url 변경 안하고 페이지 이동

  if (req.nextUrl.pathname === "/form") {
    if (token === null) {
      return NextResponse.redirect("http://localhost:3000/api/auth/signin");
    }
  }
  return NextResponse.next();
}
