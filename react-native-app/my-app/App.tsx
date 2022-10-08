import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import QuestionsComponent from './components/Questions';
import MyPoint from './components/MyPoint';
import Board from './components/Board';

type IScreenView = 'main' | 'board';

export interface IUsers {
  name: string;
  point: number;
}

export interface IPointContext {
  point: number;
  marks: Array<number>;
  users: IUsers[];
  screen: IScreenView;
  resetPoint: () => void;
  updatePoint: (v: number) => void;
  updateMarks: (v: number) => void;
  updateUsers: (v: IUsers) => void;
  updateScreen: (v: IScreenView) => void;
}

export const PointContext = React.createContext<IPointContext>({
  point: 0,
  marks: [],
  users: [],
  screen: 'main',
  resetPoint: () => {},
  updatePoint: () => {},
  updateMarks: () => {},
  updateUsers: () => {},
  updateScreen: () => {},
});

export default function App() {
  const [point, setPoint] = React.useState(0);
  const [screen, setScreen] = React.useState<IScreenView>('main');
  const [marks, setMarks] = React.useState<Array<number>>([]);
  const [users, setUsers] = React.useState<IUsers[]>([]);

  const updatePoint = (value: number) => {
    setPoint(point + value);
  };

  const updateMarks = (value: number) => {
    const newMarks: Array<number> = [...marks];
    newMarks.push(value);
    setMarks(newMarks);
  };

  const resetPoint = () => {
    setPoint(0);
    setMarks([]);
  };

  const updateUsers = (value: IUsers) => {
    const newUsers: IUsers[] = [...users];
    newUsers.push(value);
    setUsers(newUsers);
  };

  const updateScreen = (value: IScreenView) => {
    setScreen(value);
  };

  const storeContext = {
    point,
    marks,
    users,
    screen,
    updatePoint,
    updateMarks,
    resetPoint,
    updateUsers,
    updateScreen,
  };

  return (
    <PointContext.Provider value={storeContext}>
      <StatusBar />
      {screen === 'main' && (
        <View style={styles.container}>
          <MyPoint />
          <QuestionsComponent />
        </View>
      )}
      {screen === 'board' && (
        <View style={styles.container}>
          <Board />
        </View>
      )}
    </PointContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
