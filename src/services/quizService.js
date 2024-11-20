import { useEffect, useState } from "react";
import { Fetch } from "../helpers/fetchWrapper";
import { useCancellablePromise } from "../helpers/promiseHandler";

const STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
};
const quizService = {
  _url: "https://us-store-backend.vercel.app/api",
  /**
   * Hooks
   */

  GetQuiz(fetch) {
    const [quiz, setQuiz] = useState({
      quiz: {},
    });
    const { cancellablePromise } = useCancellablePromise();
    const [status, setStatus] = useState(STATUS.LOADING);
    useEffect(() => {
      setStatus(STATUS.LOADING);
      cancellablePromise(this.getQuiz())
        .then((res) => {
          setQuiz(() => res);
          setStatus(STATUS.SUCCESS);
        })
        .catch(() => setStatus(STATUS.ERROR));
    }, [fetch]);
    return {
      quiz_loading: status === STATUS.LOADING,
      quiz_error: status === STATUS.ERROR ? status : "",
      quiz_data: quiz,
    };
  },

  async getQuiz() {
    let res = await Fetch.get(`${this._url}/getQuiz`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      console.log(res);
      return {
        quiz: res.items,
      };
    }
    const { message } = await res.json();
    throw new Error(message ?? "Something went wrong");
  },

  async addQuiz(payload) {
    let res = await Fetch.post(`${this._url}/addQuiz`, payload);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? "Something went wrong");
  },
};
export default quizService;
