export function get({event}) {
    console.log(event, "this is the event")
    return {
        body: {
            supabase: event.locals.supabase
        }
    }
}