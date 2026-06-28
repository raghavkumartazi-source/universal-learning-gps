import { NextResponse } from "next/server";
import { generateRoadmap } from "@/lib/roadmap";

export async function POST(request: Request) {
  const body = (await request.json()) as {
    goal?: string;
    skills?: string;
    weeklyHours?: number;
  };

  const roadmap = generateRoadmap(body.goal ?? "Software Engineer", body.skills ?? "", Math.max(1, body.weeklyHours ?? 8));
  return NextResponse.json(roadmap);
}
