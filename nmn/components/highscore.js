import AsyncStorage from "@react-native-async-storage/async-storage";
const storeData = async (value) => {
    try {
        await AsyncStorage.setItem('highscore', value);
    } catch (e) {
        // saving error
    }
};

const getData = async () => {
    try {
        const value = await AsyncStorage.getItem('highscore');
        if (value !== null) {
            return value
        // value previously stored
        } else {
            return 10000000
        }
    } catch (e) {
        // error reading value
    }
};

export {storeData, getData}