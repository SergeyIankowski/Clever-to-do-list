# Clever-to-do-list

Todo-list app for innowise trainingship

Deploy: [Clever Todo App](https://clever-todo-list-innowise.netlify.app)

Clever-Todo-list with Calendar based on React, Redux/toolkit, Firebase.

1. **Task:** [link](https://drive.google.com/file/d/18I1PxOxZn2lwm__YeOtMNoWeiXygKwwN/view)
2. **Create Firebase App and create .env file in your local repo with all variables from firebase obj config** (variables names are in src/firebase/index.ts).
3. **How to run the app:** `npm install` => `npm run build` (to build prod version) or `npm run serve` (to open dev server)
4. **Folder structure**:

```
clever-todo-list (root of project)
  └───src (folder with source code files)
      |─── components
      |     |─── containers (components with jsx layout and some logic)
      |     └─── view (components with only jsx layout)
      |─── firebase (initialized firebase database and methods for interacting with database)
      |─── hooks (custom hook for Reack App)
      |─── models (pages string enum and contexts)
      |─── pages (pages components for routing)
      |─── sass (styles with .scss files ext)
      |─── store (redux store initialized with redux/toolkit)
      |     |─── reducers (slices initialized with redux/toolkit)
      |     └─── thunks (redux/thunk action functions)
      |─── utils (Support functions placed in separate files. Files with.ts ext)
      |     └─── validationErrors (functions for validation errors)
      |─── AppRouter.tsx (react-router-dom component for routing)
      |─── index.html
      └─── index.tsx
```

5. **Functionality**:

- You can register or log in to your profile.
- You can choose a day and create, change or delete todo item.
- **When you log in to your account in another devices at the same time, сhanging the board on one device automatically changes the board on all devices at once.**