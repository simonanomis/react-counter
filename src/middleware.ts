export const logger = (store: { getState: () => any; }) => {
    return (next: (arg0: any) => any) => {
        return (action: any) => {
            console.log("[Middleware] Dispatching", action);
            const result = next(action);
            console.log("[Middleware] next state", store.getState());
            return result;
        }
    }
};