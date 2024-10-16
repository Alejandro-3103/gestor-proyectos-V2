import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { PersonalProyecto } from '../../../personal-proyecto/domain/entities/personal-proyecto.entity';

@Entity()
export class Staff {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  nombre: string;

  @Column({ name: 'correo_electronico' })
  correoElectronico: string;

  @Column()
  posicion: string;

  @Column({ name: 'fecha_contratacion' })
  fechaContratacion: Date;

  @OneToMany(() => PersonalProyecto, personalProyecto => personalProyecto.personal, { cascade: true, onDelete: 'CASCADE' })
  personalProyectos: PersonalProyecto[];
}