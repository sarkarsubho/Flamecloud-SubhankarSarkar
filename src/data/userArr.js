var users = [
  {
    name: "moazzim",
    dp: "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "subhankar",
    dp: "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "tommy",
    dp: "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "tanmay",
    dp: "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  }
];
var actionPlan=[
  {id:1,
   label:"Marketing",
   subCategory:[
    {id:1,
      lebel:"wordpress",
      subCategory:[]
    },
    {id:2,
      lebel:"Google Drive",
      subCategory:[
        {id:1,
          lebel:"Pointer 1",
          subCategory:[]
        },
        {id:2,
          lebel:"Pointer 2",
          subCategory:[]
        },
        {id:3,
          lebel:"Pointer 3",
          subCategory:[]
        }
      ]
    }
   ]
  },
  {id:2,
  label:"Design",
  subCategory:[]
 },
 {id:3,
 label:"Sales",
 subCategory:[]
}
]
export {users,actionPlan}
