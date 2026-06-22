import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// 1. Importamos a nossa configuração do Axios
import { api } from '../services/api';

export function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [belt, setBelt] = useState('');

  // 2. Transformamos a função em assíncrona (async) porque a requisição leva um tempo
  async function handleRegister() {
    // Validação básica para não enviar dados vazios
    if (!name || !email || !belt) {
      alert('Atenção: Preencha todos os campos!');
      return;
    }

    try {
      // 3. O "Pulo do Gato": fazemos um POST para a rota /students do nosso backend
      const response = await api.post('/students', {
        name,
        email,
        belt
      });

      // Se deu certo, mostramos uma mensagem de sucesso e limpamos os campos
      alert('Sucesso! Aluno matriculado no tatame.');
      setName('');
      setEmail('');
      setBelt('');
      
    } catch (error: any) {
      // Se o backend devolver erro (ex: e-mail já existe), mostramos na tela
      alert(`Erro: ${error.response?.data?.error || 'Não foi possível conectar ao servidor.'}`);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Novo Aluno no Tatame. OSS!</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome completo"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Faixa (ex: Branca, Azul)"
        value={belt}
        onChangeText={setBelt}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#F2F2F2',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 32,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#000',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});