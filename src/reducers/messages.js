const initialState = {

    "columnNames": [ "4/6/20", "4/13/20","4/20/20"],
  records: [
    {
      "student":
          {
            "studentName": "John",
            "emails":
                {
                  "4/6/20":
                      [
                        {
                          "id" : 528,
                          "subject": "Hi Ted",
                          "body": "I went to the zoo. --John",
                           "status": "new"
                        }
                      ],
                  "4/13/20":
                      [],
                  "4/20/20":
                      [
                        {
                          "subject": "Fun",
                          "body": "I dont like tacos. --John",
                            "status": "new"
                        },
                        {
                          "subject": "Re: Fun",
                          "body": "I forgot to say, cruchy tacos --John",
                            "status": "new"
                        }
                      ]
                }
          },
      "volunteers":
          [
            {
              "volName": "Ted",
              "emails":
                  {
                    "4/6/20":
                        [
                          {
                            "subject": "Hi Ted",
                            "body": "I am your new buddy. --Ted",
                              "status": "new"
                          }

                        ],
                    "4/13/20":
                        [],
                    "4/20/20":
                        [
                          {
                            "subject": "Re: Fun",
                            "body": "enchiladas are fine though. --Ted",
                              "status": "new"
                          }
                        ]
                  }
            },
            {
              "volName": "Enrico",
              "emails":
                  {
                    "4/6/20":
                        [
                          {
                            "subject": "Goodbye John",
                            "body": "I cant be your volunteer anymore!",
                              "status": "new"
                          }
                        ],
                    "4/13/20":
                        [],
                    "4/20/20":
                        []
                  }
            }
          ]
    },
    {
      "student":
          {
            "studentName": "Sally",
            "emails":
                {
                  "4/6/20":
                      [
                        {
                          "subject": "Hi Joan",
                          "body": "I went to the zoo. --Sally",
                            "status": "okay"
                        }
                      ],
                  "4/13/20":
                      [
                        {
                          "subject": "Re: Hi Joan",
                          "body": "Why does air exist? --Sally",
                            "status": "hold"
                        }
                      ],
                  "4/20/20":
                      [
                        {
                          "subject": "Re: Hi Joan",
                          "body": "I thought that was maybe why. --Sally",
                            "status": "new"
                        }
                      ]
                }
          },
      "volunteers":
          [
            {
              "volName": "Joan",
              "emails":
                  {
                    "4/6/20":
                        [
                          {
                            "subject": "Re: Hi Joan",
                            "body": "I am your new buddy. --Joan",
                              "status": "okay"
                          }
                        ],
                    "4/13/20":
                        [
                          {
                            "subject": "Re: Hi Joan",
                            "body": "Air is for inflating volley balls. --Joan",
                              "status": "hold"
                          }
                        ],
                    "4/20/20":
                        [
                          {
                            "subject": "Re: Hi Joan",
                            "body": "Im glad you understand about air now, --Joan",
                              "status": "new"
                          }
                        ]
                  }
            }
          ]
    }],
  record:{},
  message:{}
};

const messagesReducer = (state = initialState, action) => {

    switch (action.type) {
        case "SHOW_RECORD":
            return {...state,
                record: action.payload
            };
        case "SHOW_MESSAGE":
            return {...state,
                message: action.payload
            };
        default:
            return state;

    }
    // if (action.type === "SHOW_MESSAGE") {
    //     return {
    //         ...state,
    //         record: action.payload
    //     };
    // } else if (action.type==="SHOW_RECORD") {
    //     return {
    //         ...state,
    //         record: action.payload
    //     }
    // }
    // else {
    //     return state;
    // }
};

export default messagesReducer;
