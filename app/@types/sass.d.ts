declare module "*.css"
declare module "*.scss"

declare global {
    interface Window {
      dataLayer: { push: (data: any) => void };
    }
  }
  
  export {};