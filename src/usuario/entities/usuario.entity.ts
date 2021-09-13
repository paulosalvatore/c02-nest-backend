import { Prisma } from '.prisma/client';

export class Usuario implements Prisma.UsuarioUncheckedCreateInput {
  id?: number;
  email: string;
  senha: string;
  nome: string;
}
