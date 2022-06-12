// src/hooks.ts
import { handleUser, handleCallback } from '@supabase/auth-helpers-sveltekit';
import type { GetSession, Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

export const handle: Handle = sequence(handleCallback(), handleUser());

export const getSession: GetSession = async (event) => {
  const { user, accessToken, error } = event.locals as any;
  return {
    user,
    accessToken,
    error
  };
};