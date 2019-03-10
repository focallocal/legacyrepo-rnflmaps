import React from 'react'
import {TextInput, StyleSheet} from 'react-native'

type Props = {
  onChangeText?: () => string,
  onEndEditing?: () => void,
  placeholder?: string,
  value: string,
}

const Input = (props: Props) => {
  const {
    onChangeText,
    onEndEditing,
    placeholder,
    value,
  } = props

  return (
    <TextInput
      onChangeText={onChangeText}
      onEndEditing={onEndEditing}
      placeholder={placeholder}
      style={styles.input}
      value={value}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 200,
    borderRadius: 5,
    padding: 5,
  }
})

export default Input