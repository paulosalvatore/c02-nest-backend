import { Test, TestingModule } from '@nestjs/testing';
import { PersonagemService } from './personagem.service';

describe('PersonagemService', () => {
  let service: PersonagemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonagemService],
    }).compile();

    service = module.get<PersonagemService>(PersonagemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
