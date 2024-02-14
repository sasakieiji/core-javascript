export function refError(message){
    throw new refError(message);
}

export * from "./typeError.js"
export * from "./refError.js"