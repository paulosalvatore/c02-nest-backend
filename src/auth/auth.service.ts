import { Injectable } from '@nestjs/common';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { UsuarioService } from 'src/usuario/usuario.service';

// Bcrypt
import * as bcrypt from 'bcrypt';
import { UnauthorizedError } from 'src/errors/unauthorized.error';
import { JwtService } from '@nestjs/jwt';
import { UsuarioToken } from './model/UsuarioToken';
import { UsuarioPayload } from './model/UsuarioPayload';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuarioService: UsuarioService,
    private readonly jwtService: JwtService,
  ) {}

  async login(email: string, senha: string): Promise<UsuarioToken> {
    const usuario: Usuario = await this.validateUser(email, senha);

    const payload: UsuarioPayload = {
      username: usuario.email,
      sub: usuario.id,
    };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  private async validateUser(email: string, senha: string) {
    const usuario = await this.usuarioService.findByEmail(email);

    if (usuario) {
      const isPasswordValid = await bcrypt.compare(senha, usuario.senha);

      if (isPasswordValid) {
        return {
          ...usuario,
          senha: undefined,
        };
      }
    }

    throw new UnauthorizedError('E-mail e/ou senha fornecidos são incorretos.');
  }
}
