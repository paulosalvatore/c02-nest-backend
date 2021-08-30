import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonagemDto } from './create-personagem.dto';

export class UpdatePersonagemDto extends PartialType(CreatePersonagemDto) {}
