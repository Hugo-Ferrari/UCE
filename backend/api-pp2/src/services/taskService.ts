
import { response } from "express";
import { AppError } from "../middlewares/apperror";
import * as taskRepository from"../repositories/taskRepository";
import { CreateTaskDto } from "../types/CreateTaskDto";
import { UpdateTaskDto } from "../types/UpdateTaskDto";

export function findAll() {
  return taskRepository.findAll();
}
//criando uma task
export function create(data:CreateTaskDto){
    if(!data.title){
        throw new AppError("Titulo é obrigatorio", 400)
    }
    return taskRepository.create(data)
}
//verificando se o id é valido
export async function findById(id:number) {
    const reponse = await taskRepository.findById(id)
        if(!reponse) {
            throw new AppError("Task não encontrada", 404)
        }
    return response
}

export async function update(id:number, dados: CreateTaskDto) {
   await findById(id)// primeiro eu verifico se a tarefa existe
   return taskRepository.update(id, dados)
}

export async function  remove(id:number) {
    await findById(id) // primeiro eu verifico se a tarefa existe
    return taskRepository.remove(id)
    
}