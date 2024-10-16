import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm';
import { Cliente } from '../../../cliente/domain/entities/cliente.entity';
import { Proyecto } from '../../../proyectos/domain/entities/proyecto.entity';

@Entity('cliente_proyecto')
export class ClienteProyecto {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Cliente, cliente => cliente.clienteProyectos)
  @JoinColumn({ name: 'cliente_id' })
  cliente: Cliente;

  @ManyToOne(() => Proyecto, proyecto => proyecto.clienteProyectos)
  @JoinColumn({ name: 'proyecto_id' })
  proyecto: Proyecto;

  @Column({ name: 'fecha_asignacion' })
  fechaAsignacion: Date;
}