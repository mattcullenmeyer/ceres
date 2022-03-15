declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string;
      PORT: number;
      HOST: string;
    }
  }
}

export {};