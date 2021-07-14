import { IsNotEmpty, Length, Matches } from 'class-validator';

export class AuthCredentialsDto {
  @Length(4, 20, {
    message: ' O nome do usuário deve conter entre 4 e 20 caracteres',
  })
  @IsNotEmpty({ message: 'Informe o nome do usuário.' })
  username: string;

  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'A senha deve conter letras maíusculas e minúsculas, ' +
      'números ou caracteres especiais. ',
  })
  @Length(8, 32, { message: ' A senha deve conter entre 8 e 32 caracteres' })
  @IsNotEmpty({ message: 'Informe a senha.' })
  password: string;
}
