import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PostsModule } from './posts/posts.module';
import { AppService } from './app.service';
import { PostController } from './post/post.controller';
import { PostService } from './post/post.service';
import { PostModule } from './post/post.module';
import { Post } from './post';

@Module({
  imports: [PostsModule, PostModule],
  controllers: [AppController, PostController],
  providers: [AppService, PostService, Post],
})
export class AppModule {}
