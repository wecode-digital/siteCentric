declare module "*.css";
declare module "*.scss";

interface DataLayerEvent {
  event: string;
  [key: string]: any; // Permite outras propriedades com chaves de string
}

declare global {
  interface Window {
    dataLayer: {
        // eslint-disable-next-line  @typescript-eslint/no-explicit-any
      push: (data: any) => void;
    };
  }
}

export {};