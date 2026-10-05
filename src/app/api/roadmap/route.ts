import { generateRoadmap } from '@/lib/roadmap';
import { readJson, parseRoadmap, apiError } from '@/lib/api-input';
export async function POST(request: Request) {
  try {
    const { goal, skills, weeklyHours } = parseRoadmap(await readJson(request));
    return Response.json(generateRoadmap(goal, skills, weeklyHours));
  } catch (error) { return apiError(error); }
}
