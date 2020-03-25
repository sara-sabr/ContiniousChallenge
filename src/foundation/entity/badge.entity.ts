import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({
    name: 'badge'
})
export class Badge {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;
}