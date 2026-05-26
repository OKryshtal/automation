export const ticket = {
    id: 'PROJ-123',
    title: 'Fix login bug',
    status: 'In Progress',

    assignee: {
        name: 'Alice',
        team: 'QA Automation'
    },

    _priority: 5,

    get summary() {
        return `${this.id}: ${this.title} (${this.status})`;
    },

    set summary(newSummary) {
        const match = newSummary.match(/^\s*(.+?):\s*(.+?)\s*\((.+)\)\s*$/);

        if (match) {
            this.id = match[1];
            this.title = match[2];
            this.status = match[3];
        }
    },

    get priority() {
        return this._priority;
    },

    set priority(newPriority) {
        if (typeof newPriority === 'number' && newPriority >= 1 && newPriority <= 5) {
            this._priority = newPriority;
        }
    },

    get assigneeInfo() {
        return `${this.assignee.name} (${this.assignee.team})`;
    },

    set assigneeInfo(newName) {
        if (typeof newName === 'string' && newName.length > 0) {
            this.assignee.name = newName;
        }
    },

    getFullInfo() {
        return `
Ticket ID: ${this.id}
Title: ${this.title}
Status: ${this.status}
Assignee: ${this.assignee.name}
Team: ${this.assignee.team}
Priority: ${this._priority}
        `;
    }
};
