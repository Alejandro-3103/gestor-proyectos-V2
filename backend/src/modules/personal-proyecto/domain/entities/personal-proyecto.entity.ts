import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Staff } from '../../../staff/domain/entities/staff.entity';
import { Proyecto } from '../../../proyectos/domain/entities/proyecto.entity';

@Entity('personal_proyecto')
export class PersonalProyecto {
  @PrimaryGeneratedColumn()
  id: number;
  
  @ManyToOne(() => Staff, staff => staff.personalProyectos, { onDelete: 'CASCADE' })
  personal: Staff;
  
  @ManyToOne(() => Proyecto, proyecto => proyecto.personalProyectos, { onDelete: 'CASCADE' })
  proyecto: Proyecto;

  @Column({ name: 'fecha_asignacion' })
  fechaAsignacion: Date;

  @Column()
  rol: string;
}