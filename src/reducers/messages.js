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
                          "body": "I went to the zoo. --John"
                        }
                      ],
                  "4/13/20":
                      [],
                  "4/20/20":
                      [
                        {
                          "subject": "Fun",
                          "body": "I dont like tacos. --John"
                        },
                        {
                          "subject": "Re: Fun",
                          "body": "I forgot to say, cruchy tacos --John"
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
                            "body": "I am your new buddy. --Ted"
                          }

                        ],
                    "4/13/20":
                        [],
                    "4/20/20":
                        [
                          {
                            "subject": "Re: Fun",
                            "body": "enchiladas are fine though. --Ted"
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
                            "body": "I cant be your volunteer anymore!"
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
                          "body": "I went to the zoo. --Sally"
                        }
                      ],
                  "4/13/20":
                      [
                        {
                          "subject": "Re: Hi Joan",
                          "body": "Why does air exist? --Sally"
                        }
                      ],
                  "4/20/20":
                      [
                        {
                          "subject": "Re: Hi Joan",
                          "body": "I thought that was maybe why. --Sally"
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
                            "body": "I am your new buddy. --Joan"
                          }
                        ],
                    "4/13/20":
                        [
                          {
                            "subject": "Re: Hi Joan",
                            "body": "Air is for inflating volley balls. --Joan"
                          }
                        ],
                    "4/20/20":
                        [
                          {
                            "subject": "Re: Hi Joan",
                            "body": "Im glad you understand about air now, --Joan"
                          }
                        ]
                  }
            }
          ]
    }],
  record:{}
};

const messagesReducer = (state = initialState, action) => {
    if (action.type === "SHOW_MESSAGE") {
        return {
            ...state,
            record: action.payload
        };
    } else {
        return state;
    }
};

export default messagesReducer;
