import { Module } from '@nestjs/common';
import { EpisodioService } from './episodio.service';
import { EpisodioController } from './episodio.controller';

@Module({
  controllers: [EpisodioController],
  providers: [EpisodioService]
})
export class EpisodioModule {}
