export function get(event) {
    console.log(event.locals, "event locals")
    return {
        body: event.locals.supabase
    }
}