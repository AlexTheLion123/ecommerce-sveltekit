import { supabaseClient } from "$lib/scripts/db";

// only called on logout
export async function del() {
    return {
        status: 204,
        headers: {
            'set-cookie': ['sb-refresh-token=/; path=/', 'sb-provider-token=/; path=/', 'sb-access-token=/; path=/']
        }
    }
}
