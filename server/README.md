# Blog CMS Backend

Scalable Express + Supabase API for blog management.

## Setup

1. `npm install`
2. Copy `.env.example` to `.env` and fill Supabase creds.
3. `npm run dev` (localhost:5000)

## Endpoints

- POST /auth/login
- GET/POST/PUT/DELETE /posts

## Scaling

- Add Redis for caching in `/services`.
- Docker: See `Dockerfile` (TBD).

## Tests

`npm test`
