// src/declarations.d.ts
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.svg';
declare module '*.webp';

declare module 'react' {
  export type FormEvent<T = Element> = {
    preventDefault(): void;
    stopPropagation(): void;
    target: T;
    currentTarget: T;
  };
  export function useState<T>(initialState: T | (() => T)): [T, (newState: T | ((prevState: T) => T)) => void];
  export function useEffect(effect: () => void | (() => void), deps?: any[]): void;
  export function useCallback<T extends (...args: any[]) => any>(callback: T, deps: any[]): T;
  export function useMemo<T>(factory: () => T, deps: any[] | undefined): T;
  export function useRef<T>(initialValue?: any): { current: any };
  const React: any;
  export default React;
}

declare module 'react-dom';
declare module 'react-dom/client';
declare module 'react-helmet-async';
declare module 'motion/react';
declare module 'framer-motion';
declare module 'lucide-react';
declare module 'react-router-dom';
declare module 'react/jsx-runtime';