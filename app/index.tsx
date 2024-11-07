import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native';
import axios from 'axios';
import RNPickerSelect from 'react-native-picker-select';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import styles from '../styles/styles';

export default function CareerForm() {
  const [formData, setFormData] = useState({
    preferredSubject: '',
    academicPerformance: '',
    interests: '',
    extraCurricular: '',
    skills: '',
  });

  const handleInputChange = (name: string, value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const apiData = {
        Preferred_Subject: formData.preferredSubject,
        Academic_Performance: formData.academicPerformance,
        Interests: formData.interests,
        Extra_Curricular: formData.extraCurricular,
        Skills: formData.skills,
      };

      const response = await axios.post(
        'https://gallant-endurance-production.up.railway.app/predict_career',
        apiData
      );

      

      setFormData({
        preferredSubject: '',
        academicPerformance: '',
        interests: '',
        extraCurricular: '',
        skills: '',
      })
      
      Alert.alert(
        'Form Submitted Successfully',
        `Career Recommendation: ${response.data.predicted_career || 'Sorry AI is learning'}`,
        [
          { text: 'OK', style: 'default' },
          { text: 'View Details', onPress: () => console.log('Details button pressed') },
        ]
      );
      

    } catch (error) {
      Alert.alert('Error', 'There was an issue submitting the form. Please try again.');
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Discover the Career That's Right for You</Text>

        <View style={styles.formContainer}>
          {/* Preferred Subject */}
          <Text style={styles.label}>Preferred Subject</Text>
          <RNPickerSelect
            onValueChange={(value) => handleInputChange('preferredSubject', value)}
            items={[
              { label: 'Mathematics', value: 'Mathematics' },
              { label: 'Biology', value: 'Biology' },
              { label: 'Commerce', value: 'Commerce' },
              { label: 'Arts', value: 'Arts' },
              { label: 'Physics', value: 'Physics' },
              { label: 'Chemistry', value: 'Chemistry' },
              { label: 'English', value: 'English' },
            ]}
            placeholder={{ label: 'Select your preferred subject', value: null }}
            style={{
              inputIOS: styles.dropdown,
              inputAndroid: styles.dropdown,
            }}
            value={formData.preferredSubject}
          />

          {/* Academic Performance */}
          <Text style={styles.label}>Academic Performance</Text>
          <RNPickerSelect
            onValueChange={(value) => handleInputChange('academicPerformance', value)}
            items={[
              { label: 'Excellent', value: 'Excellent' },
              { label: 'Good', value: 'Good' },
              { label: 'Average', value: 'Average' },
            ]}
            placeholder={{ label: 'Select your academic performance', value: null }}
            style={{
              inputIOS: styles.dropdown,
              inputAndroid: styles.dropdown,
            }}
            value={formData.academicPerformance}
          />

          {/* Interests */}
          <Text style={styles.label}>Interests</Text>
          <RNPickerSelect
            onValueChange={(value) => handleInputChange('interests', value)}
            items={[
              { label: 'Technology', value: 'Technology' },
              { label: 'Medicine', value: 'Medicine' },
              { label: 'Finance', value: 'Finance' },
              { label: 'Design', value: 'Design' },
              { label: 'Space Science', value: 'Space Science' },
              { label: 'Data Science', value: 'Data Science' },
              { label: 'Journalism', value: 'Journalism' },
              { label: 'Biotechnology', value: 'Biotechnology' },
            ]}
            placeholder={{ label: 'Select your interests', value: null }}
            style={{
              inputIOS: styles.dropdown,
              inputAndroid: styles.dropdown,
            }}
            value={formData.interests}
          />

          {/* Extra Curricular */}
          <Text style={styles.label}>Extra Curricular Activities</Text>
          <RNPickerSelect
            onValueChange={(value) => handleInputChange('extraCurricular', value)}
            items={[
              { label: 'Robotics Club', value: 'Robotics Club' },
              { label: 'Science Fair', value: 'Science Fair' },
              { label: 'Debate Club', value: 'Debate Club' },
              { label: 'Art Club', value: 'Art Club' },
              { label: 'Astronomy Club', value: 'Astronomy Club' },
              { label: 'Coding Club', value: 'Coding Club' },
              { label: 'Math Club', value: 'Math Club' },
              { label: 'Writing Club', value: 'Writing Club' },
            ]}
            placeholder={{ label: 'Select your extra curricular activities', value: null }}
            style={{
              inputIOS: styles.dropdown,
              inputAndroid: styles.dropdown,
            }}
            value={formData.extraCurricular}
          />

          {/* Skills */}
          <Text style={styles.label}>Skills</Text>
          <RNPickerSelect
            onValueChange={(value) => handleInputChange('skills', value)}
            items={[
              { label: 'Programming', value: 'Programming' },
              { label: 'First Aid', value: 'First Aid' },
              { label: 'Accounting', value: 'Accounting' },
              { label: 'Sketching', value: 'Sketching' },
              { label: 'Problem Solving', value: 'Problem Solving' },
              { label: 'Statistics', value: 'Statistics' },
              { label: 'Quantitative Analysis', value: 'Quantitative Analysis' },
              { label: 'Communication Skills', value: 'Communication Skills' },
              { label: 'Lab Techniques', value: 'Lab Techniques' },
            ]}
            placeholder={{ label: 'Select your skills', value: null }}
            style={{
              inputIOS: styles.dropdown,
              inputAndroid: styles.dropdown,
            }}
            value={formData.skills}
          />

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
}
