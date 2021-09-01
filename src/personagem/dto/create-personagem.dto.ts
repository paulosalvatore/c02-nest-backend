import { IsString, IsUrl } from 'class-validator';
import { Personagem } from '../entities/personagem.entity';

export class CreatePersonagemDto implements Personagem {
  @IsString()
  nome: string;

  @IsUrl({
    require_protocol: true,
  })
  imagemUrl: string;
}
