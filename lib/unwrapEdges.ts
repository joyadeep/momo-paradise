type Connection<T> = {
  edges: Array<{ node: T }>;
};

export function unwrapEdges<T>(connection?: Connection<T>): T[] {
  return connection?.edges.map((edge) => edge.node) ?? [];
}