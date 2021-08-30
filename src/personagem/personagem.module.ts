import { Module } from '@nestjs/common';
import { PersonagemService } from './personagem.service';
import { PersonagemController } from './personagem.controller';

@Module({
  controllers: [PersonagemController],
  providers: [PersonagemService],
})
export class PersonagemModule {}
