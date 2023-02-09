type Callback<T> = (payload: T) => any;

class Publisher<T> {
  private subscribers: Callback<T>[] = [];

  public subscribe(this: Publisher<T>, callback: Callback<T>) {
    this.subscribers.push(callback);

    return {
      unsubscribe: () => {
        const index = this.subscribers.indexOf(callback);
        this.subscribers.splice(index, 1);
      },
    };
  }

  public emit(this: Publisher<T>, payload: T) {
    this.subscribers.forEach((cb) => {
      cb(payload);
    });
  }
}

export default Publisher;
