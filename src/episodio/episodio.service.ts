import { Injectable } from '@nestjs/common';
import { CreateEpisodioDto } from './dto/create-episodio.dto';
import { UpdateEpisodioDto } from './dto/update-episodio.dto';

@Injectable()
export class EpisodioService {
  create(createEpisodioDto: CreateEpisodioDto) {
    return 'This action adds a new episodio';
  }

  findAll() {
    return `This action returns all episodio`;
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
