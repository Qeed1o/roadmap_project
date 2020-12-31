export interface TaskDTO{
    timeStart: Date,
    timeEnd: Date | null,
    id: String,
    isClosed: Boolean,
    isActive: Boolean,
    name: String,

    close(): void,
    setActive(): void,
}