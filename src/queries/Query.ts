import Publisher from './Publisher';

const rootURL = 'https://obmng.dbm.guestline.net/api/';

export interface QueryStateType<T> {
  isInitialized: boolean;
  isLoading: boolean;
  isError: boolean;
  data: T | null;
}

class Query<T> {
  private url: string;

  private _state: QueryStateType<T> = {
    isInitialized: false,
    isLoading: false,
    isError: false,
    data: null,
  };

  get state() {
    return { ...this._state };
  }

  private publisher = new Publisher<QueryStateType<T>>();

  constructor(endpoint: string) {
    this.url = rootURL + endpoint;
  }

  fetch() {
    this._state.isInitialized = true;
    this._state.isLoading = true;
    this._state.isError = false;

    this.emitUpdate();

    fetch(this.url)
      .then((response) => {
        if (!response.ok) {
          throw new Error();
        }
        return response.json();
      })
      .then((body) => {
        this._state.data = body;
      })
      .catch(() => {
        this._state.isError = true;
      })
      .finally(() => {
        this._state.isLoading = false;
        this.emitUpdate();
      });
  }

  private emitUpdate() {
    this.publisher.emit(this._state);
  }

  subscribe(callback: (payload: QueryStateType<T>) => any) {
    this.publisher.subscribe(callback);
  }
}

export default Query;
