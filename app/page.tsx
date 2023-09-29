'use client'

import React from 'react';
import ReactGantt from './gantt-for-react';

import Image from 'next/image'
/* ES6 module in Node.js environment */
// import Calendar from '@toast-ui/react-calendar';
import '@toast-ui/calendar/dist/toastui-calendar.min.css';
import App from './App';

export default function Home() {
  var tasks = [
    {
      id: 'some-udid-b',
      name: 'Redesign asdf',
      start: '2016-12-24 01:00:00',
      end: '2016-12-24 05:00:00',
      progress: 100,
      // dependencies: 'Task 2, Task 3',
      row_id: 0,
      custom_class: 'bar-milestone' // optional
    },
    {
      id: 'some-udid-b',
      name: 'Redesign asdf',
      start: '2016-12-24 13:00:00',
      end: '2016-12-24 14:00:00',
      progress: 100,
      // dependencies: 'Task 2, Task 3',
      row_id: 1,
      custom_class: 'bar-milestone' // optional
    },
    {
      id: 'some-udid-b',
      name: 'Redesign asdf',
      start: '2016-12-24 01:00:00',
      end: '2016-12-24 02:00:00',
      progress: 100,
      // dependencies: 'Task 2, Task 3',
      row_id: 1,
      custom_class: 'bar-milestone' // optional
    },
    {
      id: 'some-udid-b',
      name: 'Redesign asdf',
      start: '2016-12-24 19:00:00',
      end: '2016-12-25 20:00:00',
      progress: 100,
      // dependencies: 'Task 2, Task 3',
      row_id: 1,
      custom_class: 'bar-milestone' // optional
    },
    {
      id: 'some-udid-b',
      name: 'Redesign asdf',
      start: '2016-12-25 01:00:00',
      end: '2016-12-25 05:00:00',
      progress: 100,
      // dependencies: 'Task 2, Task 3',
      row_id: 2,
      custom_class: 'bar-milestone' // optional
    },

  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ReactGantt dateFormat='YYYY-MM-DD' language='zh' viewMode={'Quarter Day'} tasks={tasks}></ReactGantt>
      {/* <Calendar></Calendar> */}
      {/* <App></App> */}

      {/* <Gantt tasks={tasks} listCellWidth="1" viewMode={view} /> */}


    </main>
  )
}
