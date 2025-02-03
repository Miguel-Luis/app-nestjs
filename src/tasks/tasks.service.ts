import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {

    getTasks() {
        return ['task1', 'task2', 'task3'];
    }

    createTask() {
        return {
            success: true,
            message: 'Task created successfully',
        }
    }

    updateTask() {
        return {
            success: true,
            message: 'Task updated successfully',
        }
    }

    deleteTask() {
        return {
            success: true,
            message: 'Task deleted successfully',
        }
    }

    updateTaskStatus() {
        return {
            success: true,
            message: 'Task status update successfully',
        }
    }

}
