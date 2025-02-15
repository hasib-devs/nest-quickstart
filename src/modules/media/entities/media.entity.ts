import {
  Entity,
  PrimaryKey,
  Property,
  SerializedPrimaryKey,
} from '@mikro-orm/core';
import { ObjectId } from '@mikro-orm/mongodb';

@Entity()
export class Media {
  @PrimaryKey()
  _id: ObjectId;

  @SerializedPrimaryKey()
  id!: string;

  @Property()
  name!: string;

  @Property()
  createdAt = new Date();

  @Property({ nullable: true, onUpdate: () => new Date() })
  updatedAt?: Date;

  @Property({ nullable: true })
  deletedAt?: Date;
}
