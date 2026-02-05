import React from "react"
import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { AdminHeader } from "@/components/admin/admin-header"

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect("/admin/login")
  }

  // Check admin role
  if (!user.user_metadata?.is_admin) {
    redirect("/admin/login")
  }

  return (
    <div className="min-h-screen bg-background">
      <AdminSidebar />
      <div className="lg:pl-64">
        <AdminHeader user={user} />
        <main className="p-6 lg:p-8">{children}</main>
      </div>
    </div>
  )
}
