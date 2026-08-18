import { CreateTaskDto } from "../types/CreateTaskDto";
import { UpdateTaskDto } from "../types/UpdateTaskDto";
import { prisma } from "./../config/prisma";


export function findAll() {
  return prisma.task.findMany();
}
export function findById(id: number) {
  return prisma.task.findUnique({ where: { id: id } });
}

export function create(dados: CreateTaskDto) {
  return prisma.task.create({ data: dados });
}

export function update(id: number, dados: UpdateTaskDto) {
  return prisma.task.update({ where: { id: id }, data:dados });
}

export function remove(id:number){
    return prisma.task.delete({where:{id:id}})
}
