import { Injectable } from '@nestjs/common';
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

  async create(createPersonagemDto: CreatePersonagemDto) {
    const personagem: Personagem = {
      // id: this.personagens.length + 1,
      ...createPersonagemDto,
    };

    return await this.prisma.personagem.create({
      data: personagem,
    });

    // this.personagens.push(personagem);

    // return personagem;
  }

  /*
  Explorar os seguintes métodos do Prisma:
  findMany
  findUnique({ where: { id } })
  update
  delete
  */

  findAll() {
    return this.personagens;
  }

  findOne(id: number) {
    return this.personagens.find((personagem) => personagem.id === id);
  }

  update(id: number, updatePersonagemDto: UpdatePersonagemDto) {
    const index = this.personagens.findIndex(
      (personagem) => personagem.id === id,
    );

    // Jeito 1
    // const personagemAtual = this.personagens[index];

    // const novoPersonagem = {
    //   ...personagemAtual,
    //   ...updatePersonagemDto,
    // };

    // this.personagens[index] = novoPersonagem;

    // Jeito 2
    this.personagens[index] = {
      ...this.personagens[index],
      ...updatePersonagemDto,
    };

    return this.personagens[index];
  }

  remove(id: number) {
    const index = this.personagens.findIndex(
      (personagem) => personagem.id === id,
    );

    // delete this.personagens[index];
    // this.personagens = this.personagens.filter((p) => p.id !== id);

    this.personagens.splice(index, 1);
  }
}
