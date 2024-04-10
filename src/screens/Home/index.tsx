import { Text, View, TextInput, Pressable, FlatList, Alert } from 'react-native';
import { styles } from './styles';
import React, {useState} from 'react';

import { Participant } from '../components/Participant';

export function Home(){
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');


  function handleParticipantAdd() {
    if(participants.includes(participantName)){
    return Alert.alert('Participante Existe', 'Já existe um participante com esse nome na lista')
    }

    setParticipants(prevState =>[...prevState, participantName]);
    setParticipantName('');



  }

  function handleParticipantRemove(name: string) {


    Alert.alert('Remover', `Remover o participante ${name}?`, [
      {
        text:'Sim',
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
      },
      {
        text:'Não',
        style: 'cancel'
      }
    ])
  }

  function handleStates(value: string) {
    setParticipantName(value)
  }

  return(
    <View style={styles.container}>

      <Text style={styles.text}>
      Evento de teste
      </Text>

    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder='Digite o nome do participante aqui'
        placeholderTextColor={'#6B6B6B'}
        onChangeText={setParticipantName}
        value={participantName}
      />
      <Pressable style={styles.button} onPress={handleParticipantAdd}>
        <Text style={styles.buttonText}>
            +
        </Text>
      </Pressable>
    </View>

    <FlatList
      data={participants}
      keyExtractor={item => item}
      renderItem={({ item }) => (
        <Participant
          key={item}
          name={item} 
          onRemove={() => handleParticipantRemove(item)}
        />
      )}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() => (
        <Text style={styles.listEmptyText}>
          Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
        </Text>
      )}
    />


    </View>
  )
}