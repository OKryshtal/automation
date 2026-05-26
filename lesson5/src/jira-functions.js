export function filterByStatus(tickets, status) {
    return tickets.filter((ticket) => ticket.status === status);
}
