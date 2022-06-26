export const currentUser = {
    "image": "./assets/user-images/image-zena.jpg",
    "name": "Zena Kelley",
    "userName": "velvetround"
  }

  /**
   * id: number;
    krCardNumber: string;
    title: string;
    state: StateEnum;
    comments: IComment[];
   */


export const krListMockJson = [
  {
    "id": 1,
    "krCardNumber": "KR-3549",
    "title": "Deployment of 19th June",
    "state": "qa-deployed",
    "comments": [
      {
        "id": 1,
        "content": "Awesome idea! Trying to find framework-specific projects within the hubs can be tedious",
        "user": {
          "image": "./assets/user-images/image-suzanne.jpg",
          "name": "Suzanne Chang",
          "userName": "upbeat1811"
        }
      },
      {
        "id": 2,
        "content": "Please use fun, color-coded labels to easily identify them at a glance",
        "user": {
          "image": "./assets/user-images/image-thomas.jpg",
          "name": "Thomas Hood",
          "userName": "brawnybrave"
        }
      }
    ],
    "date": "2-2-2022"
  },
  {
    "id": 2,
    "krCardNumber": "KR-3599",
    "title": "Deployment of 19th June",
    "state": "qa-deployed",
    "comments": [
      {
        "id": 3,
        "content": "Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.",
        "user": {
          "image": "./assets/user-images/image-elijah.jpg",
          "name": "Elijah Moss",
          "userName": "hexagon.bestagon"
        }
      },
      {
        "id": 4,
        "content": "Second this! I do a lot of late night coding and reading. Adding a dark theme can be great for preventing eye strain and the headaches that result. It’s also quite a trend with modern apps and  apparently saves battery life.",
        "user": {
          "image": "./assets/user-images/image-james.jpg",
          "name": "James Skinner",
          "userName": "hummingbird1"
        },
        "replies": [
          {
            "content": "While waiting for dark mode, there are browser extensions that will also do the job. Search for 'dark theme' followed by your browser. There might be a need to turn off the extension for sites with naturally black backgrounds though.",
            "replyingTo": "hummingbird1",
            "user": {
              "image": "./assets/user-images/image-anne.jpg",
              "name": "Anne Valentine",
              "userName": "annev1990"
            }
          },
          {
            "content": "Good point! Using any kind of style extension is great and can be highly customizable, like the ability to change contrast and brightness. I'd prefer not to use one of such extensions, however, for security and privacy reasons.",
            "replyingTo": "annev1990",
            "user": {
              "image": "./assets/user-images/image-ryan.jpg",
              "name": "Ryan Welles",
              "userName": "voyager.344"
            }
          }
        ]
      }
    ],
    "date": "3-2-2022"
  },
  {
    "id": 3,
    "krCardNumber": "KR-3649",
    "title": "Deployment of 19th June",
    "state": "qa-deployed",
    "comments": [
      {
        "id": 5,
        "content": "Awesome idea! Trying to find framework-specific projects within the hubs can be tedious",
        "user": {
          "image": "./assets/user-images/image-suzanne.jpg",
          "name": "Suzanne Chang",
          "userName": "upbeat1811"
        }
      }
    ],
    "date": "4-2-2022"
  },
  {
    "id": 4,
    "krCardNumber": "KR-3659",
    "title": "Deployment of 19th June",
    "state": "qa-deployed",
    "comments": [
      {
        "id": 6,
        "content": "Much easier to get answers from devs who can relate, since they've either finished the challenge themselves or are in the middle of it.",
        "user": {
          "image": "./assets/user-images/image-george.jpg",
          "name": "George Partridge",
          "userName": "soccerviewer8"
        }
      }
    ],
    "date": "5-2-2022"
  }
];

/**
 * card: KRCard;
    description: string;
    linkedKRCards: ILinkedCard[]
 */

