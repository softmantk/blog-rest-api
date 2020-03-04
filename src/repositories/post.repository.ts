import {DefaultCrudRepository} from '@loopback/repository';
import {Post, PostRelations} from '../models';
import {MemDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PostRepository extends DefaultCrudRepository<
  Post,
  typeof Post.prototype.id,
  PostRelations
> {
  constructor(
    @inject('datasources.mem') dataSource: MemDataSource,
  ) {
    super(Post, dataSource);
  }
}
