import {
  Controller,
  Get,
  Post,
  Body,
  Response,
  HttpStatus,
} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';
import { Post as PostInterface } from './interfaces/post.interface';
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';

@ApiUseTags('posts')
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Response() res, @Body() createPostDto: CreatePostDto) {
    const post = this.postsService.create(createPostDto);
    return res.status(HttpStatus.OK)(post);
  }

  @Get()
  async findAll(@Response() res) {
    const posts = this.postsService.findAll();
    return res.status(HttpStatus.OK).json(posts);
  }
}
