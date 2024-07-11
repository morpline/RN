import React from 'react';
import * as RN from "react-native"
import styles from "./styles"
function Loading(props) {
    const {message} = props
    return (
        <>
            <RN.View style={styles.loadin}>
                <RN.View>
                    <RN.Text style={styles.logo}>
                        {message}
                    </RN.Text>
                </RN.View>
            </RN.View>
        </>
    );
}

export default Loading;