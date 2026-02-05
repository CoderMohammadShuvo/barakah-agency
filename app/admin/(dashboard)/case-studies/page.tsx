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
import { Plus, Pencil, Trash2, Eye, EyeOff, Star, StarOff } from "lucide-react"
import type { CaseStudy } from "@/types"

export default function AdminCaseStudiesPage() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([])
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    fetchCaseStudies()
  }, [])

  async function fetchCaseStudies() {
    setLoading(true)
    const { data, error } = await supabase
      .from("case_studies")
      .select("*")
      .order("created_at", { ascending: false })
    
    if (error) {
      console.error("Error fetching case studies:", error)
    } else {
      setCaseStudies(data || [])
    }
    setLoading(false)
  }

  async function togglePublish(caseStudy: CaseStudy) {
    const { error } = await supabase
      .from("case_studies")
      .update({ published: !caseStudy.published })
      .eq("id", caseStudy.id)
    
    if (error) {
      console.error("Error updating case study:", error)
    } else {
      fetchCaseStudies()
    }
  }

  async function toggleFeatured(caseStudy: CaseStudy) {
    const { error } = await supabase
      .from("case_studies")
      .update({ featured: !caseStudy.featured })
      .eq("id", caseStudy.id)
    
    if (error) {
      console.error("Error updating case study:", error)
    } else {
      fetchCaseStudies()
    }
  }

  async function deleteCaseStudy(id: string) {
    const { error } = await supabase
      .from("case_studies")
      .delete()
      .eq("id", id)
    
    if (error) {
      console.error("Error deleting case study:", error)
    } else {
      fetchCaseStudies()
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Case Studies</h1>
          <p className="text-muted-foreground">Showcase your client success stories</p>
        </div>
        <Button asChild>
          <Link href="/admin/case-studies/new">
            <Plus className="mr-2 h-4 w-4" />
            New Case Study
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Case Studies ({caseStudies.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
            </div>
          ) : caseStudies.length === 0 ? (
            <div className="py-8 text-center text-muted-foreground">
              No case studies yet. Create your first one to showcase your work.
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Industry</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {caseStudies.map((cs) => (
                  <TableRow key={cs.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        {cs.title}
                        {cs.featured && (
                          <Star className="h-4 w-4 fill-accent text-accent" />
                        )}
                      </div>
                    </TableCell>
                    <TableCell>{cs.client}</TableCell>
                    <TableCell>
                      {cs.industry ? (
                        <Badge variant="secondary">{cs.industry}</Badge>
                      ) : (
                        <span className="text-muted-foreground">-</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <Badge variant={cs.published ? "default" : "outline"}>
                        {cs.published ? "Published" : "Draft"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {new Date(cs.created_at).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => toggleFeatured(cs)}
                          title={cs.featured ? "Remove from featured" : "Add to featured"}
                        >
                          {cs.featured ? (
                            <StarOff className="h-4 w-4" />
                          ) : (
                            <Star className="h-4 w-4" />
                          )}
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => togglePublish(cs)}
                          title={cs.published ? "Unpublish" : "Publish"}
                        >
                          {cs.published ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                          <Link href={`/admin/case-studies/${cs.id}`}>
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
                              <AlertDialogTitle>Delete Case Study</AlertDialogTitle>
                              <AlertDialogDescription>
                                Are you sure you want to delete &quot;{cs.title}&quot;? This action cannot be undone.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => deleteCaseStudy(cs.id)}
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
