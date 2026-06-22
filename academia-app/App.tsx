import { StatusBar } from 'expo-status-bar';
// Importamos a nossa tela recém-criada
import { Register } from './src/screens/register'; 

export default function App() {
  return (
    <>
      <Register />
      <StatusBar style="auto" />
    </>
  );
}