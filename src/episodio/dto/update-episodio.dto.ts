import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsOptional } from 'class-validator';
import { CreateEpisodioDto } from './create-episodio.dto';

export class UpdateEpisodioDto extends PartialType(CreateEpisodioDto) {
  @IsOptional()
  @IsNumber({}, { each: true })
  personagensDisconnectIds?: number[];
}
