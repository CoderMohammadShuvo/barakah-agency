# Admin Setup Guide

To access the admin panel, you need to create an admin user in Supabase.

## Option 1: Supabase SQL Editor (Recommended)

Run the following SQL in your Supabase SQL Editor to grant admin privileges to an existing user:

```sql
-- Replace 'user-email@example.com' with the actual email of the user
UPDATE auth.users
SET raw_user_meta_data = raw_user_meta_data || '{"is_admin": true}'
WHERE email = 'user-email@example.com';
```

## Option 2: Default Credentials

If this is a fresh setup and you haven't created a user yet:

1. Go to the [Supabase Dashboard](https://supabase.com/dashboard).
2. Go to **Authentication** > **Users**.
3. Click **Add User** > **Create new user**.
4. Enter an email and password.
5. After creating the user, use the SQL above to make them an admin.

## Accessing the Admin Panel

Once you have an admin user:

1. Go to `/admin/login`.
2. Sign in with your email and password.
3. You will be redirected to the dashboard.

## Features Implemented

- **Blog Management**: Full CRUD with a premium Rich Text Editor (Tiptap).
- **Leads Management**: View and track inquiries from the contact form.
- **Admin Footer**: Added to all dashboard pages.
- **Optimized Workflow**: Integrated server actions for better data handling and revalidation.
