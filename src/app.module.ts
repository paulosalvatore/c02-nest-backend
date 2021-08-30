import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonagemModule } from './personagem/personagem.module';

@Module({
  imports: [PersonagemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
