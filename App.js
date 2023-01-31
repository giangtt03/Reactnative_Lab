import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [showState, changeShowState] = useState(false);

  const [name, changeName] = useState('');
  const [desc, changeDesc] = useState('');
  const [img, changeImge] = useState('');

  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, { name, desc, img }]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Họ tên: Tạ Trường Giang</Text>
      <Text style={styles.text}>MSSV: PH27127</Text>
      <Button title="Thêm mới"  onPress={() => changeShowState(true)} />
      {showState ? (
        <>
          <TextInput style={styles.textInput}
            onChangeText={changeName}
            placeholder='Họ tên' />
          <TextInput style={styles.textInput}
            onChangeText={changeDesc}
            placeholder='Mô tả' />
          <TextInput style={styles.textInput}
            onChangeText={changeImge}
            placeholder='DRC' />
          <View style={{ flexDirection: "row" }}>
            <Button title='Hủy' onPress={() => changeShowState(false)} />
             <Text style={{color:'rgb(204, 255, 204)'}}> </Text>
            <Button title='Thêm' onPress={addData} />
          </View>
        </>
      ) : (
        null
      )}
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
              <Image style={styles.image} source={{ uri: item.imgState }} />
              <View style={styles.text}>
                <Text>Họ tên: {item.name}</Text>
                <Text>Mô tả: {item.desc}</Text>
              </View>
            </View>
          </>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 90,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: 13,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    backgroundColor: '#e5f2ff',
  }
  , textInput: {
    width: 400,
    height: 50,
    fontSize: 20,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    color: '#B762bd'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25
  },

});