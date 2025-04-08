import { compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { env } from '@/config/env';
import { UnauthorizedError } from '@/errors';
import { UserRepository } from '@/repositories/user.repository';

interface Auth {
  readonly email: string;
  readonly password: string;
}

export class AuthService {
  private readonly secret: string = env.secret;

  constructor(private readonly userRepository: UserRepository) {}

  async execute(auth: Auth): Promise<any> {
    const user = await this.userRepository.isEmailAlreadyRegistered(auth.email);

    if (!user) throw new UnauthorizedError();

    const isValidPassword = await compare(auth.password, user.password);

    if (!isValidPassword) throw new UnauthorizedError();

    const token: string = jwt.sign({ id: user._id }, this.secret, {
      expiresIn: '1d',
    });

    return { message: 'User successfully authenticated', token };
  }
}
