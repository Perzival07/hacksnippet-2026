# Team Authentication Setup Guide

This guide explains how to set up team authentication for HackSnippet 4.0.

## Prerequisites

1. Supabase project configured
2. Environment variables set in `.env`:
   ```
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_key
   ```

## Step 1: Run Database Migration

Run the migration to create the `teams` table:

```bash
# If using Supabase CLI
supabase migration up

# Or apply the migration manually in your Supabase dashboard:
# Go to SQL Editor and run: supabase/migrations/20260118000000_create_teams_table.sql
```

## Step 2: Create Teams with Hashed Passwords

### Option 1: Using the Helper Script

1. Hash a password:
   ```bash
   node scripts/hash-password.js yourpassword
   ```

2. Insert the team into Supabase (via SQL Editor or API):
   ```sql
   INSERT INTO public.teams (team_name, password_hash)
   VALUES ('TeamName', 'hashed_password_from_script');
   ```

### Option 2: Using Supabase Dashboard

1. Go to your Supabase Dashboard → Table Editor → `teams`
2. Click "Insert row"
3. Enter:
   - `team_name`: Your team name
   - `password_hash`: Use the helper script to generate the hash first

### Option 3: Programmatically (for bulk creation)

You can create a script to bulk create teams. The password hashing uses SHA-256:

```javascript
const crypto = require('crypto');

function hashPassword(password) {
  return crypto.createHash('sha256').update(password).digest('hex');
}

// Example: Create a team
const teamName = 'MyTeam';
const password = 'MyPassword123';
const passwordHash = hashPassword(password);

// Then insert into Supabase
```

## Step 3: Test Login

1. Navigate to `/login` in your app
2. Enter the team name and password
3. You should be redirected to the home page upon successful login

## Security Notes

⚠️ **Important**: The current implementation uses SHA-256 for password hashing, which is better than plain text but not ideal for production. For production use, consider:

1. Using Supabase Auth instead
2. Implementing bcrypt or Argon2 for password hashing
3. Using a server-side API endpoint for authentication
4. Implementing rate limiting on login attempts

## Usage in Components

```typescript
import { useAuth } from "@/contexts/AuthContext";

const MyComponent = () => {
  const { isAuthenticated, teamName, login, logout, loading } = useAuth();
  
  if (loading) return <div>Loading...</div>;
  
  if (isAuthenticated) {
    return <div>Welcome, {teamName}!</div>;
  }
  
  return <div>Please log in</div>;
};
```

## Troubleshooting

- **"Invalid team name or password"**: Check that the team exists and the password hash matches
- **"useAuth must be used within an AuthProvider"**: Make sure your component is wrapped in the AuthProvider (already done in App.tsx)
- **Database connection errors**: Verify your Supabase environment variables are set correctly
