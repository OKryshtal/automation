import { addNumbers, sumArrayElements } from './functions.js';
import { filterByStatus } from './jira-functions.js';
import { addNumbersExpr } from './functional-expressions.js';
import {
    filterByStatusArrow,
    getSummariesTicketsByStatus,
    splitOddAndEvenNumbers,
    getAllTicketsSummaries,
    sumArrayElementsArrow
} from './jira-arrow-functions.js';
import { processTickets } from './callbacks.js';
import { ticket } from './getters-setters.js';
import { DateTime } from 'luxon';

console.log('-------------sum of Numbers-------------');
const resultNumbers = addNumbers(5, 5);
console.log('sum of numbers:', resultNumbers);
console.log('sum of numbers in string:', addNumbers('5', '5'));
console.log('sum of numbers and string:', addNumbers(5, '5'));
console.log('sum of words:', addNumbers('five', 'five'));

console.log('-------------play with Jira-------------');

const jiraTickets = [
    { id: 'PROJ-123', title: 'Fix login bug', status: 'In Progress', assignee: 'Alice' },
    { id: 'PROJ-124', title: 'Add new feature', status: 'To Do', assignee: 'Bob' },
    { id: 'PROJ-125', title: 'Update documentation', status: 'Done', assignee: 'Charlie' },
    { id: 'PROJ-124', title: 'Another example of To Do', status: 'To Do', assignee: 'Bob' }
];

console.log('All tickets:', jiraTickets);
console.log('In Progress tickets:', filterByStatus(jiraTickets, 'In Progress'));
console.log('To Do tickets:', filterByStatus(jiraTickets, 'To Do'));
console.log('Done tickets:', filterByStatus(jiraTickets, 'Done'));

console.log('-------------functional expressions-------------');
console.log('sum of numbers (expression)', addNumbersExpr(5, 5));
console.log('sum of numbers in string(expression)', addNumbersExpr('5', '5'));
console.log('sum of numbers and string(expression)', addNumbersExpr(5, '5'));
console.log('sum of words(expression)', addNumbersExpr('five', 'five'));

console.log('-------------play with jira and arrow functions-------------');
console.log('In Progress tickets (arrow function):', filterByStatusArrow(jiraTickets, 'In Progress'));
console.log('Summaries of To Do tickets (arrow function):', getSummariesTicketsByStatus(jiraTickets, 'To Do'));
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('Split odd and even numbers:', splitOddAndEvenNumbers(array));

console.log('-------------play with jira callbacks-------------');

processTickets(jiraTickets, getAllTicketsSummaries, () => console.log('No tickets found'));
processTickets([], getAllTicketsSummaries, () => console.log('No tickets found'));

console.log('-------------play with getters and setters-------------');
console.log('Ticket object:', ticket);
console.log('Ticket summary:', ticket.summary);
ticket.summary = 'PROJ-555: New summary (Done)'; // This will not change the summary as it's a getter, not a setter
console.log('Ticket summary after trying to set a new value:', ticket);
ticket.priority = 3; // This will change the priority using the setter
console.log('Ticket priority:', ticket.priority);
ticket.priority = 6; // This will not change the priority as it's out of range
console.log('Ticket full info after trying to set an invalid priority:', ticket.priority);
ticket.priority = 'High'; // This will change the priority using the setter
console.log('Ticket priority after setting a non-numeric value:', ticket.priority);
ticket.priority = 0; // This will not change the priority as it's not a number
console.log('Ticket full info after trying to set an invalid priority:', ticket.priority);

console.log('-------------play with installed libraries-------------');
const now = DateTime.now();
console.log('Current date and time:', now.toISO());

console.log('-------------homework Functions-------------');

const numbersArray = [1, 2, 3, 4, 5];
const stringsArray = ['1', '2', '3', '4', '5'];

console.log('Sum of numbers array:', sumArrayElements(numbersArray));
console.log('Sum of strings array:', sumArrayElements(stringsArray));

console.log('-------------homework Arrow Functions-------------');

const numbersArrayArrow = [10, 20, 30];
const stringsArrayArrow = ['10', '20', '30'];

console.log('Sum of numbers array (arrow):', sumArrayElementsArrow(numbersArrayArrow));

console.log('Sum of strings array (arrow):', sumArrayElementsArrow(stringsArrayArrow));

console.log('-------------homework Getters and Setters-------------');

console.log(ticket.assigneeInfo);

ticket.assigneeInfo = 'Olha';

console.log(ticket.assigneeInfo);

console.log(ticket.getFullInfo());
