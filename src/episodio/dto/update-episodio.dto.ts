import { PartialType } from '@nestjs/mapped-types';
import { CreateEpisodioDto } from './create-episodio.dto';

export class UpdateEpisodioDto extends PartialType(CreateEpisodioDto) {}