/**
 * cardNumber: string;
    title: string;
 */

    /**
     * { value: 'analysis completed', label: 'Analysis Completed' },
    { value: 'qa-deployed', label: 'QA Deployed' },
    { value: 'stage-deployed', label: 'Stage Deployed' },
    { value: 'prod-deployed', label: 'Prod Deployed' },
    { value: 'obsolete', label: 'Obsolete' },
    { value: 'todo', label: 'Todo' },
    { value: 'done', label: 'Done' },
    { value: 'on-hold', label: 'On Hold' }
     */

export const krDetailMockJson = [
  {
    "card": {
      "id": 1,
      "krCardNumber": "KR-3549",
      "title": "Deployment of 19th June",
      "state": "qa-deployed",
      "date": "2-2-2022"
    },
    "description": "This is some \n very long long \n description",
    "linkedKrCards": [
      {
        "cardNumber": "ORXE3-6181",
        "title": "Some task",
        "state": "qa-deployed"
      },
      {
        "cardNumber": "ORXE3-6181",
        "title": "Some task",
        "state": "qa-deployed"
      },
      {
        "cardNumber": "ORXE3-6181",
        "title": "Some task",
        "state": "qa-deployed"
      },
      {
        "cardNumber": "ORXE3-6181",
        "title": "Some task",
        "state": "qa-deployed"
      },
      {
        "cardNumber": "ORXE3-6181",
        "title": "Some task",
        "state": "qa-deployed"
      }
    ]
    
  },
  {
    "card": {
      "id": 2,
    "krCardNumber": "KR-3599",
    "title": "Deployment of 19th June",
    "state": "qa-deployed",
    "date": "3-2-2022"
    },
    "description": "This is some \n very long long \n description",
    "linkedKrCards": [
      {
        "cardNumber": "ORXE3-6181",
        "title": "Some task",
        "state": "qa-deployed"
      },
      {
        "cardNumber": "ORXE3-6181",
        "title": "Some task",
        "state": "qa-deployed"
      },
      {
        "cardNumber": "ORXE3-6181",
        "title": "Some task",
        "state": "qa-deployed"
      },
      {
        "cardNumber": "ORXE3-6181",
        "title": "Some task",
        "state": "qa-deployed"
      },
      {
        "cardNumber": "ORXE3-6181",
        "title": "Some task",
        "state": "qa-deployed"
      }
    ]
    
  },
  {
    "card": {
      "id": 3,
      "krCardNumber": "KR-3649",
      "title": "Deployment of 19th June",
      "state": "qa-deployed",
      "date": "4-2-2022"
    },
    "description": "This is some \n very long long \n description",
    "linkedKrCards": [
      {
        "cardNumber": "ORXE3-6181",
        "title": "Some task",
        "state": "qa-deployed"
      },
      {
        "cardNumber": "ORXE3-6181",
        "title": "Some task",
        "state": "qa-deployed"
      },
      {
        "cardNumber": "ORXE3-6181",
        "title": "Some task",
        "state": "qa-deployed"
      },
      {
        "cardNumber": "ORXE3-6181",
        "title": "Some task",
        "state": "qa-deployed"
      },
      {
        "cardNumber": "ORXE3-6181",
        "title": "Some task",
        "state": "qa-deployed"
      }
    ]
    
  },
  {
    "card": {
      "id": 4,
      "krCardNumber": "KR-3659",
      "title": "Deployment of 19th June",
      "state": "qa-deployed",
      "date": "5-2-2022"
    },
    "description": "This is some \n very long long \n description",
    "linkedKrCards": [
      {
        "cardNumber": "ORXE3-6181",
        "title": "Some task",
        "state": "todo"
      },
      {
        "cardNumber": "ORXE3-6181",
        "title": "Some task",
        "state": "qa-deployed"
      },
      {
        "cardNumber": "ORXE3-6181",
        "title": "Some task",
        "state": "qa-deployed"
      },
      {
        "cardNumber": "ORXE3-6181",
        "title": "Some task",
        "state": "qa-deployed"
      },
      {
        "cardNumber": "ORXE3-6181",
        "title": "Some task",
        "state": "qa-deployed"
      }
    ]
  }
]