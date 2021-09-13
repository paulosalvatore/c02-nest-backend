import { Injectable } from '@nestjs/common';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { UsuarioService } from 'src/usuario/usuario.service';

// Bcrypt
import * as bcrypt from 'bcrypt';
import { UnauthorizedError } from 'src/errors/unauthorized.error';

@Injectable()
export class AuthService {
  constructor(private readonly usuarioService: UsuarioService) {}

  async login(email: string, senha: string) {
    const usuario: Usuario = await this.validateUser(email, senha);

    // Validar o usuário
    // TODO: Montar o payload
    // TODO: Transformar o payload em um JWT
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
