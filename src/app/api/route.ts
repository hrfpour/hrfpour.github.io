import { NextResponse } from "next/server";

// Static-compatible route handler (required for GitHub Pages export builds)
export const dynamic = "force-static";

export async function GET() {
  return NextResponse.json({ message: "Hello, world!" });
}