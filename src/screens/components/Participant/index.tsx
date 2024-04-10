import { View, Text, Pressable } from 'react-native'
import { styles } from './styles';


type Props = {
    name: string;
    onRemove: () => void;

}

export function Participant({name, onRemove}: Props) {
    return(
        <View style={styles.container}>
            <Text style={styles.name}>
                {name}
            </Text>


            <Pressable style={styles.button} onPress={onRemove}>
                <Text style={styles.buttonText}>
                    -
                </Text>
            </Pressable>
        </View>
        
    );
}