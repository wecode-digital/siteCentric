declare module "*.css";
declare module "*.scss";

declare global {
  interface Window {
    dataLayer: {
        // eslint-disable-next-line  @typescript-eslint/no-explicit-any
      push: (data: any) => void;
    };
  }
}

export {};