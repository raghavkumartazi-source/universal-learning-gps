import type { RoadmapResult } from './roadmap';
// Matches the committed migration. Regenerate with Supabase CLI after schema changes.
export type PlanRow = { id: string; user_id: string; roadmap: RoadmapResult; completed: string[]; created_at: string };
export type Database = {
  public: {
    Tables: {
      learning_plans: {
        Row: PlanRow;
        Insert: { id?: string; user_id: string; roadmap: RoadmapResult; completed?: string[]; created_at?: string };
        Update: { roadmap?: RoadmapResult; completed?: string[] };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: { consume_mentor_quota: { Args: Record<string, never>; Returns: boolean } };
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
