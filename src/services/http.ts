import axios, { AxiosRequestConfig } from "axios";

import { NetworkError } from "./httpError";

const successStatuses = [200, 201, 202];

class HttpService {
  private headers = {
    Accept: "application/json",
  };

  public get = async <T>(url: string, params?: any) => {
    const config: AxiosRequestConfig = {
      headers: {
        ...this.headers,
      },
      method: "GET",
      params,
      url,
    };

    return this.makeRequest<T>(config);
  }

  public delete = async <T>(url: string) => {
    const config: AxiosRequestConfig = {
      headers: {
        ...this.headers,
      },
      method: "DELETE",
      url,
    };

    return this.makeRequest<T>(config);
  }

  public post = async <T>(
    url: string,
    data: any,
  ) => {
    const config: AxiosRequestConfig = {
      headers: {
        ...this.headers,
      },
      method: "POST",
      url,
    };

    config.data = JSON.stringify(data);
    config.headers["Content-Type"] = "application/json";

    return this.makeRequest<T>(config);
  }

  public put = async <T>(url: string, data: any) => {
    const config: AxiosRequestConfig = {
      headers: {
        ...this.headers,
      },
      method: "PUT",
      url,
    };

    config.data = JSON.stringify(data);
    config.headers["Content-Type"] = "application/json";

    return this.makeRequest<T>(config);
  }

  private makeRequest = async <T>(config: AxiosRequestConfig): Promise<{
    data: T;
    [key: string]: any;
  }> => {
    try {
      const response = await axios(config);

      if (successStatuses.includes(response.status)) {
        return response.data;
      }

      throw new NetworkError(response);
    } catch (error) {
      throw error;
    }
  }
}

export { HttpService };
export default new HttpService();
