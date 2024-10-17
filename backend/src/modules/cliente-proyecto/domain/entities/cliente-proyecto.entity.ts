import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm';
import { Cliente } from '../../../cliente/domain/entities/cliente.entity';
import { Proyecto } from '../../../proyectos/domain/entities/proyecto.entity';

@Entity('cliente_proyecto')
export class ClienteProyecto {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Cliente, cliente => cliente.clienteProyectos)
  @JoinColumn({ name: 'clienteId' })
  cliente: Cliente;

  @Column()
  clienteId: number;

  @ManyToOne(() => Proyecto, proyecto => proyecto.clienteProyectos)
  @JoinColumn({ name: 'proyectoId' })
  proyecto: Proyecto;

  @Column()
  proyectoId: number;

  @Column()
  fechaAsignacion: Date;
}