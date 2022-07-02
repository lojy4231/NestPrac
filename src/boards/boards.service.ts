import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardsService {
    // private를 쓰는 이유는 다른 컴포넌트에서 BoardsService에 접근해서 수정하는것을 방지하기 위해
    private boards = [];

    getAllBoards() {
        return this.boards;
    }
}
