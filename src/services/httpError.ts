class NetworkError extends Error {
  public response: any;

  constructor(response: any) {
    super("Network error");

    this.name = "NetworkError";
    this.response = response;

    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = (new Error("Network error")).stack;
    }
  }
}

export { NetworkError };
