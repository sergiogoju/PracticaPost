import type Emoji from "./Emoji.ts"

export default interface Entry{
    id: number;
    body: string;
    emoji: Emoji | null;
    dataCreacio: Date;
    userId: number;
}