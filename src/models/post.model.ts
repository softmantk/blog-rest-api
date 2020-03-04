import {Entity, model, property} from '@loopback/repository';

@model()
export class Post extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'number',
    required: true,
  })
  author: number;

  @property({
    type: 'date',
  })
  createdAt?: string;


  constructor(data?: Partial<Post>) {
    super(data);
  }
}

export interface PostRelations {
  // describe navigational properties here
}

export type PostWithRelations = Post & PostRelations;
