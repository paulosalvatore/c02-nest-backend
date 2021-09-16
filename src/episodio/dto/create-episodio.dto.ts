import { Type } from 'class-transformer';
import {
  IsISO8601,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreatePersonagemDto } from 'src/personagem/dto/create-personagem.dto';
import { Episodio } from '../entities/episodio.entity';

export class CreateEpisodioDto implements Episodio {
  @IsString()
  nome: string;

  @IsISO8601()
  dataEstreia: Date;

  @IsString()
  episodio: string;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreatePersonagemDto)
  personagens?: CreatePersonagemDto[];

  @IsOptional()
  @IsNumber({}, { each: true })
  personagensIds?: number[];
}
