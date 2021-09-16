import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEpisodioDto } from './dto/create-episodio.dto';
import { UpdateEpisodioDto } from './dto/update-episodio.dto';

@Injectable()
export class EpisodioService {
  constructor(private readonly prisma: PrismaService) {}

  create(createEpisodioDto: CreateEpisodioDto) {
    const personagensIds = createEpisodioDto.personagensIds;

    delete createEpisodioDto.personagensIds;

    const data: Prisma.EpisodioCreateInput = {
      ...createEpisodioDto,
      dataEstreia: new Date(createEpisodioDto.dataEstreia),
      personagens: {
        create: [...createEpisodioDto.personagens],
        connect: personagensIds.map((id) => ({ id })),
      },
    };

    return this.prisma.episodio.create({
      data,
      include: { personagens: true },
    });
  }

  findAll() {
    return this.prisma.episodio.findMany({ include: { personagens: true } });
  }

  findOne(id: number) {
    return `This action returns a #${id} episodio`;
  }

  update(id: number, updateEpisodioDto: UpdateEpisodioDto) {
    return `This action updates a #${id} episodio`;
  }

  remove(id: number) {
    return `This action removes a #${id} episodio`;
  }
}
