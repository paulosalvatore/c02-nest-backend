import { Personagem } from '../entities/personagem.entity';

export class CreatePersonagemDto implements Personagem {
  nome: string;

  imagemUrl: string;
}
