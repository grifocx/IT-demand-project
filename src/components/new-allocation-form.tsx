"use client";

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

type UserOption = { id: string; name: string; email: string };
type ProjectOption = { id: string; name: string };
type DemandOption = { id: string; title: string };

export function NewAllocationForm({
  users,
  projects,
  demands,
}: {
  users: UserOption[];
  projects: ProjectOption[];
  demands: DemandOption[];
}) {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState<string | null>(null);

  const onSubmit = async (formData: FormData) => {
    setError(null);
    setSuccess(null);

    const userId = String(formData.get('userId') || '');
    const projectId = String(formData.get('projectId') || '');
    const demandIdRaw = String(formData.get('demandId') || '');
    const startDate = String(formData.get('startDate') || '');
    const endDate = String(formData.get('endDate') || '');
    const allocatedHours = Number(formData.get('allocatedHours'));
    const role = String(formData.get('role') || 'Contributor');

    if (!userId || !projectId || !startDate || !endDate || isNaN(allocatedHours)) {
      setError('Please fill all required fields.');
      return;
    }
    if (allocatedHours < 0) {
      setError('Allocated hours must be greater than or equal to 0.');
      return;
    }

    const payload: any = {
      userId,
      projectId,
      startDate,
      endDate,
      allocatedHours,
      role,
    };
    if (demandIdRaw) payload.demandId = demandIdRaw;

    setLoading(true);
    try {
      const res = await fetch('/api/allocations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Failed to create allocation');
      }
      setSuccess('Allocation created');
      setTimeout(() => {
        router.push('/resources');
      }, 600);
    } catch (e: any) {
      setError(e.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form action={onSubmit} className="space-y-6">
      {error && (
        <div className="rounded-md border border-destructive/50 bg-destructive/10 px-3 py-2 text-sm text-destructive">
          {error}
        </div>
      )}
      {success && (
        <div className="rounded-md border border-emerald-500/50 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-600">
          {success}
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="userId">User</Label>
          <select id="userId" name="userId" className="w-full rounded-md border bg-background px-3 py-2 text-sm" required>
            <option value="">Select a user</option>
            {users.map((u) => (
              <option key={u.id} value={u.id}>
                {u.name} ({u.email})
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="projectId">Project</Label>
          <select id="projectId" name="projectId" className="w-full rounded-md border bg-background px-3 py-2 text-sm" required>
            <option value="">Select a project</option>
            {projects.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="demandId">Demand (optional)</Label>
          <select id="demandId" name="demandId" className="w-full rounded-md border bg-background px-3 py-2 text-sm">
            <option value="">None</option>
            {demands.map((d) => (
              <option key={d.id} value={d.id}>
                {d.title}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="role">Role</Label>
          <Input id="role" name="role" placeholder="e.g., Developer" defaultValue="Contributor" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="startDate">Start Date</Label>
          <Input id="startDate" name="startDate" type="date" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="endDate">End Date</Label>
          <Input id="endDate" name="endDate" type="date" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="allocatedHours">Allocated Hours (per week)</Label>
          <Input id="allocatedHours" name="allocatedHours" type="number" min={0} step={1} required />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button type="submit" disabled={loading}>
          {loading ? 'Creating...' : 'Create Allocation'}
        </Button>
        <Button type="button" variant="outline" onClick={() => router.push('/resources')}>
          Cancel
        </Button>
      </div>
    </form>
  );
}
