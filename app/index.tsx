import { Text,PaperProvider } from 'react-native-paper';

export default function Page() {
  return (
    <PaperProvider>
      <Text variant="displayLarge">Display Large</Text>
    </PaperProvider>
  );
}