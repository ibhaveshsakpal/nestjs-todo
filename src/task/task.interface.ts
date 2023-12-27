import { Document } from "mongoose";

export interface ITask extends Document {
    readonly creator: string;
    readonly task: string;
    readonly status: string;
}