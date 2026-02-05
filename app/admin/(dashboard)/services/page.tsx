"use client"

import React from "react"

import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
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
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
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
import { Plus, Pencil, Trash2, GripVertical, Save, Loader2 } from "lucide-react"
import type { Service } from "@/types"

interface ServiceFormData {
  name: string
  slug: string
  description: string
  icon: string
  features: string[]
  order_index: number
}

const defaultFormData: ServiceFormData = {
  name: "",
  slug: "",
  description: "",
  icon: "",
  features: [],
  order_index: 0,
}

export default function AdminServicesPage() {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editingService, setEditingService] = useState<Service | null>(null)
  const [formData, setFormData] = useState<ServiceFormData>(defaultFormData)
  const [featuresInput, setFeaturesInput] = useState("")
  const supabase = createClient()

  useEffect(() => {
    fetchServices()
  }, [])

  async function fetchServices() {
    setLoading(true)
    const { data, error } = await supabase
      .from("services")
      .select("*")
      .order("order_index", { ascending: true })
    
    if (error) {
      console.error("Error fetching services:", error)
    } else {
      setServices(data || [])
    }
    setLoading(false)
  }

  function generateSlug(name: string) {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
  }

  function handleNameChange(name: string) {
    setFormData((prev) => ({
      ...prev,
      name,
      slug: prev.slug || generateSlug(name),
    }))
  }

  function handleFeaturesChange(value: string) {
    setFeaturesInput(value)
    const features = value.split("\n").map((f) => f.trim()).filter(Boolean)
    setFormData((prev) => ({ ...prev, features }))
  }

  function openNewDialog() {
    setEditingService(null)
    setFormData({
      ...defaultFormData,
      order_index: services.length,
    })
    setFeaturesInput("")
    setDialogOpen(true)
  }

  function openEditDialog(service: Service) {
    setEditingService(service)
    setFormData({
      name: service.name,
      slug: service.slug,
      description: service.description || "",
      icon: service.icon || "",
      features: service.features || [],
      order_index: service.order_index,
    })
    setFeaturesInput((service.features || []).join("\n"))
    setDialogOpen(true)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)

    const serviceData = {
      ...formData,
      slug: formData.slug || generateSlug(formData.name),
    }

    if (editingService) {
      const { error } = await supabase
        .from("services")
        .update(serviceData)
        .eq("id", editingService.id)
      if (error) {
        console.error("Error updating service:", error)
        alert("Error updating service")
      } else {
        setDialogOpen(false)
        fetchServices()
      }
    } else {
      const { error } = await supabase.from("services").insert(serviceData)
      if (error) {
        console.error("Error creating service:", error)
        alert("Error creating service")
      } else {
        setDialogOpen(false)
        fetchServices()
      }
    }
    setSaving(false)
  }

  async function deleteService(id: string) {
    const { error } = await supabase
      .from("services")
      .delete()
      .eq("id", id)
    
    if (error) {
      console.error("Error deleting service:", error)
    } else {
      fetchServices()
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Services</h1>
          <p className="text-muted-foreground">Manage your service offerings</p>
        </div>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={openNewDialog}>
              <Plus className="mr-2 h-4 w-4" />
              Add Service
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <form onSubmit={handleSubmit}>
              <DialogHeader>
                <DialogTitle>
                  {editingService ? "Edit Service" : "Add Service"}
                </DialogTitle>
                <DialogDescription>
                  {editingService
                    ? "Update your service details"
                    : "Add a new service to your offerings"}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleNameChange(e.target.value)}
                      placeholder="Service name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="slug">Slug</Label>
                    <Input
                      id="slug"
                      value={formData.slug}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, slug: e.target.value }))
                      }
                      placeholder="service-slug"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, description: e.target.value }))
                    }
                    placeholder="Brief description of the service"
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="icon">Icon (Lucide icon name)</Label>
                  <Input
                    id="icon"
                    value={formData.icon}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, icon: e.target.value }))
                    }
                    placeholder="e.g., Palette, TrendingUp, Users"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="features">Features</Label>
                  <Textarea
                    id="features"
                    value={featuresInput}
                    onChange={(e) => handleFeaturesChange(e.target.value)}
                    placeholder="One feature per line"
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="order_index">Display Order</Label>
                  <Input
                    id="order_index"
                    type="number"
                    value={formData.order_index}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        order_index: parseInt(e.target.value) || 0,
                      }))
                    }
                    min={0}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={saving}>
                  {saving ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="mr-2 h-4 w-4" />
                      {editingService ? "Update" : "Create"}
                    </>
                  )}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Services ({services.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
            </div>
          ) : services.length === 0 ? (
            <div className="py-8 text-center text-muted-foreground">
              No services yet. Add your first service to get started.
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-10"></TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Slug</TableHead>
                  <TableHead>Features</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {services.map((service) => (
                  <TableRow key={service.id}>
                    <TableCell>
                      <GripVertical className="h-4 w-4 text-muted-foreground" />
                    </TableCell>
                    <TableCell className="font-medium">{service.name}</TableCell>
                    <TableCell className="text-muted-foreground">
                      {service.slug}
                    </TableCell>
                    <TableCell>
                      {service.features?.length || 0} features
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => openEditDialog(service)}
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <Trash2 className="h-4 w-4 text-destructive" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Delete Service</AlertDialogTitle>
                              <AlertDialogDescription>
                                Are you sure you want to delete &quot;{service.name}&quot;? This action cannot be undone.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => deleteService(service.id)}
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
