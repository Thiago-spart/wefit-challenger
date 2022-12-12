/* eslint-disable @typescript-eslint/ban-types */
export type WithChildren<T = {}> = T & { children?: React.ReactNode };
