import { StatusBar } from 'expo-status-bar';
import { Pressable, Modal, StyleSheet, Text, View} from 'react-native';
import { useState } from 'react'

export default function App() {

  const [modalVisible, setModalVisible] = useState(false);


  return (
    <View style={styles.container}>
      <Pressable onPress={() => setModalVisible(true)}>
        <Text>Show Modal</Text>
      </Pressable>
      <Modal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>

        <View style={styles.modalView}>
          <Text style={styles.modalText}>This is modal....</Text>
          <Pressable onPress={() => setModalVisible(false)}>
            <Text>Close</Text>
          </Pressable>
        </View>

      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  modalView: {
    marginTop: '50%',
    backgroundColor: 'lightblue',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
  },

  modalText: {
    marginBottom: 15,
  },
});
