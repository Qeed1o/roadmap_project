class Task{
    private timeStart : Date = new Date();
    private timeEnd : Date = new Date();   
    private id : String = Math.random().toString(26).slice(2);
    private closed : Boolean = false;

    constructor(
        private name : String,
    ){}

    getName() : String {
        return this.name;
    }
    
    getTimeStart() : Date {
        return this.timeStart;
    }

    getId() : String{
        return this.id;
    }

    setTimeEnd(timeEnd: Date) : void {
        this.timeEnd = timeEnd;
        this.closed = true;
    }

    isClosed(): Boolean {
        return this.closed;
    }
}

export default Task;