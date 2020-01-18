import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';

export default function ReviewForm(){
  return (
    <View style={globalStyles.container}>
      <Formik 
        initialValues={{ title: '', body: '', rating: '' }}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        { (propsFormik) => (
          <View>
            <TextInput 
              style={globalStyles.input}
              placeholder='Review title'
              onChangeText={propsFormik.handleChange('title')}
              value={propsFormik.values.title}
            />

            <TextInput 
              multiline
              style={globalStyles.input}
              placeholder='Review body'
              onChangeText={propsFormik.handleChange('body')}
              value={propsFormik.values.body}
            />

            <TextInput 
              style={globalStyles.input}
              placeholder='Review (1-5)'
              onChangeText={propsFormik.handleChange('rating')}
              value={propsFormik.values.rating}
              keyboardType='numeric'
            />

            <Button title='submit' color='maroon' onPress={propsFormik.handleSubmit} />

          </View>
        )}
      </Formik>
    </View>
  )
}