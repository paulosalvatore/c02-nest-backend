import { Module } from '@nestjs/common';
import { EpisodioService } from './episodio.service';
import { EpisodioController } from './episodio.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [EpisodioController],
  providers: [EpisodioService],
})
export class EpisodioModule {}
