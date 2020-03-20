import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, VersionColumn, OneToMany } from 'typeorm';
import { Challenge } from './Challenge.entity';

@Entity({
    name: 'challenge_type'
})
export class ChallengeType {
    @PrimaryGeneratedColumn({
        type: "uuid"
    })
    id: string;

    @Column({name: 'name_key', unique: true})
    name_key: string;

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