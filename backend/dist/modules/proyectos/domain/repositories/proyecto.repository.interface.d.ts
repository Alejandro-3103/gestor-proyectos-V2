import { Proyecto } from '../entities/proyecto.entity';
export interface IProyectoRepository {
    find(options?: any): Promise<Proyecto[]>;
    findOne(options: any): Promise<Proyecto | undefined>;
    save(proyecto: Partial<Proyecto>): Promise<Proyecto>;
    remove(proyecto: Proyecto): Promise<Proyecto>;
    delete(proyecto: Proyecto): Promise<Proyecto>;
}
