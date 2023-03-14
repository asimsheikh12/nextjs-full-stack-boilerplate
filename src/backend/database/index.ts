import mongoose from 'mongoose';

/* eslint-disable no-console */
import { config } from '../config';
import { isBoolean } from '../utils';

type IConnection = {
  isConnected: mongoose.ConnectionStates | boolean;
};
const connection: IConnection = {
  isConnected: false,
};

mongoose.set('strictQuery', true);

async function connect(): Promise<void> {
  if (connection?.isConnected && isBoolean(connection.isConnected)) {
    console.log('Database is already connected!');
    return;
  }
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0]!.readyState;
    if (connection?.isConnected === 1) {
      console.log('Using previous database connection!');
      return;
    }
    await mongoose.disconnect();
  }
  await mongoose.connect(config.DB.MONGO_URI!);

  const database = mongoose.connection;
  database.on('error', () => {
    connection.isConnected = false;
  });
  database.on('open', () => {
    connection.isConnected = true;
  });
  console.log('Database connected successfully!');
}

async function disconnect(): Promise<void> {
  if (connection?.isConnected) {
    if (process.env.NODE_ENV === 'production') {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log('not disconnected');
    }
  }
}

function databaseStatus(): {
  state: string;
  dbState: string;
} {
  return {
    state: mongoose.connection.readyState === 1 ? 'up' : 'down',
    dbState: mongoose.STATES[mongoose.connection.readyState]!,
  };
}

export { connect, databaseStatus, disconnect };
