import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EpisodioService } from './episodio.service';
import { CreateEpisodioDto } from './dto/create-episodio.dto';
import { UpdateEpisodioDto } from './dto/update-episodio.dto';

@Controller('episodio')
export class EpisodioController {
  constructor(private readonly episodioService: EpisodioService) {}

  @Post()
  create(@Body() createEpisodioDto: CreateEpisodioDto) {
    return this.episodioService.create(createEpisodioDto);
  }

  @Get()
  findAll() {
    return this.episodioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.episodioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEpisodioDto: UpdateEpisodioDto) {
    return this.episodioService.update(+id, updateEpisodioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.episodioService.remove(+id);
  }
}
