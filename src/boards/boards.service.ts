import { Injectable } from '@nestjs/common';
import { Board } from './board.model';
import { v1 as uuid } from 'uuid';

@Injectable()
export class BoardsService {
    private boards: Board[] = [];

    getAllBoards(): Board[] {
        return this.boards;
    }

    createBoard(title: string, descripiton: string) {
        const board:Board = {
            id: uuid(),
            title,
            descripiton,
        };
        this.boards.push(board);
        return board;
    }
}
