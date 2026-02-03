/**
 * Helper script to hash passwords for team creation
 * Usage: node scripts/hash-password.js <password>
 * 
 * This will output a SHA-256 hash that you can use when inserting teams into the database.
 */

const crypto = require('crypto');

const password = process.argv[2];

if (!password) {
  console.error('Usage: node scripts/hash-password.js <password>');
  process.exit(1);
}

// Hash password using SHA-256
const hash = crypto.createHash('sha256').update(password).digest('hex');

console.log('\nPassword Hash:');
console.log(hash);
console.log('\nYou can use this hash when creating a team in Supabase:');
console.log(`
INSERT INTO public.teams (team_name, password_hash)
VALUES ('YourTeamName', '${hash}');
`);
