export function processTickets(tickets, callbackIfAny, callbackIfNone) {
    if (tickets.length > 0) {
        callbackIfAny(tickets);
    } else {
        callbackIfNone();
    }
}
