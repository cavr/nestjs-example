import { ApiModelProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiModelProperty()
  readonly title: string;

  @ApiModelProperty()
  readonly content: string;
}
