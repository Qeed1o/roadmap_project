export interface TaskDTO{
    timeStart: Date,
    timeEnd: Date,
    id: String,
    isClosed: Boolean,
    name: String,

    close(): void
}