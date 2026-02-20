import React from "react";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { AdminSidebar } from "@/components/admin/admin-sidebar";
import { AdminHeader } from "@/components/admin/admin-header";
import Link from "next/link";
import { cookies } from "next/headers";

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const isAdminAuth = cookieStore.get("admin_auth")?.value === "true";

  const supabase = await createClient();
  const {
    data: { user: supabaseUser },
  } = await supabase.auth.getUser();

  // Mock user for hardcoded admin
  const mockUser = {
    email: "admin@barakahagency.com",
    user_metadata: { is_admin: true },
  } as any;

  const user = isAdminAuth ? mockUser : supabaseUser;

  if (!user) {
    redirect("/admin/login");
  }

  // Check admin role
  if (!user.user_metadata?.is_admin) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-background">
      <AdminSidebar />
      <div className="lg:pl-64">
        <AdminHeader user={user} />
        <main className="p-6 lg:p-8 min-h-[calc(100vh-120px)]">{children}</main>
        <footer className="border-t py-6 px-8 text-center text-sm text-muted-foreground bg-white">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-7xl mx-auto">
            <p>
              &copy; {new Date().getFullYear()} Barakah Agency Admin. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/" className="hover:text-primary transition-colors">
                Website
              </Link>
              <Link
                href="/admin/support"
                className="hover:text-primary transition-colors"
              >
                Support
              </Link>
              <Link
                href="/admin/privacy"
                className="hover:text-primary transition-colors"
              >
                Privacy
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
