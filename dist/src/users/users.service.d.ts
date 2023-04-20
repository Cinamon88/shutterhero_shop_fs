import { PrismaService } from 'src/prisma/prisma.service';
import { User, Password } from '@prisma/client';
export declare class UsersService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getAll(): Promise<User[]>;
    getById(id: User['id']): Promise<User | null>;
    getByEmail(email: User['email']): Promise<(User & {
        password: Password;
    }) | null>;
    create(userData: Omit<User, 'id' | 'role'>, password: Password['hashedPassword']): Promise<User>;
    updateById(id: User['id'], userData: Omit<User, 'id' | 'role'>, password: string | undefined): Promise<User>;
    deleteById(id: User['id']): Promise<User>;
}
