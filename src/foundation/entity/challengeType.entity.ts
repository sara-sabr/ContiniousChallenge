import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, VersionColumn, OneToMany } from 'typeorm';
import { Challenge } from './challenge.entity';

@Entity({
    name: 'challenge_type'
})
export class ChallengeType {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({name: 'name_key', unique: true})
    nameKey: string;

    @Column()
    ordering: number;

    @Column({default: true})
    active: boolean;

    @OneToMany(() => Challenge, challenge => challenge.challengeType)
    challenges: Challenge[]

    @CreateDateColumn( {name: 'created_at'})
    createdDate: Date;

    @UpdateDateColumn( {name: 'updated_at'})
    updatedDate: Date;

    @VersionColumn()
    version: number;
}