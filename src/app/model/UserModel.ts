import { PostModel } from './PostModel';
export class UserModel{

    public id: number;
    public email: string;
    public name: string;
    public password: string;
    public photo: string;
    public type: string;
    public post: PostModel[];
}