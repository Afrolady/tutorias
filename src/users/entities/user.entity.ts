// import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

// @Entity({ name: 'users' })
// export class User {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column({ length: 100, unique: true })
//   username: string;

//   @Column({ length: 255 })
//   password: string;

//   @Column({ length: 200, nullable: true })
//   fullname: string | null;

//   @CreateDateColumn({ name: 'created_at' })
//   createdAt: Date;
// }

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  username!: string;

  @Column()
  password!: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  fullname!: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at!: Date;
}
