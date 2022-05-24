import React, { useState } from 'react'
import { View, StyleSheet,TextInput } from 'react-native'

const KeyboardType = (props) => {
	const { placeholder } = props
	const [number, onChangeNumber] = useState(null);
   
	return(
		<View style={styles.wrapper}>
			<TextInput
				style={styles.Input}
				onChangeText={(onChangeNumber)}
				value={number}
				placeholder={placeholder}
				keyboardType=  "numeric"
			/>
		</View>
		
	)
}

const styles = StyleSheet.create({
	wrapper: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	Input: {
		borderWidth: 1,
		width: 110,
		height: 40,
		borderColor: 'olive',
		position: 'absolute',
		
		
	}
})

export default KeyboardType


