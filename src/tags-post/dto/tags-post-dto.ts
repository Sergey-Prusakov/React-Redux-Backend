import { IsString } from 'class-validator';

export class TagsPostDto {
  @IsString()
  readonly postId: string;

  @IsString()
  readonly tagId: string;
}
