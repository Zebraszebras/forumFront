'use client'
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import styles from "./page.module.css";

const MainPage = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8082/question/questions"
        );
        const { data } = response;

        const mappedQuestions = data.questions.map((question) => ({
          id: question._id, // Use _id instead of id
          text: question.question_text,
        }));

        setQuestions(mappedQuestions);
      } catch (err) {
        console.log(err);
        setQuestions([]);
      }
    };

    fetchData();
  }, []);

  if (questions.length === 0) {
    return (
      <div>
        <Navbar />
        <div>
          <h2>No questions available.</h2>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <h1>Labas</h1>
      <div className={styles.questionsWrapper}>
        {questions.map((question) => (
          <div key={question.id}>
           {question.text},  {question.id}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
