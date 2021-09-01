import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { PersonagemService } from './personagem.service';
import { CreatePersonagemDto } from './dto/create-personagem.dto';
import { UpdatePersonagemDto } from './dto/update-personagem.dto';

@Controller('personagem')
export class PersonagemController {
  constructor(private readonly personagemService: PersonagemService) {}

  @Post()
  create(@Body() createPersonagemDto: CreatePersonagemDto) {
    // if (
    //   !createPersonagemDto ||
    //   !createPersonagemDto.nome ||
    //   typeof createPersonagemDto.nome !== 'string' ||
    //   !createPersonagemDto.imagemUrl
    // ) {
    //   throw Error('Erro ao validar entidade');
    // }

    // const erros = [];

    // if (!createPersonagemDto.nome) {
    //   erros.push('Nome precisa existir');
    // }

    // if (typeof createPersonagemDto.nome !== 'string') {
    //   erros.push('Nome precisa ser string');
    // }

    // if (erros.length) {
    //   return erros;
    // }

    // const objeto = {
    //   nome: createPersonagemDto.nome,
    //   imagemUrl: createPersonagemDto.imagemUrl,
    // };

    // return objeto;

    return createPersonagemDto;
    // return this.personagemService.create(createPersonagemDto);
  }

  @Get()
  findAll() {
    return this.personagemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personagemService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePersonagemDto: UpdatePersonagemDto,
  ) {
    return this.personagemService.update(+id, updatePersonagemDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.personagemService.remove(+id);
  }
}
