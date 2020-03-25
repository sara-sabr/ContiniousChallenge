import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, VersionColumn, ManyToOne, OneToMany } from 'typeorm';
import { ChallengeType } from './challengeType.entity';
import { Application } from './application.entity';
import { Scoreboard } from './scoreboard.entity';

@Entity({
    name: 'challenge'
})
export class Challenge {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({name: 'name_key', unique: true})
    name_key: string;

    @Column()
    ordering: number;

    @ManyToOne(() => ChallengeType, challengeType => challengeType.challenges)
    challengeType: ChallengeType

    @OneToMany(() => Application, application => application.challenge)
    applications: Application[]

    @OneToMany(() => Scoreboard, scoreboard => scoreboard.challenge)
    scoreboards: Scoreboard[]

    @Column({name: 'worth'})
    worth: number;

    @Column({default: true})
    active: boolean;

    @CreateDateColumn( {name: 'created_at'})
    createdDate: Date;

    @UpdateDateColumn( {name: 'updated_at'})
    updatedDate: Date;

    @VersionColumn()
    version: number;
}