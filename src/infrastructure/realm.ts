import { Realm } from '@realm/react';
import { FailedRequestSchema } from './models/FailedRequests';

const getRealm = async () => {
  return await Realm.open({
    path: 'myrealm',
    schemaVersion: 1,
    schema: [FailedRequestSchema],
  });
};

export default getRealm;
