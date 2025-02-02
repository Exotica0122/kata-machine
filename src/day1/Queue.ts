type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    enqueue(item: T): void {
        const newNode = { value: item } as Node<T>;
        this.length++;
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        this.tail.next = newNode;
        this.tail = newNode;
    }

    deque(): T | undefined {
        if (!this.head) return undefined;

        this.length--;

        const head = this.head;
        this.head = this.head.next;

        if (this.length === 0) this.tail = undefined;

        head.next = undefined;
        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
