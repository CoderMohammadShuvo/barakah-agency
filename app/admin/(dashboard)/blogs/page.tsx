"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Plus, Pencil, Trash2, Eye, EyeOff } from "lucide-react"
import type { Blog } from "@/types"

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    fetchBlogs()
  }, [])

  async function fetchBlogs() {
    setLoading(true)
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .order("created_at", { ascending: false })
    
    if (error) {
      console.error("Error fetching blogs:", error)
    } else {
      setBlogs(data || [])
    }
    setLoading(false)
  }

  async function togglePublish(blog: Blog) {
    const { error } = await supabase
      .from("blogs")
      .update({ published: !blog.published })
      .eq("id", blog.id)
    
    if (error) {
      console.error("Error updating blog:", error)
    } else {
      fetchBlogs()
    }
  }

  async function deleteBlog(id: string) {
    const { error } = await supabase
      .from("blogs")
      .delete()
      .eq("id", id)
    
    if (error) {
      console.error("Error deleting blog:", error)
    } else {
      fetchBlogs()
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Blog Posts</h1>
          <p className="text-muted-foreground">Manage your blog content</p>
        </div>
        <Button asChild>
          <Link href="/admin/blogs/new">
            <Plus className="mr-2 h-4 w-4" />
            New Post
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Posts ({blogs.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
            </div>
          ) : blogs.length === 0 ? (
            <div className="py-8 text-center text-muted-foreground">
              No blog posts yet. Create your first post to get started.
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {blogs.map((blog) => (
                  <TableRow key={blog.id}>
                    <TableCell className="font-medium">{blog.title}</TableCell>
                    <TableCell>
                      {blog.category ? (
                        <Badge variant="secondary">{blog.category}</Badge>
                      ) : (
                        <span className="text-muted-foreground">-</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <Badge variant={blog.published ? "default" : "outline"}>
                        {blog.published ? "Published" : "Draft"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {new Date(blog.created_at).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => togglePublish(blog)}
                          title={blog.published ? "Unpublish" : "Publish"}
                        >
                          {blog.published ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                          <Link href={`/admin/blogs/${blog.id}`}>
                            <Pencil className="h-4 w-4" />
                          </Link>
                        </Button>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <Trash2 className="h-4 w-4 text-destructive" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Delete Blog Post</AlertDialogTitle>
                              <AlertDialogDescription>
                                Are you sure you want to delete &quot;{blog.title}&quot;? This action cannot be undone.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => deleteBlog(blog.id)}
                                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                              >
                                Delete
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
