import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, VersionColumn, ManyToOne } from 'typeorm';
import { Challenge } from './Challenge.entity';

@Entity({
    name: 'application'
})
export class Application {

    @PrimaryGeneratedColumn({
        type: "uuid"
    })
    id: string;

    @ManyToOne(() => Challenge, challenge => challenge.applications)
    challenge: Challenge;

    @Column()
    url: string;

    @Column({name: 'api_key'})
    apiKey: string;

    @Column({name: 'api_secret'})
    apiSecret: string;

    @CreateDateColumn( {name: 'created_at'})
    createdDate: Date;

    @UpdateDateColumn( {name: 'updated_at'})
    updatedDate: Date;

    @VersionColumn()
    version: number;
}
