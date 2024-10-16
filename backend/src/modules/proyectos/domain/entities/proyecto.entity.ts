import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { PersonalProyecto } from '../../../personal-proyecto/domain/entities/personal-proyecto.entity';
import { ClienteProyecto } from "../../../cliente-proyecto/domain/entities/cliente-proyecto.entity";

@Entity()
export class Proyecto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column()
  fechaInicio: Date;

  @Column({ nullable: true })
  fechaFin: Date;

  @Column()
  estado: string;

  @OneToMany(() => ClienteProyecto, clienteProyecto => clienteProyecto.proyecto, { cascade: true, onDelete: 'CASCADE' })
  clienteProyectos: ClienteProyecto[];
  
  @OneToMany(() => PersonalProyecto, personalProyecto => personalProyecto.proyecto, { cascade: true, onDelete: 'CASCADE' })
  personalProyectos: PersonalProyecto[];
}