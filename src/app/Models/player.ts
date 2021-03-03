import {Status, Role} from './enumerations';

export class Player{
    name: string;
    user_id: number;
    game_id: number;
    cnx_id: string;
    profile: string;
    status: Status;
    role: Role;
}