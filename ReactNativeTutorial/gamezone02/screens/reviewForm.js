import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button';

const reviewSchema = yup.object({
  title: yup.string()
    .required()
    .min(4),
  body: yup.string()
    .required()
    .min(8),
  rating: yup.string()
    .required()
    .test('is-num-1-5', 'rating must be a number 1 to 5', (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

export default function ReviewForm({ addReview }){
  return (
    <View style={globalStyles.container}>
      <Formik 
        initialValues={{ title: '', body: '', rating: '' }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addReview(values);
        }}
      >
        { (propsFormik) => (
          <View>
            <TextInput 
              style={globalStyles.input}
              placeholder='Review title'
              onChangeText={propsFormik.handleChange('title')}
              value={propsFormik.values.title}
              onBlur={propsFormik.handleBlur('title')}
            />
            <Text style={globalStyles.errorText}>{ propsFormik.touched.title && propsFormik.errors.title }</Text>

            <TextInput 
              multiline
              style={globalStyles.input}
              placeholder='Review body'
              onChangeText={propsFormik.handleChange('body')}
              value={propsFormik.values.body}
              onBlur={propsFormik.handleBlur('body')}
            />
            <Text style={globalStyles.errorText}>{ propsFormik.touched.body && propsFormik.errors.body }</Text>

            <TextInput 
              style={globalStyles.input}
              placeholder='Review (1-5)'
              onChangeText={propsFormik.handleChange('rating')}
              value={propsFormik.values.rating}
              keyboardType='numeric'
              onBlur={propsFormik.handleBlur('rating')}
            />
            <Text style={globalStyles.errorText}>{ propsFormik.touched.rating && propsFormik.errors.rating }</Text>

            <FlatButton text='submit' onPress={propsFormik.handleSubmit} />

          </View>
        )}
      </Formik>
    </View>
  )
}