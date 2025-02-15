import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Media {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @Property()
  createdAt = new Date();

  @Property({ nullable: true, onUpdate: () => new Date() })
  updatedAt?: Date;

  @Property({ nullable: true })
  deletedAt?: Date;
}
