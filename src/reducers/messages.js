const initialState = {
    "columnNames": ["4/6/20", "4/13/20", "4/20/20"],
    records:
        [
            {"id": 1,
                "student":
                    [
                        {
                        "entityName": "John",
                        "emails":
                            {
                                "4/6/20":
                                    [
                                        {
                                            "mailId": 528,
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
                                            "mailId": 529,
                                            "subject": "Fun",
                                            "body": "I dont like tacos. --John",
                                            "status": "new"
                                        },
                                        {
                                            "mailId": 530,
                                            "subject": "Re: Fun",
                                            "body": "I forgot to say, cruchy tacos --John",
                                            "status": "new"
                                        }
                                    ]
                            }
                    },],
                "volunteers":
                    [
                        {
                            "entityName": "Ted",
                            "emails":
                                {
                                    "4/6/20":
                                        [
                                            {
                                                "mailId": 531,
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
                                                "mailId": 532,
                                                "subject": "Re: Fun",
                                                "body": "enchiladas are fine though. --Ted",
                                                "status": "new"
                                            }
                                        ]
                                }
                        },
                        {
                            "entityName": "Enrico",
                            "emails":
                                {
                                    "4/6/20":
                                        [
                                            {
                                                "mailId": 533,
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
                "id": 2,
                "student":
                    [{
                        "entityName": "Sally",
                        "emails":
                            {
                                "4/6/20":
                                    [
                                        {
                                            "mailId": 534,
                                            "subject": "Hi Joan",
                                            "body": "I went to the zoo. --Sally",
                                            "status": "okay"
                                        }
                                    ],
                                "4/13/20":
                                    [
                                        {
                                            "mailId": 535,
                                            "subject": "Re: Hi Joan",
                                            "body": "Why does air exist? --Sally",
                                            "status": "hold"
                                        }
                                    ],
                                "4/20/20":
                                    [
                                        {
                                            "mailId": 536,
                                            "subject": "Re: Hi Joan",
                                            "body": "I thought that was maybe why. --Sally",
                                            "status": "new"
                                        }
                                    ]
                            }
                    }],
                "volunteers":
                    [
                        {
                            "entityName": "Joan",
                            "emails":
                                {
                                    "4/6/20":
                                        [
                                            {
                                                "mailId": 537,
                                                "subject": "Re: Hi Joan",
                                                "body": "I am your new buddy. --Joan",
                                                "status": "okay"
                                            }
                                        ],
                                    "4/13/20":
                                        [
                                            {
                                                "mailId": 538,
                                                "subject": "Re: Hi Joan",
                                                "body": "Air is for inflating volley balls. --Joan",
                                                "status": "hold"
                                            }
                                        ],
                                    "4/20/20":
                                        [
                                            {
                                                "mailId": 539,
                                                "subject": "Re: Hi Joan",
                                                "body": "Im glad you understand about air now, --Joan",
                                                "status": "new"
                                            }
                                        ]
                                }
                        }
                    ]
            }
        ]
}
export default function (state=initialState,
                         action) {
    switch (action.type) {
        case "UPDATE_MESSAGE":
            let newState = Object.assign({},state);
                newState.records.find(({id})=>id===action.payload.id)
                [action.payload.entity].find(({entityName})=>entityName === action.payload.entityName)
                ["emails"][action.payload.date].find(({mailId})=>mailId===action.payload.mailId).subject = action.payload.subject
            newState.records.find(({id})=>id===action.payload.id)
                [action.payload.entity].find(({entityName})=>entityName === action.payload.entityName)
                ["emails"][action.payload.date].find(({mailId})=>mailId===action.payload.mailId).body = action.payload.body;
            newState.records.find(({id})=>id===action.payload.id)
                [action.payload.entity].find(({entityName})=>entityName === action.payload.entityName)
                ["emails"][action.payload.date].find(({mailId})=>mailId===action.payload.mailId).status = action.payload.status;
            return newState;

        default:
            return state;
    }


}


