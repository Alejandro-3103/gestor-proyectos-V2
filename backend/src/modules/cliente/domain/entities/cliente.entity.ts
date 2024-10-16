import { ClienteProyecto } from 'src/modules/cliente-proyecto/domain/entities/cliente-proyecto.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ name: 'correo_electronico' })
  correoElectronico: string;

  @Column({ nullable: true })
  Empresa: string;

  @Column({ name: 'fecha_registro', type: 'date', default: () => 'CURRENT_DATE' })
  fechaRegistro: Date;
  
  @OneToMany(() => ClienteProyecto, clienteProyecto => clienteProyecto.cliente, { cascade: true, onDelete: 'CASCADE' })
  clienteProyectos: ClienteProyecto[];
}