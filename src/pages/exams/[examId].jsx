import React, { useState } from 'react'
import ExamPageLayout from '../../layouts/ExamPageLayout'
import QuestionCard from './QuestionCard'

export default function ExamDetailsPage() {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: ' Redux store কে পুরো এপ্লিকেশনে available করে দেয় কে ?',
      options: ['Views', 'Containers', 'Provider', 'Action'],
    },
    {
      id: 2,
      question:
        ' reduce() এর তৃতীয় iteration এ counterReducer function টি প্যারামিটারে state এবং action যথাক্রমে কি পাবে?',
      example: <></>,
      options: [
        'State,Reducer',
        'getState function,Store',
        'store,reduxAPI',
        'Thunk,Redux',
      ],
    },
    {
      id: 3,
      question: 'mapStateToProps এর ক্ষেত্রে নিচের কোন তথ্যটি সঠিক নয়?',
      options: [
        'Object return Kore',
        'Ekmatro Parameter hisebe `state` pay',
        'State ke props hisebe availabble kore dey',
        'react-redux er connect function er ekti parameter..',
      ],
    },
    {
      id: 4,
      question: ' Redux store কে পুরো এপ্লিকেশনে available করে দেয় কে ?',
      options: ['Views', 'Containers', 'Provider', 'Action'],
    },
    {
      id: 5,
      question: ' Redux store কে পুরো এপ্লিকেশনে available করে দেয় কে ?',
      options: ['Views', 'Containers', 'Provider', 'Action'],
    },
    {
      id: 6,
      question: ' Redux store কে পুরো এপ্লিকেশনে available করে দেয় কে ?',
      options: ['Views', 'Containers', 'Provider', 'Action'],
    },
    {
      id: 7,
      question: ' Redux store কে পুরো এপ্লিকেশনে available করে দেয় কে ?',
      options: ['Views', 'Containers', 'Provider', 'Action'],
    },
    {
      id: 8,
      question: ' Redux store কে পুরো এপ্লিকেশনে available করে দেয় কে ?',
      options: ['Views', 'Containers', 'Provider', 'Action'],
    },
    {
      id: 9,
      question: ' Redux store কে পুরো এপ্লিকেশনে available করে দেয় কে ?',
      options: ['Views', 'Containers', 'Provider', 'Action'],
    },
    {
      id: 10,
      question: ' Redux store কে পুরো এপ্লিকেশনে available করে দেয় কে ?',
      options: ['Views', 'Containers', 'Provider', 'Action'],
    },
  ])
  const [answers, setAnswers] = useState([])
  let remainingQuestions = questions.filter((qn) => {
    let result = true
    answers?.forEach((ans) => {
      if (ans.id === qn.id) {
        result = false
      }
    })
    return result
  })

  return (
    <>
      <ExamPageLayout
        header={'Exam | Redux Toolkit'}
        questionCount={questions.length}
        answerCount={answers.length}
        remainingQuestions={remainingQuestions}
      >
        <div className=' space-y-4'>
          {questions.map((qn, idx) => (
            <QuestionCard
              onChange={(data) => {
                let updatedAnswers = answers?.filter(
                  (item) => item?.id !== data.id
                )

                if (data.answer.length) {
                  updatedAnswers.push(data)
                }
                setAnswers(updatedAnswers)
              }}
              key={idx}
              id={idx + 1}
              {...qn}
            />
          ))}
        </div>
      </ExamPageLayout>
    </>
  )
}
