export class UserService {
    private users: User[] = [
        { id: 1, name: "John Doe", email: "johndoe@example.com" },
        { id: 2, name: "Jane Doe", email: "janedoe@example" }
    ];

    public getUsers(): User[] {
        return this.users;
    }

    public getUserById(id: number): User | undefined {
        return this.users.find((user) => user.id === id);
    }

    public createUser(name: string, email: string): User {
        const newId = this.users.length + 1;
        const newUser: User = { id: newId, email: email, name: name };
        this.users.push(newUser);
        return newUser;
    }

    public updateUser(id: number, name: string, email: string): User | undefined {
        const userIndex = this.users.findIndex((user) => user.id === id);
        if (userIndex > 0) {
            const updatedUser = { ...this.users[userIndex], name, email };
            this.users[userIndex] = updatedUser;
            return updatedUser;
        }
        return undefined;
    }

    public deleteUser(id: number): void | undefined {
        const userIndex = this.users.findIndex((user) => user.id === id);
        if (userIndex > 0) {
            this.users.splice(userIndex, 1);
        }
        return undefined;
    }
}