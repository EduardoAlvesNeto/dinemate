import 'reflect-metadata';

import express from 'express';

import { AppDataSource } from './app/database/db';

AppDataSource.initialize()
  .then(() => {
    const app = express();

    app.listen(3001, () => {
      console.log('🚀 Server is running on http://localhost:3001');
    });
  })
  .catch(() => {
    console.log('⚠️ Database Error');
  });
