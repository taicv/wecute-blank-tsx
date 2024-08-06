

import { Text,PaperProvider } from 'react-native-paper';

export default function Page() {
  return (
    <PaperProvider>
      <Text variant="displayLarge">About</Text>
    </PaperProvider>
  );
}