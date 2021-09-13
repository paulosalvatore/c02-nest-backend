import { Injectable } from '@nestjs/common';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { UsuarioService } from 'src/usuario/usuario.service';

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

    // TODO: Validar se a senha é a mesma

    return usuario;
  }
}
