import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, CreateDateColumn, UpdateDateColumn, VersionColumn } from "typeorm";
import { Challenge } from "./Challenge.entity";

@Entity({
    name: 'scoreboard'
})
export class Scoreboard {

    @PrimaryGeneratedColumn({
        type: "uuid"
    })
    id: string;

    @ManyToOne(() => Challenge, challenge => challenge.scoreboards)
    challenge: Challenge;

    @Column({name: 'user_key'})
    userKey: string;

    @Column()
    score: number;

    @Column()
    completed: boolean;

    @CreateDateColumn( {name: 'created_at'})
    createdDate: Date;

    @UpdateDateColumn( {name: 'updated_at'})
    updatedDate: Date;

    @VersionColumn()
    version: number;
}
