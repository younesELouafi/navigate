import * as React from 'react';
import{ StyleSheet,Text,View,FlatList} from 'react-native';

const DATA = [
    {
      id:"1",
      title:" Ghilal                                                                  2DH"
    },
    {
      id:"2",
      title:" AMBRE NOIR                                                  300DH"
    },
    /*{
      id:"3",
      title:" Ain Soltane                                                         3DH"
    },*/
  ];
    
  const Item = ({title}) => {
    return( 
      <View style={styles.item}>
        <Text>{title}</Text>
      </View>
    );
  }

export default function DetailsScreen({ navigation }) {
    const renderItem = ({item})=>( 
        <Item  title={item.title} />
      );
      return (
        <View style={styles.container}>
          <FlatList
             data={DATA}
             renderItem={renderItem}
             keyExtractor={item => item.id}
          />
          <Text style={styles.container}>          Total                                                                   302DH</Text>
        </View>

        );
}

  
const styles = StyleSheet.create({
  container: {
    marginTop:30,
    padding:2,
  },
  item: {
    backgroundColor: '#00ffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});