import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, BeforeInsert, Unique } from 'typeorm';

@Entity()
@Unique(['username'])
@Unique(['email'])
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'username', type: 'nvarchar', nullable: true })
    username: string;

    @Column({ name: 'email', type: 'nvarchar', nullable: true })
    email: string;

    @Column({ name: 'profilePictureUrl', type: 'nvarchar', nullable: true })
    profilePictureUrl: string;

    @Column({ name: 'isFirstSignIn', type: 'bit', default: false })
    isFirstSignIn: boolean;
}