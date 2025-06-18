// Extend the Window interface to include adsbygoogle
declare global {
  interface Window {
    adsbygoogle: { [key: string]: any }[];
  }
}

export {};
