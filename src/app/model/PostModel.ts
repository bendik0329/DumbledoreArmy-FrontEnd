import { ThemeModel } from './ThemeModel';
import { UserModel } from './UserModel';
export class PostModel{

    public id: number;
    public title: string;
    public description: string;
    public date: Date;
    public theme: ThemeModel;
    public user: UserModel;
}