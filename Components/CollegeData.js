import {Text,View,Button} from 'react-native'

const CollegeData=()=> {
    return (
      <View>
        <Text
          style={{
            fontSize: 20,
            color: "white",
            fontWeight: "bolder",
            
          }}
        >
          Upcomming Hackathons
        </Text>
        <Button title="hihi" onPress={() => console.log("hi")}></Button>
  
      </View>
    )
  }

  export default CollegeData;
  