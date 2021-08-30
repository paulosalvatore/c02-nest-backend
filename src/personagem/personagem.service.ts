import { Injectable } from '@nestjs/common';
import { CreatePersonagemDto } from './dto/create-personagem.dto';
import { UpdatePersonagemDto } from './dto/update-personagem.dto';
import { Personagem } from './entities/personagem.entity';

@Injectable()
export class PersonagemService {
  personagens: Personagem[] = [
    {
      nome: 'Rick Sanchez',
      imagemUrl: 'http://imagem.com',
    },
  ];

  create(createPersonagemDto: CreatePersonagemDto) {
    return createPersonagemDto;
  }

  findAll() {
    return `This action returns all personagem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} personagem`;
  }

  update(id: number, updatePersonagemDto: UpdatePersonagemDto) {
    return `This action updates a #${id} personagem`;
  }

  remove(id: number) {
    return `This action removes a #${id} personagem`;
  }
}
