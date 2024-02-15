import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ Entity('dogs')
class Dog{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ type: 'varchar', length: 255 })
    raza: string;

    @Column({ type: 'varchar', length: 255 })
    nombre: string;

    @Column({ type: 'number'})
    edad: number;

    @Column({ type: 'number'})
    peso: number;

    @Column({ type: 'enum', length: 255 })
    genero: string;
}

export default Dog;