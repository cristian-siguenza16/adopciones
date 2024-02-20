import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { allowedGender } from "../dtos/create-dog.dto";
import User from "src/users/entities/user.entity";

@ Entity('dogs')
class Dog{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ type: 'varchar', length: 255 })
    raza: string;

    @Column({ type: 'varchar', length: 255 })
    nombre: string;

    @Column({ type: 'varchar', length: 255 })
    edad: string;

    @Column({ type: 'varchar', length: 255 })
    peso: string;

    @Column({ type: 'enum', enum: allowedGender})
    genero: allowedGender;

    @ManyToOne(() => User, (user) => user.dogs)
    user: User;
}

export default Dog;