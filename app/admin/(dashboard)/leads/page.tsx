"use client"

import { useEffect, useState } from "react"
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
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
import { Eye, Trash2, Mail, Phone, Building2 } from "lucide-react"
import type { ContactLead } from "@/types"

const STATUS_COLORS: Record<string, "default" | "secondary" | "outline" | "destructive"> = {
  new: "default",
  contacted: "secondary",
  converted: "outline",
  closed: "destructive",
}

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<ContactLead[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedLead, setSelectedLead] = useState<ContactLead | null>(null)
  const supabase = createClient()

  useEffect(() => {
    fetchLeads()
  }, [])

  async function fetchLeads() {
    setLoading(true)
    const { data, error } = await supabase
      .from("contact_leads")
      .select("*")
      .order("created_at", { ascending: false })
    
    if (error) {
      console.error("Error fetching leads:", error)
    } else {
      setLeads(data || [])
    }
    setLoading(false)
  }

  async function updateStatus(id: string, status: string) {
    const { error } = await supabase
      .from("contact_leads")
      .update({ status })
      .eq("id", id)
    
    if (error) {
      console.error("Error updating lead:", error)
    } else {
      fetchLeads()
    }
  }

  async function deleteLead(id: string) {
    const { error } = await supabase
      .from("contact_leads")
      .delete()
      .eq("id", id)
    
    if (error) {
      console.error("Error deleting lead:", error)
    } else {
      fetchLeads()
    }
  }

  const newLeadsCount = leads.filter((l) => l.status === "new").length

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Contact Leads</h1>
        <p className="text-muted-foreground">
          Manage inquiries from your contact form
          {newLeadsCount > 0 && (
            <Badge variant="default" className="ml-2">
              {newLeadsCount} new
            </Badge>
          )}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{leads.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">New</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">
              {leads.filter((l) => l.status === "new").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Contacted</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {leads.filter((l) => l.status === "contacted").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Converted</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">
              {leads.filter((l) => l.status === "converted").length}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Leads</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
            </div>
          ) : leads.length === 0 ? (
            <div className="py-8 text-center text-muted-foreground">
              No contact leads yet.
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Service</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leads.map((lead) => (
                  <TableRow key={lead.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{lead.name}</div>
                        {lead.company && (
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Building2 className="h-3 w-3" />
                            {lead.company}
                          </div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center gap-1 text-sm">
                          <Mail className="h-3 w-3" />
                          {lead.email}
                        </div>
                        {lead.phone && (
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Phone className="h-3 w-3" />
                            {lead.phone}
                          </div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      {lead.service ? (
                        <Badge variant="secondary">{lead.service}</Badge>
                      ) : (
                        <span className="text-muted-foreground">-</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <Select
                        value={lead.status}
                        onValueChange={(value) => updateStatus(lead.id, value)}
                      >
                        <SelectTrigger className="w-32">
                          <SelectValue>
                            <Badge variant={STATUS_COLORS[lead.status] || "default"}>
                              {lead.status}
                            </Badge>
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new">New</SelectItem>
                          <SelectItem value="contacted">Contacted</SelectItem>
                          <SelectItem value="converted">Converted</SelectItem>
                          <SelectItem value="closed">Closed</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      {new Date(lead.created_at).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => setSelectedLead(lead)}
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Lead Details</DialogTitle>
                              <DialogDescription>
                                Contact inquiry from {lead.name}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div>
                                <div className="text-sm font-medium text-muted-foreground">Name</div>
                                <div>{lead.name}</div>
                              </div>
                              <div>
                                <div className="text-sm font-medium text-muted-foreground">Email</div>
                                <div>{lead.email}</div>
                              </div>
                              {lead.phone && (
                                <div>
                                  <div className="text-sm font-medium text-muted-foreground">Phone</div>
                                  <div>{lead.phone}</div>
                                </div>
                              )}
                              {lead.company && (
                                <div>
                                  <div className="text-sm font-medium text-muted-foreground">Company</div>
                                  <div>{lead.company}</div>
                                </div>
                              )}
                              {lead.service && (
                                <div>
                                  <div className="text-sm font-medium text-muted-foreground">Service Interest</div>
                                  <div>{lead.service}</div>
                                </div>
                              )}
                              <div>
                                <div className="text-sm font-medium text-muted-foreground">Message</div>
                                <div className="whitespace-pre-wrap rounded-md bg-muted p-3">
                                  {lead.message}
                                </div>
                              </div>
                              <div>
                                <div className="text-sm font-medium text-muted-foreground">Submitted</div>
                                <div>{new Date(lead.created_at).toLocaleString()}</div>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <Trash2 className="h-4 w-4 text-destructive" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Delete Lead</AlertDialogTitle>
                              <AlertDialogDescription>
                                Are you sure you want to delete this lead from {lead.name}? This action cannot be undone.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => deleteLead(lead.id)}
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
