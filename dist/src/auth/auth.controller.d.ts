import { AuthService } from './auth.service';
import { RegisterDTO } from './dtos/register.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(userData: RegisterDTO): Promise<import(".prisma/client").User>;
    login(req: any, res: any): Promise<void>;
    logout(res: any): Promise<void>;
}
