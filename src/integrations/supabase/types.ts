export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      blogs: {
        Row: {
          author: string
          category: string
          content: string | null
          created_at: string | null
          excerpt: string | null
          id: string
          image_url: string | null
          published_at: string | null
          status: Database["public"]["Enums"]["content_status"] | null
          title: string
          updated_at: string | null
          views: number | null
        }
        Insert: {
          author: string
          category: string
          content?: string | null
          created_at?: string | null
          excerpt?: string | null
          id?: string
          image_url?: string | null
          published_at?: string | null
          status?: Database["public"]["Enums"]["content_status"] | null
          title: string
          updated_at?: string | null
          views?: number | null
        }
        Update: {
          author?: string
          category?: string
          content?: string | null
          created_at?: string | null
          excerpt?: string | null
          id?: string
          image_url?: string | null
          published_at?: string | null
          status?: Database["public"]["Enums"]["content_status"] | null
          title?: string
          updated_at?: string | null
          views?: number | null
        }
        Relationships: []
      }
      contact_submissions: {
        Row: {
          created_at: string
          email: string
          id: string
          message: string
          name: string
          phone: string | null
          status: string | null
          subject: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          message: string
          name: string
          phone?: string | null
          status?: string | null
          subject: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
          phone?: string | null
          status?: string | null
          subject?: string
          updated_at?: string
        }
        Relationships: []
      }
      content: {
        Row: {
          author: string
          content: string | null
          created_at: string | null
          id: string
          status: Database["public"]["Enums"]["content_status"] | null
          title: string
          updated_at: string | null
        }
        Insert: {
          author: string
          content?: string | null
          created_at?: string | null
          id?: string
          status?: Database["public"]["Enums"]["content_status"] | null
          title: string
          updated_at?: string | null
        }
        Update: {
          author?: string
          content?: string | null
          created_at?: string | null
          id?: string
          status?: Database["public"]["Enums"]["content_status"] | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      job_applications: {
        Row: {
          applied_date: string | null
          cover_letter: string | null
          created_at: string | null
          email: string
          first_name: string
          id: string
          job_id: string | null
          last_name: string
          phone: string | null
          resume_file_name: string | null
          status: Database["public"]["Enums"]["application_status"] | null
          updated_at: string | null
        }
        Insert: {
          applied_date?: string | null
          cover_letter?: string | null
          created_at?: string | null
          email: string
          first_name: string
          id?: string
          job_id?: string | null
          last_name: string
          phone?: string | null
          resume_file_name?: string | null
          status?: Database["public"]["Enums"]["application_status"] | null
          updated_at?: string | null
        }
        Update: {
          applied_date?: string | null
          cover_letter?: string | null
          created_at?: string | null
          email?: string
          first_name?: string
          id?: string
          job_id?: string | null
          last_name?: string
          phone?: string | null
          resume_file_name?: string | null
          status?: Database["public"]["Enums"]["application_status"] | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "job_applications_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "job_positions"
            referencedColumns: ["id"]
          },
        ]
      }
      job_positions: {
        Row: {
          applications_count: number | null
          benefits: string[] | null
          created_at: string | null
          department: string
          description: string
          id: string
          location: string
          posted_date: string | null
          requirements: string[] | null
          salary: string | null
          status: Database["public"]["Enums"]["content_status"] | null
          title: string
          type: Database["public"]["Enums"]["job_type"]
          updated_at: string | null
        }
        Insert: {
          applications_count?: number | null
          benefits?: string[] | null
          created_at?: string | null
          department: string
          description: string
          id?: string
          location: string
          posted_date?: string | null
          requirements?: string[] | null
          salary?: string | null
          status?: Database["public"]["Enums"]["content_status"] | null
          title: string
          type: Database["public"]["Enums"]["job_type"]
          updated_at?: string | null
        }
        Update: {
          applications_count?: number | null
          benefits?: string[] | null
          created_at?: string | null
          department?: string
          description?: string
          id?: string
          location?: string
          posted_date?: string | null
          requirements?: string[] | null
          salary?: string | null
          status?: Database["public"]["Enums"]["content_status"] | null
          title?: string
          type?: Database["public"]["Enums"]["job_type"]
          updated_at?: string | null
        }
        Relationships: []
      }
      projects: {
        Row: {
          category: string
          client: string | null
          created_at: string | null
          description: string | null
          id: string
          image_url: string | null
          live_url: string | null
          status: Database["public"]["Enums"]["project_status"] | null
          title: string
          updated_at: string | null
        }
        Insert: {
          category: string
          client?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          live_url?: string | null
          status?: Database["public"]["Enums"]["project_status"] | null
          title: string
          updated_at?: string | null
        }
        Update: {
          category?: string
          client?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          live_url?: string | null
          status?: Database["public"]["Enums"]["project_status"] | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      services: {
        Row: {
          category: string
          created_at: string | null
          description: string | null
          id: string
          status: Database["public"]["Enums"]["content_status"] | null
          title: string
          updated_at: string | null
        }
        Insert: {
          category: string
          created_at?: string | null
          description?: string | null
          id?: string
          status?: Database["public"]["Enums"]["content_status"] | null
          title: string
          updated_at?: string | null
        }
        Update: {
          category?: string
          created_at?: string | null
          description?: string | null
          id?: string
          status?: Database["public"]["Enums"]["content_status"] | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      testimonials: {
        Row: {
          company: string
          content: string
          created_at: string
          id: string
          image_url: string | null
          name: string
          position: string
          rating: number
          status: string | null
          updated_at: string
        }
        Insert: {
          company: string
          content: string
          created_at?: string
          id?: string
          image_url?: string | null
          name: string
          position: string
          rating?: number
          status?: string | null
          updated_at?: string
        }
        Update: {
          company?: string
          content?: string
          created_at?: string
          id?: string
          image_url?: string | null
          name?: string
          position?: string
          rating?: number
          status?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      users: {
        Row: {
          created_at: string | null
          email: string
          id: string
          last_login: string | null
          name: string
          role: string | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: string
          last_login?: string | null
          name: string
          role?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          last_login?: string | null
          name?: string
          role?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      application_status:
        | "pending"
        | "reviewed"
        | "interviewed"
        | "rejected"
        | "hired"
      content_status: "draft" | "published" | "archived"
      job_type: "full-time" | "part-time" | "contract" | "internship"
      project_status: "planning" | "in-progress" | "completed" | "on-hold"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      application_status: [
        "pending",
        "reviewed",
        "interviewed",
        "rejected",
        "hired",
      ],
      content_status: ["draft", "published", "archived"],
      job_type: ["full-time", "part-time", "contract", "internship"],
      project_status: ["planning", "in-progress", "completed", "on-hold"],
    },
  },
} as const
