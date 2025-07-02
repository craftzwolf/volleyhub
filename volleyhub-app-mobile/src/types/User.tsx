export type Role = 'coach' | 'player' | 'visitor';

export interface User {
    id: string;
    name: string;
    email: string;
    role: Role;
}
