import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import questions, { IQuestions } from '../mock/data';
import { PointContext } from '../App';

export default function QuestionsComponent() {
  const [text, setText] = useState<string>('');
  const pointContext = React.useContext(PointContext);
  const [data, setData] = useState<IQuestions[]>(questions);
  const [question, setQuestion] = useState<IQuestions | null>(null);
  const [selectId, setSelectId] = useState<number>(0);
  const noQuestions = pointContext.marks.length === data.length;

  /**
   * If the question is not null, and the selected answer is the correct answer, then update the point by
   * 1, and update the marks by the question id
   */
  const onSubmit = async () => {
    if (question) {
      if (selectId === question.correctAnswer) {
        pointContext.updatePoint(1);
      }
      pointContext.updateMarks(question.id);
      setSelectId(0);
    }
  };

  /**
   * This function will randomQuestion when user click submit
   */
  const randomQuestion = () => {
    const allQuestions = data.filter((v) => !pointContext.marks.includes(v.id));
    const getQ = allQuestions[Math.floor(Math.random() * allQuestions.length)];
    setQuestion(getQ);
  };

  /**
   * When the user clicks the "Enter Name" button, the name and point values are saved to the users array
   * in the pointContext, the point value is reset to 0, and the screen is changed to the board screen
   */
  const onEnterName = () => {
    pointContext.updateUsers({ name: text, point: pointContext.point });
    pointContext.resetPoint();
    pointContext.updateScreen('board');
  };

  /* Watch some state change and random new question */
  React.useEffect(() => {
    if (pointContext.marks.length || pointContext.marks.length === 0) {
      randomQuestion();
    }
  }, [pointContext.marks]);

  return (
    <View style={styles.container}>
      {noQuestions && (
        <View
          style={{
            width: Dimensions.get('window').width - 60,
            justifyContent: 'center',
            flex: 1,
          }}
        >
          <Text style={styles.success}>Thank you.</Text>
          <TextInput
            style={{
              padding: 20,
              marginTop: 50,
              borderWidth: 1,
            }}
            onChangeText={setText}
            value={text}
            placeholder={'Enter you name'}
          />
          <View style={styles.submit}>
            <Button onPress={onEnterName} disabled={!text} title="OK" />
          </View>
        </View>
      )}
      {!noQuestions && question && (
        <>
          <Text style={styles.titleTopic}>ข้อที่ {pointContext.marks.length + 1}</Text>
          <Text style={styles.title}>{question.title}</Text>
          <View style={styles.answerBox}>
            {question.answers.map((v, i) => (
              <TouchableOpacity key={i} onPress={() => setSelectId(v.id)}>
                <View
                  style={
                    selectId === v.id
                      ? styles.itemAnswerSelect
                      : styles.itemAnswer
                  }
                >
                  <Text>
                    {v.id}. {v.title}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
            <Text style={{ marginTop: 10 }}>
              Hint: {question.correctAnswer}
            </Text>
          </View>

          <View style={styles.submit}>
            <Button onPress={onSubmit} disabled={!selectId} title="Submit" />
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleTopic: {
    fontSize: 14,
  },
  title: {
    marginTop: 10,
    fontSize: 18,
  },
  submit: {
    marginTop: 30,
  },
  answerBox: {
    marginTop: 10,
    width: 300,
  },
  itemAnswer: {
    padding: 10,
    borderColor: '#000000',
    borderWidth: 1,
    marginTop: 10,
  },
  itemAnswerSelect: {
    backgroundColor: 'pink',
    padding: 10,
    borderWidth: 1,
    marginTop: 10,
  },
  success: { fontSize: 30, color: 'green' },
});
