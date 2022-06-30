import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { FailedRequest } from '../../infrastructure/models/FailedRequests';
import { RealmContext } from '../../infrastructure/realm';

export default function HomeScreen() {
  const { useQuery, useRealm } = RealmContext;
  const realm = useRealm();
  const failedRequest = useQuery(FailedRequest);

  // useEffect(() => {
  // }, []);

  const handlePress = () => {
    console.log('pressed');
    realm.write(() => {
      realm.create(
        'FailedRequest',
        FailedRequest.generate(
          'https://www.npmjs.com/package/@realm/react',
          JSON.stringify({ name: 'Jonathan', surname: 'Ferreira' })
        )
      );
    });
  };

  return (
    <View>
      <StatusBar style="auto" />
      <Text>Home Screen</Text>
      <Button title="press mse" onPress={handlePress} />
    </View>
  );
}
