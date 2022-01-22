import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import Popup from "reactjs-popup";

import Calculators from "../Components/inside/Calculators";
import { Modal } from "react-bootstrap";

const Starts = () => {
  return (
    <Popup position="top left" trigger={<option>Graph</option>}>
      <Calculators />
    </Popup>
  );
};

const theme = {
  background: "#F3D5B5",

  fontFamily: "Gill Sans",
  headerBgColor: "#A47148",
  headerFontColor: "#fff",
  headerFontSize: "20px",

  botBubbleColor: "#BC8A5F",
  botFontColor: "#ffffff",

  userBubbleColor: "#D4A276",
  userFontColor: "#ffffff",
};

//------------------  button  ----------

const config = {
  width: "380px",
  height: "600px",
  floating: true,
};

//----------  Summary page --------------

class Summary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: " ",
      age: " ",
      salaryanswer: " ",
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { name, age, salaryanswer } = steps;

    this.setState({ name, age, salaryanswer });
  }
}

Summary.propTypes = {
  steps: PropTypes.object,
};

Summary.defaultProps = {
  steps: undefined,
};

////////---  Component class
class SimpleForm extends Component {
  constructor() {
    super();
    this.state = {
      SimpleForm: [],
    };
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <ChatBot
          botAvatar="user2.gif"
          userAvatar="user2.gif"
          headerTitle="Speech Synthesis,"
          speechSynthesis={{ enable: false, lang: "en" }}
          headerTitle="TT Builders"
          recognitionEnable={true}
          steps={[
            //Introduction message

            //////////////----   ENGLISH  ---------//////////////////////

            //First question

            {
              id: "intro-eng",
              message:
                "Hey 👋\n I'm Andreah!",
              trigger: "intro-job",
              delay: 600,
            },

            {
              id: "intro-job",
              message:
              "I am TT Builders' virtual assistant.",
              trigger: "start-question-english",
              delay: 600,
            },

            {
              id: "start-question-english",
              message: "I am here to help you!🤗",
              trigger: "start-question",
              delay: 600,
            },

            {
              id: "start-question",
              message: "Shall we get to know each other?😃",
              trigger: "option-first",
              delay: 600,
            },

            // 1st Option
            {
              id: "option-first",
              options: [
                { value: "yes", label: "Yes, Please", trigger: "yes-resp" },
                { value: "no", label: "No", trigger: "no-resp" },
              ],
              delay: 600,
            },

            // no response
            {
              id: "no-resp",
              message: "Sure!, ping me when you are ready\n Have a nice day!",
              delay: 600,
              trigger: "no-resp-ans-one",
            },

            // start again

            {
              id: "no-resp-ans-one",
              options: [
                {
                  value: "again",
                  label: "Start again 😁",
                  trigger: "start-question",
                },
              ],
              delay: 600,
            },

            //yes response

            {
              id: "yes-resp",
              message: "Perfect",
              delay: 600,
              trigger: "afterone",
            },

            {
              id: "afterone",
              message: "How should I call you?",
              delay: 600,
              trigger: "name",
            },

            // User response
            {
              id: "name",
              user: true,
              delay: 600,
              trigger: "name-wish",
            },

            {
              id: "name-wish",
              message: "Nice to e-meet you {previousValue}😃",
              trigger: "question-two",
              delay: 600,
            },

            {
              id: "question-two",
              message: " Welcome to our TT Builders' Life planner! ",
              delay: 600,
              trigger: "question-three",
            },
            {
              id: "question-three",
              message: "Let us help you plan your Future",
              delay: 600,
              trigger: "question-four",
            },

            {
              id: "question-four",
              message: "Are u ready for a few questions to analyse? 😊",
              delay: 600,
              trigger: "question-five",
            },

            {
              id: "question-five",
              options: [
                { value: "getstart", label: "Yup! GET STARTED", trigger: "future-question"},
                { value: "no", label: "No", trigger: "no-resp" },
              ],
              delay: 600,
            },

            {
              id: "future-question",
              message: "We care a lot about your safety! 😀",
              delay: 600,
              trigger: "future-question-sub",
            },

            {
              id: "future-question-sub",
              message: "How are you today?",
              delay: 600,
              trigger: "answer-one",
            },

            {
              id: "answer-one",
              options: [
                {
                  value: "good",
                  label: "GOOD 😋",
                  trigger: "future-look",
                },
                { value: "bad", label: "NOT GOOD 😑", trigger: "bad-question" },
              ],
              delay: 600,
            },

            {
              id: "bad-question",
              message: "I'm sorry to hear that you're having a tough time.😀",
              delay: 600,
              trigger: "user-resp-three",
            },
            {
              id: "user-resp-three",
              message: "Is there anything i can do for making you better? 😀",
              delay: 600,
              trigger: "answer-two",
            },

            {
              id: "answer-two",
              options: [
                { value: "y", label: "yes 😋", trigger: "question-yes" },
                { value: "n", label: "No 🙂", trigger: "start-stop" },
              ],

              delay: 600,
            },

            {
              id: "question-yes",
              options: [
                { value: "jokes", label: "Jokes 😋 ", trigger: "jokes-ans" },
                { value: "no", label: "No please", trigger: "start-stop" },
              ],
              delay: 600,
            },

            {
              id: "jokes-ans",
              component: (
                <div>DOCTOR:- Do exercise daily for good health🙄</div>
              ),
              delay: 600,
              trigger: "jokes-ans-two",
            },

            {
              id: "jokes-ans-two",
              component: (
                <div>
                  PATIENT:- Sir I play tennis, football and cricket daily..
                </div>
              ),
              delay: 2800,
              trigger: "jokes-ans-three",
            },

            {
              id: "jokes-ans-three",
              component: <div>DOCTOR:- Very Good! how long do you play?</div>,
              delay: 2800,
              trigger: "jokes-ans-four",
            },

            {
              id: "jokes-ans-four",
              component: (
                <div>
                  PATIENT:- until the battery in my mobile goes down 🤣🤣🤣
                </div>
              ),
              delay: 2800,
              trigger: "jokes-ans-five",
            },

            {
              id: "jokes-ans-five",
              component: <div>DOCTOR:- 🙄🙄🙄</div>,
              delay: 2800,
              trigger: "jokes-finish",
            },

            {
              id: "jokes-finish",
              message: "How are you now?",
              delay: 2500,
              trigger: "step-one",
            },

            {
              id: "step-one",
              options: [
                { value: "fine", label: "Better, ", trigger: "main-question-two" },
                { value: "No", label: "Still Not Good  ", trigger: "start-stop" },
              ],
              delay: 600,
            },

            {
              id: "start-two",
              options: [
                {
                  value: "again",
                  label: "Start again 😁",
                  trigger: "start-question",
                },
              ],
              delay: 600,
            },
            
            {
              id: "start-stop",
              message: "Do you still really want to continue now?",
              trigger: "start-stop-option",
              delay: 600,
            },

            {

              id: "start-stop-option",
              options: [
                { value: "Yes", label: "Yes", trigger: "main-question-one" },
                { value: "No", label: "Not really", trigger: "stop-two" },
              ],
              delay: 600,
              },

            {
              id: "stop-two",
              message: "Sure! We respect your mood, Catch u some time later! ",
              delay: 600,
              trigger: "stop-three",
            },

            {
              id: "stop-three",
              options: [
                {
                  value: "startagain",
                  label: "Start again 😁",
                  trigger: "start-question",
                },
              ],
              delay: 600,
            },

            {
              id: "question-no",
              message: "Ok, will see next time, have a nice day ",
              delay: 600,
              trigger: "question-no-one",
            },

            {
              id: "question-no-one",
              options: [
                {
                  value: "startagain",
                  label: "Start again 😁",
                  trigger: "start-question",
                },
              ],
              delay: 600,
            },

            {
              id: "jokes-no-ans",
              message: "Oh sorry ! will see next time ",
              delay: 600,
              trigger: "question-no-two",
            },

            {
              id: "question-no-two",
              options: [
                {
                  value: "startagain",
                  label: "Start again 😁",
                  trigger: "start-question",
                },
              ],
              delay: 600,
            },

            {
              id: "main-question-one",
              message: "Are you ready for some more questions? 😃",
              delay: 600,
              trigger: "main-question-two",
            },

            {
              id: "main-question-two",
              options: [
                { value: "ready", label: "Yes, I am ready... 😁", trigger: "future-look",},
                { value: "notready", label: "Not now", trigger: "stop-two" },
              ],
              delay: 600,
            },

            {
              id: "future-look",
              message: "Nice, Please select an Option ",
              delay: 600,
              trigger: "future-look-one",
            },

            {
              id: "future-look-one",
              options: [
                {
                  value: "futurelooks",
                  label: "How Can I find the Budget of My Project ? 😁",
                  trigger: "choice",
                },
                {
                  value: "predication",
                  label: "How can you help with me my Dream Projects 😃",
                },
                {
                  value: "about-tt",
                  label: "What is special about TT Builders 😊",
                },
              ],
              delay: 600,
            },

            {
              id: "choice",
              message: "Good Choice",
              delay: 600,
              trigger: "future-look-two",
            },

            {
              id: "future-look-two",
              message: "What is your age ? 🧐",
              delay: 600,
              trigger: "age",
            },

            //        ],
            //     delay:600,

            {
              id: "age",
              validator: (age) => {
                if (isNaN(age)) {
                  return "Age should be a number";
                }
                if (isNaN(age) || age < 1 || age > 100) {
                  return "Age must be a number between 1 to 100";
                }
                return true;
              },
              user: true,
              delay: 1500,
              trigger: "write-age-one",
            },

            {
              id: "write-age-one",
              delay: 1500,
              message: "Perfect age for a start up 😎",
              trigger: "future-question-start",
            },

            {
              id: "future-question-start",
              delay: 1500,
              message: "I will help you to predict your financial position",
              trigger: "future-question-one",
            },

            {
              id: "future-question-one",
              delay: 1500,
              message: "First, I need to understand your future goals.",
              trigger: "future-question-two",
            },

            {
              id: "future-question-two",
              delay: 1500,
              message: "Please select one of the options below...",
              trigger: "future-question-three",
            },

            {
              id: "future-question-three",
              options: [
                { value: "House", label: "HOUSE 🏡", trigger: "house-question-one",},
                { value: "Education", label: "EDUCATION 👨‍🎓" },
                { value: "Vehicle", label: "VEHICLE 🚗" },
                { value: "Wedding", label: "WEDDING 👭" },
                { value: "Retirement", label: "RETIREMENT" },
              ],
              delay: 600,
            },

            {
              id: "house-question-one",
              delay: 1500,
              message: "You have selected {previousValue}",
              trigger: "house-question-two",
            },

            {
              id: "house-question-two",
              delay: 1500,
              message: "When are you planning to buy your dream house?",
              trigger: "house-question-three",
            },

            {
              id: "house-question-three",
              options: [
                {
                  value: "thisyear",
                  label: "This Year",
                  trigger: "house-question-four",
                },
                {
                  value: "towthree",
                  label: "Within 2-3 years",
                  trigger: "house-question-four",
                },
                {
                  value: "fourfive",
                  label: "Within 5 years",
                  trigger: "house-question-four",
                },
              ],
              delay: 600,
            },

            {
              id: "house-question-four",
              delay: 1500,
              message: "Superb",
              trigger: "house-question-saven",
            },

            {
              id: "house-question-saven",
              delay: 1500,
              message: "May I know your monthly Income ? Rs..",
              trigger: "salaryanswer",
            },

            {
              id: "salaryanswer",
              user: true,

              delay: 600,
              validator: (value) => {
                if (isNaN(value)) {
                  return "Salary should be a number";
                }
                if (isNaN(value) || value < 1000) {
                  return "Salary must be above Rs 1000 ";
                }
                return true;
              },
              trigger: "annualsalary",
            },

            {
              id: "salary-user-answer-one",
              options: [
                {
                  value: "thwtissalaryincrementisyear",
                  label: "What is salary increment rate?",
                  trigger: "salary-inc",
                },
                { value: "skip", label: "Skip", trigger: "rate" },
              ],
              delay: 600,
            },

            {
              id: "annualsalary",
              message: "What is your annual salary increment rate? ",
              delay: 600,
              trigger: "salary-user-answer-one",
            },

            {
              id: "rate",

              validator: (rate) => {
                if (isNaN(rate)) {
                  return "rate should be a number";
                }
                if (isNaN(rate) || rate > 50000) {
                  return "Rate must be a number between 1 to 100";
                }
                return true;
              },
              user: true,
              delay: 1500,
              trigger: "summary-ends-que",
            },

            {
              id: "salary-inc",
              component: <div> Percentage of salary increase each year </div>,
              delay: 600,
              trigger: "rate",
            },

            {
              id: "summary-ends-que",
              message: "Below is the summary of your details",
              trigger: "summary-ends",
              delay: 600,
            },

            {
              id: "summary-ends",
              trigger: "summary-end",
              component:
               <div>
                          HI
                  
                        </div>,
              asMessage: false,
              delay: 600,
            },

            {
              id: "summary-end",
              message:
                "Below is TT Builders' Life Planners prediction of your economy",
              trigger: "summary-end-graph",
              delay: 600,
            },

            {
              id: "summary-end-graph",
              trigger: "summary-ends-last",
              // component: <Modal.Dialog><Calculators salaryanswer={this.state.salaryanswer} rate={this.state.rate}/> </Modal.Dialog>,
              component: <Starts />,

              asMessage: false,
              delay: 600,
            },

            {
              id: "summary-ends-last",
              message: "Would you like to update some field?",
              trigger: "update-question",
              delay: 5000,
            },

            {
              id: "update-question",
              options: [
                { value: "yes", label: "Yes", trigger: "update-yes" },
                { value: "no", label: "No", trigger: "end-message" },
              ],
              delay: 600,
            },

            {
              id: "update-yes",
              message: "What field would you like to update?",
              trigger: "update-fields",
              delay: 600,
            },
            {
              id: "update-fields",
              options: [
                {
                  value: "income",
                  label: "Monthly income",
                  trigger: "update-income",
                },
                { value: "Expenses", label: "Expenses" },
              ],
              delay: 600,
            },

            {
              id: "update-income",
              update: "salaryanswer",
              trigger: "summary-ends-que",
              delay: 600,
            },
            {
              id: "end-message",

              message: "Thanks! ",

              end: true,
            },

            {
              id: "jokes-ans-two-tamil",
              component: (
                <div>
                  PATIENT:- Sir I play tennis, football and cricket daily..
                </div>
              ),
              delay: 2800,
              // trigger: 'jokes-ans-three-tamil',
            },
          ]}
          {...config}
        />
      </ThemeProvider>
    );
  }
}

export default SimpleForm;
