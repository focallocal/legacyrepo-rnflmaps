// @flow
import * as React from 'react'
import {StyleSheet, Text} from 'react-native'

export function ErrorText({errorMessage} : {errorMessage?: string}) {
  return errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null
}

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: 'red',
    padding: 3,
    borderRadius: 5,
  }
})
