import { Repository } from 'typeorm';
import { Proyecto } from '../../domain/entities/proyecto.entity';
import { IProyectoRepository } from '../../domain/repositories/proyecto.repository.interface';
export declare class TypeOrmProyectoRepository implements IProyectoRepository {
    private readonly repository;
    constructor(repository: Repository<Proyecto>);
    find(options?: any): Promise<Proyecto[]>;
    findOne(options: any): Promise<Proyecto | undefined>;
    save(proyecto: Partial<Proyecto>): Promise<Proyecto>;
    remove(proyecto: Proyecto): Promise<Proyecto>;
    delete(criteria: any): Promise<any>;
}
