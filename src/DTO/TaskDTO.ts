export interface TaskDTO{
    timeStart: Date,
    timeEnd: Date | null,
    id: String,
    isClosed: Boolean,
    isActive: Boolean,
    name: String,
    description: String,

    close(): void,
    toggleActive(): void,
}