import * as Loki from 'lokijs';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const loadLocalDB = (colName: string, db: Loki): Promise<Loki.Collection<any>> => {
  return new Promise(resolve => {
    db.loadDatabase({}, () => {
      const _collection = db.getCollection(colName) || db.addCollection(colName);
      resolve(_collection);
    });
  });
};
