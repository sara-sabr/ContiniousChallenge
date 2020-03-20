import { Entity,  Column,  PrimaryColumn } from "typeorm";

@Entity({
    name: 'leaderboard'
})
export class Leaderboard {

    @PrimaryColumn({name: 'user_key'})
    userKey: string;

    @Column()
    score: number;
}
