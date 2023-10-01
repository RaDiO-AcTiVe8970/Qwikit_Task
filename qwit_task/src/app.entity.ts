import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Products")
export class ProductEntity{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;
    @Column()
    price:number;
    @Column()
    description:string;
    @Column()
    image:string;
    @Column()
    category:string;
}

