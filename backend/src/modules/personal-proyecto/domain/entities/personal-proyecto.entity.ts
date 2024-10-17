import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Staff } from '../../../staff/domain/entities/staff.entity';
import { Proyecto } from '../../../proyectos/domain/entities/proyecto.entity';

@Entity('personal_proyecto')
export class PersonalProyecto {
  @PrimaryGeneratedColumn()
  id: number;
  
  @ManyToOne(() => Staff, staff => staff.personalProyectos, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'personalId' })
  personal: Staff;
  
  @Column()
  personalId: number;

  @ManyToOne(() => Proyecto, proyecto => proyecto.personalProyectos, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'proyectoId' })
  proyecto: Proyecto;

  @Column()
  proyectoId: number;

  @Column({ name: 'fechaAsignacion' })
  fechaAsignacion: Date;

  @Column()
  rol: string;
}