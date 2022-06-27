import { Realm } from '@realm/react';

export class FailedRequest extends Realm.Object {
  _guid!: Realm.BSON.ObjectId;
  url!: string;
  data!: string;
  createdAt!: Date;

  static generate(url: string, data: string) {
    return {
      _guid: new Realm.BSON.ObjectId(),
      url,
      data,
      createdAt: new Date(),
    };
  }

  static schema = {
    name: 'FailedRequest',
    primaryKey: '_guid',
    properties: {
      _guid: 'objectId',
      url: 'string',
      data: 'string',
      createdAt: 'date',
    },
  };
}
