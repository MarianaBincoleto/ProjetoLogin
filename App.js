import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import TextInputMask from 'react-native-mask-input';


export default function App() {
  const [userNome, setNome] = useState('');
  const [userEmail, setEmail] = useState('');
  const [userTelefone, setTelefone] = useState('');

  function newUSer() {
    if (userNome === '' || userEmail === '' || userTelefone === '') {
      alert("Todos os campos devem ser preenchidos");
      return;
    } else {
      alert("cadastro realizado com sucesso!")
    }
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}> Preencha os campos abaixo</Text>
      <TextInputMask style={styles.input}
        placeholder='Nome...'
        value={userNome}
        onChangeText={setNome}
      />
      <TextInputMask style={styles.input}
        placeholder="Email..."
        autoComplete='email'
        value={userEmail}
        onChangeText={setEmail}
      />
      <TextInputMask style={styles.input}
        keyboardType={'phone-pad'}
        options={{
          maskType: 'BRL_PHONE',
          withDDD: true,
          dddMask: '(99) '
        }}
        placeholder="Telefone..."
        value={userTelefone}
        onChangeText={setTelefone}
        mask={['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}

      />

      <TouchableOpacity style={styles.botao} onPress={newUSer}>
        <Text style={styles.botao_texto}>Enviar</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00C0B5',
    fontFamily: 'Arial',
  },
  title: {
    fontSize: 20,
    justifyContent: 'center',
    textAlign: 'center',
  },
  input: {
    height: 50,
    fontSize: 20,
    width: '90%',
    backgroundColor: '#D9D9D9',
    padding: 15,
    top: 10,
    flexDirection: 'row',
    borderRadius: 20,
  },
  botao: {
    height: 50,
    fontSize: 20,
    width: '98%',
    borderRadius: 150,
    textAlign: 'center',
    backgroundColor: '#000000',
    marginTop: 50,
  },
  botao_texto: {
    color: '#FFFFFF',
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom: 'auto',
    marginTop: 12,
  }

});
