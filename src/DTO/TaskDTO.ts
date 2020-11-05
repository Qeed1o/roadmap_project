export interface TaskDTO{
    timeStart: Date,
    timeEnd: Date | null,
    id: String,
    isClosed: Boolean,
    name: String,

    close(): void
}