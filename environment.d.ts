declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PLAYWRIGHT_SKIP_VALIDATE_HOST_REQUIREMENTS: boolean;
      PLAYWRIGHT_LAUNCH_OPTIONS_EXECUTABLE_PATH: string;
      PLAYWRIGHT_BROWSERS_PATH: string;
    }
  }
}

export type {};
