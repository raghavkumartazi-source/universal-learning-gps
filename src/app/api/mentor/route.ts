import { NextResponse } from "next/server";
import { generateMentorReply } from "@/lib/roadmap";

export async function POST(request: Request) {
  const body = (await request.json()) as { question?: string; goal?: string };
  const question = body.question?.trim() ?? "";
  const goal = body.goal ?? "your career goal";

  if (!question) {
    return NextResponse.json({ reply: "Please ask a question so I can help." }, { status: 400 });
  }

  return NextResponse.json({ reply: generateMentorReply(question, goal) });
}
