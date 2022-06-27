import { createRealmContext, Realm } from '@realm/react';

import { FailedRequest } from './models/FailedRequests';

export const RealmContext = createRealmContext({
  schema: [FailedRequest],
  schemaVersion: 1,
});
