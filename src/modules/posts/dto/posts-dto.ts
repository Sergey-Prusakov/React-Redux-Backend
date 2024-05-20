import { IsString } from 'class-validator';

export class PostDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly content: string;

  @IsString()
  readonly userId: string;
}
