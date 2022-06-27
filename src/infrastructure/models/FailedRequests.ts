import { ObjectSchema } from 'realm';

export const FailedRequestSchema: ObjectSchema = {
  name: 'FailedRequest',
  properties: {
    guid: 'string',
    url: 'string',
    data: 'string',
  },
  primaryKey: 'guid',
};
