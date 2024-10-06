import { Item } from "./Item"

export type Workout = {
    id: string;
    title: string;
    items: Item[];
}