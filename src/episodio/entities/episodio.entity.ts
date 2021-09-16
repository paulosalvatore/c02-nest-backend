import { Personagem } from 'src/personagem/entities/personagem.entity';

export class Episodio {
  id?: number;
  nome: string;
  dataEstreia: Date;
  episodio: string;
  personagens?: Personagem[];
}
