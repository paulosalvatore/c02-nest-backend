import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePersonagemDto } from './dto/create-personagem.dto';
import { UpdatePersonagemDto } from './dto/update-personagem.dto';
import { Personagem } from './entities/personagem.entity';

@Injectable()
export class PersonagemService {
  private personagens: Personagem[] = [
    {
      id: 1,
      nome: 'Rick Sanchez',
      imagemUrl: 'http://imagem.com',
    },
  ];

  constructor(private readonly prisma: PrismaService) {}

  create(createPersonagemDto: CreatePersonagemDto) {
    return this.prisma.personagem.create({
      data: createPersonagemDto,
    });
  }

  findAll() {
    return this.prisma.personagem.findMany();
  }

  findOne(id: number) {
    return this.prisma.personagem.findUnique({ where: { id } });
  }

  update(id: number, updatePersonagemDto: UpdatePersonagemDto) {
    return this.prisma.personagem.update({
      where: { id },
      data: updatePersonagemDto,
    });
  }

  remove(id: number) {
    return this.prisma.personagem.delete({ where: { id } });
  }
}
