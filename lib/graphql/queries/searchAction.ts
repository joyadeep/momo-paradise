"use server"

import { getPredictiveSearch } from "./searchProductQuery"

export async function fetchPredictiveSearch(term:string) {
    return getPredictiveSearch(term);
}