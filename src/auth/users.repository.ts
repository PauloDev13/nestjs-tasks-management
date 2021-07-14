import { EntityRepository, Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';

@EntityRepository(UserEntity)
export class UsersRepository extends Repository<UserEntity> {
  async createUser(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { username, password } = authCredentialsDto;

    const userCreated = this.create({
      username,
      password,
    });
    try {
      await this.save(userCreated);
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException(null, 'Usuário já cadastrado.');
      } else {
        throw new InternalServerErrorException(
          null,
          'Ocorreu um erro inesperado.',
        );
      }
    }
  }
}
